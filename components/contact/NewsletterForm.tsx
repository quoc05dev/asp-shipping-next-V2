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
      {isSubmitted ? (
        <div className="form-success-message" style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '4px', textAlign: 'center' }}>
          <h3 className="h6 u-text-color-primary u-mb-1">Subscribed Successfully</h3>
          <p className="u-mb-0 u-text-size-small">Form submission will be enabled when the backend is connected.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form" aria-label="Newsletter form">
          <div className="row u-gy-3">
            <div className="col-12 col-sm-6">
              <input type="text" name="firstName" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="First name" />
            </div>
            <div className="col-12 col-sm-6">
              <input type="text" name="lastName" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Last name" />
            </div>
            <div className="col-12">
              <input type="email" name="email" required className="form-control" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Your email address" />
            </div>
            <div className="col-12 u-mt-3">
              <button type="submit" className="button button-outline button-outline-secondary" style={{ width: '100%' }}>Subscribe</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
