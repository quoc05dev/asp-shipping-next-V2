'use server';

import { db } from '@/lib/db';
import { contactSubmissions, newsletterSubscribers } from '@/lib/db/schema';

export interface FormState {
  ok: boolean;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(formData: FormData, key: string): string {
  return String(formData.get(key) ?? '').trim();
}

export async function submitContactAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const firstName = text(formData, 'firstName');
  const lastName = text(formData, 'lastName');
  const email = text(formData, 'email');
  const phone = text(formData, 'phone');
  const company = text(formData, 'company');
  const subject = text(formData, 'subject');
  const message = text(formData, 'message');
  const agreement = formData.get('agreement') === 'on';

  if (!firstName || !lastName) return { ok: false, message: 'First and last name are required.' };
  if (!EMAIL_RE.test(email)) return { ok: false, message: 'A valid email address is required.' };
  if (!subject) return { ok: false, message: 'Subject is required.' };
  if (message.length < 10) return { ok: false, message: 'Message must be at least 10 characters.' };
  if (!agreement) return { ok: false, message: 'Please agree to the privacy policy.' };
  if ([firstName, lastName, email, phone, company, subject, message].some((v) => v.length > 5000)) {
    return { ok: false, message: 'One of the fields is too long.' };
  }

  try {
    await db.insert(contactSubmissions).values({
      name: `${firstName} ${lastName}`.trim(),
      firstName,
      lastName,
      email,
      phone: phone || null,
      company: company || null,
      subject,
      message,
    });
  } catch (error) {
    console.error('[contact] insert failed:', error);
    return { ok: false, message: 'Could not send your enquiry. Please try again later.' };
  }

  return { ok: true, message: 'Thank you for your enquiry. We will get back to you shortly.' };
}

export async function subscribeNewsletterAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const firstName = text(formData, 'firstName');
  const lastName = text(formData, 'lastName');
  const email = text(formData, 'email');

  if (!EMAIL_RE.test(email)) return { ok: false, message: 'A valid email address is required.' };

  try {
    await db
      .insert(newsletterSubscribers)
      .values({
        email,
        firstName: firstName || null,
        lastName: lastName || null,
        isActive: true,
      })
      .onConflictDoUpdate({
        target: newsletterSubscribers.email,
        set: {
          firstName: firstName || null,
          lastName: lastName || null,
          isActive: true,
        },
      });
  } catch (error) {
    console.error('[newsletter] upsert failed:', error);
    return { ok: false, message: 'Could not subscribe right now. Please try again later.' };
  }

  return { ok: true, message: 'Subscribed successfully.' };
}
