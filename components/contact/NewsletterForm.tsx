"use client";

import React, { useState } from 'react';

export default function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
      {isSubmitted ? (
        <div className="form-success-message" style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '4px', textAlign: 'center' }}>
          <h3 className="h6 u-text-color-primary u-mb-1">Subscribed Successfully</h3>
          <p className="u-mb-0 u-text-size-small">Form submission will be enabled when the backend is connected.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form" aria-label="Newsletter form">
          <div className="row u-gy-3">
            <div className="col-12 col-sm-6">
              <input type="text" name="firstName" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #a8a8a8', borderRadius: '4px' }} placeholder="First Name" />
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" name="lastName" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #a8a8a8', borderRadius: '4px' }} placeholder="Last Name" />
            </div>
            <div className="col-12 col-sm-8">
              <input type="email" name="email" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #a8a8a8', borderRadius: '4px' }} placeholder="Email Address" />
            </div>
            <div className="col-12 col-sm-4">
              <button type="submit" className="button button-outline" style={{ width: '100%', padding: '0.75rem 1rem' }}>Subscribe</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
