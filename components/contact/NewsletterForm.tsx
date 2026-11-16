"use client";

import React, { useActionState } from 'react';
import { subscribeNewsletterAction, type FormState } from '@/app/actions/public';

const initialState: FormState = { ok: false, message: '' };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribeNewsletterAction, initialState);

  return (
    <div className="newsletter-form-container">
      <style>{`
        .newsletter-form .form-control:focus {
          border-color: #007236 !important;
          outline: none;
          box-shadow: 0 0 0 1px rgba(0, 114, 54, 0.15) !important;
        }
        .newsletter-form .form-control {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
      `}</style>
      {state.ok ? (
        <div className="form-success-message" role="status" aria-live="polite" style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '4px', textAlign: 'center' }}>
          <h3 className="h6 u-text-color-primary u-mb-1">Subscribed Successfully</h3>
          <p className="u-mb-0 u-text-size-small">{state.message}</p>
        </div>
      ) : (
        <form action={formAction} className="newsletter-form" aria-label="Newsletter form">
          {state.message && (
            <p role="alert" style={{ color: '#842029', marginBottom: '0.75rem' }}>{state.message}</p>
          )}
          <div className="row u-gy-3">
            <div className="col-12 col-sm-6">
              <input type="text" name="firstName" maxLength={200} className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #a8a8a8', borderRadius: '4px' }} placeholder="First Name" />
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" name="lastName" maxLength={200} className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #a8a8a8', borderRadius: '4px' }} placeholder="Last Name" />
            </div>
            <div className="col-12 col-sm-8">
              <input type="email" name="email" required maxLength={320} className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #a8a8a8', borderRadius: '4px' }} placeholder="Email Address" />
            </div>
            <div className="col-12 col-sm-4">
              <button type="submit" className="button button-outline" disabled={pending} style={{ width: '100%', padding: '0.75rem 1rem' }}>
                {pending ? 'Subscribing…' : 'Subscribe'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
