"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-form-container">
      {isSubmitted ? (
        <div className="form-success-message" style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '4px', textAlign: 'center' }}>
          <h3 className="h5 u-text-color-primary u-mb-2">Thank you for your enquiry</h3>
          <p className="u-mb-0">Form submission will be enabled when the backend is connected.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
          <div className="row u-gy-3">
            <div className="form-group col-12 col-md-6">
              <label htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>First Name <span style={{ color: '#007236' }}>*</span></label>
              <input type="text" id="firstName" name="firstName" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="First Name" />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="lastName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Last Name <span style={{ color: '#007236' }}>*</span></label>
              <input type="text" id="lastName" name="lastName" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Last Name" />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email <span style={{ color: '#007236' }}>*</span></label>
              <input type="email" id="email" name="email" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Email" />
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone</label>
              <input type="tel" id="phone" name="phone" className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Phone" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Company</label>
              <input type="text" id="company" name="company" className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Company" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Subject <span style={{ color: '#007236' }}>*</span></label>
              <input type="text" id="subject" name="subject" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Subject" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message <span style={{ color: '#007236' }}>*</span></label>
              <textarea id="message" name="message" required className="form-control" rows={5} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Type your message here."></textarea>
            </div>
            <div className="form-group col-12 mt-2">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" id="agreement" name="agreement" required style={{ marginRight: '0.75rem', width: '1.25rem', height: '1.25rem' }} />
                <label htmlFor="agreement" style={{ margin: 0 }}>Agreement to <a href="/privacy-policy" style={{ color: '#007236', textDecoration: 'underline' }}>Privacy Policy</a></label>
              </div>
            </div>
            <div className="form-group col-12 mt-4">
              <button type="submit" className="button button-outline">Submit Enquiry</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
