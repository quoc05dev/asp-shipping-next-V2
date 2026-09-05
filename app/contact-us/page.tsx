import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePageHero from '@/components/what-we-do/ServicePageHero';
import ContactForm from '@/components/contact/ContactForm';
import NewsletterForm from '@/components/contact/NewsletterForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ASP Shipping',
  description: 'Reach out to Asia Pacific Shipping for global maritime solutions. We have regional offices in Singapore, Copenhagen, Manila and Tokyo.',
};

const Divider = () => (
  <div className="layout layout-spacer layout-page layout-root">
    <div className="layout-inner">
      <div className="spacer spacer-medium"></div>
    </div>
    <div className="layout layout-horizontal-line layout-page layout-full u-px-0 layout-root">
      <div className="layout-inner container container-max">
        <hr className="u-my-0" style={{ borderTop: '1px solid #e5e5e5' }} />
      </div>
    </div>
    <div className="layout-inner">
      <div className="spacer spacer-medium"></div>
    </div>
  </div>
);

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: 'var(--theme-header-height-rem, 4.25rem)' }}>
        
        {/* Breadcrumb - Outside Hero */}
        <div className="site-breadcrumb u-text-size-small" style={{ paddingTop: '0.4rem', paddingBottom: '0.4rem', backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea' }}>
          <div className="container container-w-outer container-max container-rfs">
            <ol className="breadcrumb" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <li className="breadcrumb-item" style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" className="breadcrumb-link" style={{ textDecoration: 'none' }}>
                  <span className="breadcrumb-label">Home</span>
                </Link>
                <span className="breadcrumb-separator" style={{ margin: '0 0.35rem', color: '#007236', fontSize: '0.6em' }}>■</span>
              </li>
              <li className="breadcrumb-item active" aria-current="page" style={{ display: 'flex', alignItems: 'center' }}>
                <span className="breadcrumb-link breadcrumb-link-current" style={{ textDecoration: 'none' }}>Contact Us</span>
              </li>
            </ol>
          </div>
        </div>

        <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
          
          <ServicePageHero content={{ eyebrow: "", title: "Contact Us", subtitle: "", image: { url: "/wp-content/uploads/asp_images/sustainability/governance-oversight.webp", alt: "Asia Pacific Shipping Operations" } }} />
          
          <Divider />

          {/* 01 - The Asia Pacific Shipping Difference */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5">
                <div className="col-12 col-lg-6">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    The Asia Pacific Shipping Difference
                  </h2>
                  <div className="section-lead-content u-h4 u-mb-4">
                    <p>Our whistle-blowing platform is hosted on an external platform by <a href="https://secure.ethicspoint.eu/domain/media/en/gui/105447" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>EthicsPoint</a>. At Asia Pacific Shipping, we value our reputation as a reliable provider of maritime energy transportation services.</p>
                  </div>
                  <div className="button-group u-mt-4">
                    <a href="https://secure.ethicspoint.eu/domain/media/en/gui/105447/report.html" title="Reach Out Via EthicsPoint" target="_blank" rel="noopener noreferrer" className="button button-outline">
                      <span>Reach Out Via EthicsPoint</span>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                  <div className="content-width">
                    <p>
                      Our stakeholders, both internal and external, should speak up where they have concerns over possible breaches of ethics or standards of professional conduct. Your confidentiality is assured and you have our commitment for action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 02 - Our Offices */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-mb-4">
                <div className="col-12">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    Our Offices
                  </h2>
                  <div className="section-lead-content u-h4">
                    <p>Beyond our headquarters in Singapore, Asia Pacific Shipping also has regional offices in Copenhagen, Manila and Tokyo.</p>
                  </div>
                </div>
              </div>
              
              <div className="row row-locations u-gy-4">
                {/* Singapore */}
                <div className="col-12 col-md-6 col-xxl-3 d-flex">
                  <div className="card card-location u-bg-lighter u-border-radius w-100 u-overflow-hidden" style={{ border: '1px solid #eaeaea' }}>
                    <div className="ratio ratio-4x3" style={{ width: '100%', height: '200px', backgroundColor: '#e5e5e5' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.830327073398!2d103.79676162668937!3d1.2751081618079503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1bc1c1bb8d11%3A0xe0eb605f8b2ff167!2sMapletree%20Business%20City!5e0!3m2!1sen!2ssg!4v1705549127324!5m2!1sen!2ssg"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="card-body u-p-4 d-flex flex-column">
                      <h3 className="h5 card-title u-text-color-black u-mb-3">Singapore Headquarters</h3>
                      <address className="u-mb-4" style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
                        10 Pasir Panjang Road<br />
                        #17-01, Mapletree Business City<br />
                        Singapore 117438
                      </address>
                      <div className="mt-auto pt-3" style={{ borderTop: '1px solid #eaeaea' }}>
                        <span className="u-font-weight-bold">Tel: </span>
                        <a href="tel:+6562307801" style={{ color: '#007236', textDecoration: 'none' }}>+65 6230 7801</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copenhagen */}
                <div className="col-12 col-md-6 col-xxl-3 d-flex">
                  <div className="card card-location u-bg-lighter u-border-radius w-100 u-overflow-hidden" style={{ border: '1px solid #eaeaea' }}>
                    <div className="ratio ratio-4x3" style={{ width: '100%', height: '200px', backgroundColor: '#e5e5e5' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.639097333276!2d12.593447916033584!3d55.69526210389571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465252de1e9596b1%3A0xc711e172108a8706!2sIndiakaj%206%2C%202100%20K%C3%B8benhavn!5e0!3m2!1sen!2ssg!4v1672227982617!5m2!1sen!2ssg"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="card-body u-p-4 d-flex flex-column">
                      <h3 className="h5 card-title u-text-color-black u-mb-3">Copenhagen Office</h3>
                      <address className="u-mb-4" style={{ fontStyle: 'normal', lineHeight: '1.6' }}>
                        Indiakaj 6<br />
                        2100 Copenhagen<br />
                        Denmark
                      </address>
                      <div className="mt-auto pt-3" style={{ borderTop: '1px solid #eaeaea' }}>
                        <span className="u-font-weight-bold">Tel: </span>
                        <a href="tel:+4532261000" style={{ color: '#007236', textDecoration: 'none' }}>+45 3226 1000</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manila */}
                <div className="col-12 col-md-6 col-xxl-3 d-flex">
                  <div className="card card-location u-bg-lighter u-border-radius w-100 u-overflow-hidden" style={{ border: '1px solid #eaeaea' }}>
                    <div className="ratio ratio-4x3" style={{ width: '100%', height: '200px', backgroundColor: '#e5e5e5' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.579538701513!2d121.02582097516373!3d14.566020527922216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9ba30cf4ccd%3A0x308ecf3764200af!2sCentury%20Diamond%20Tower(BW%20SHIPPING)%20new%20office!5e0!3m2!1sen!2ssg!4v1717401419483!5m2!1sen!2ssg"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <div className="card-body u-p-4 d-flex flex-column">
                      <h3 className="h5 card-title u-text-color-black u-mb-3">Manila Office</h3>
                      <address className="u-mb-3" style={{ fontStyle: 'normal', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        Unit 2 33rd Floor and Unit 1A-1 32nd Floor Century Diamond Tower Kalayaan Avenue cor Salamanca Street Barangay Poblacion, Makati City 1210 Philippines
                      </address>
                      <div className="mt-auto pt-3" style={{ borderTop: '1px solid #eaeaea', fontSize: '0.95rem' }}>
                        <div className="u-mb-1"><span className="u-font-weight-bold">Trunkline: </span><a href="tel:+63253183700" style={{ color: '#007236', textDecoration: 'none' }}>+63 2 5318 3700</a></div>
                        <div className="u-mb-1"><span className="u-font-weight-bold">Smart: </span><a href="tel:+639088862935" style={{ color: '#007236', textDecoration: 'none' }}>+63 908 886 2935</a></div>
                        <div><span className="u-font-weight-bold">Globe: </span><a href="tel:+639171862935" style={{ color: '#007236', textDecoration: 'none' }}>+63 917 186 2935</a></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tokyo */}
                <div className="col-12 col-md-6 col-xxl-3 d-flex">
                  <div className="card card-location u-bg-lighter u-border-radius w-100 u-overflow-hidden" style={{ border: '1px solid #eaeaea' }}>
                    <div className="ratio ratio-4x3" style={{ width: '100%', height: '200px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img 
                        src="/wp-content/uploads/asp_images/partners/logo-client-chinaland.png" 
                        alt="Tokyo Office Affiliate" 
                        style={{ maxWidth: '60%', maxHeight: '60%', objectFit: 'contain' }} 
                      />
                    </div>
                    <div className="card-body u-p-4 d-flex flex-column">
                      <h3 className="h5 card-title u-text-color-black u-mb-3">Tokyo Office</h3>
                      <div className="mt-auto pt-3" style={{ borderTop: '1px solid #eaeaea' }}>
                        <span className="u-font-weight-bold">Tel: </span>
                        <a href="tel:+815068628493" style={{ color: '#007236', textDecoration: 'none' }}>+81 50 6862 8493</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 03 - Have a Question / Contact Form */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-gy-4 u-gx-5">
                <div className="col-12 col-lg-5">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    Have a Question?
                  </h2>
                  <div className="section-lead-content u-h4 u-mb-4">
                    <p>Leave us a message and we will get back to you as soon as possible.</p>
                  </div>
                  <div className="button-group u-mt-4">
                    <a href="mailto:communications@bwek.com" className="button button-outline" style={{ display: 'inline-block' }}>
                      <span>communications@bwek.com</span>
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 04 - Our Departments Table */}
          <section className="layout layout-page layout-root">
            <div className="layout-inner">
              <div className="row u-mb-4">
                <div className="col-12">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    Our Departments
                  </h2>
                  <div className="section-lead-content u-h4">
                    <p>Have a department-specific question? Reach out to our heads of department directly.</p>
                  </div>
                </div>
              </div>
              
              <div className="table-responsive">
                <table className="table table-hover" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #eaeaea' }}>
                      <th style={{ padding: '1rem 0.5rem' }}>Department</th>
                      <th style={{ padding: '1rem 0.5rem' }}>Email</th>
                      <th style={{ padding: '1rem 0.5rem' }}>Key Contact</th>
                      <th style={{ padding: '1rem 0.5rem' }}>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>Chartering</td>
                      <td style={{ padding: '1rem 0.5rem' }}><a href="mailto:chartering@bwek.com" style={{ color: '#007236', textDecoration: 'underline' }}>chartering@bwek.com</a></td>
                      <td style={{ padding: '1rem 0.5rem' }}>Christian Fjeldborg Grønlund</td>
                      <td style={{ padding: '1rem 0.5rem' }}>Commercial Director</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>Technical</td>
                      <td style={{ padding: '1rem 0.5rem' }}><a href="mailto:nsingh@bwek.com" style={{ color: '#007236', textDecoration: 'underline' }}>nsingh@bwek.com</a></td>
                      <td style={{ padding: '1rem 0.5rem' }}>Niraj Singh</td>
                      <td style={{ padding: '1rem 0.5rem' }}>Technical Director</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>Finance</td>
                      <td style={{ padding: '1rem 0.5rem' }}><a href="mailto:uurbaniak@bwek.com" style={{ color: '#007236', textDecoration: 'underline' }}>uurbaniak@bwek.com</a></td>
                      <td style={{ padding: '1rem 0.5rem' }}>Uta Urbaniak-Sage</td>
                      <td style={{ padding: '1rem 0.5rem' }}>Chief Financial Officer</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>Human Resources</td>
                      <td style={{ padding: '1rem 0.5rem' }}><a href="mailto:recruit@bwek.com" style={{ color: '#007236', textDecoration: 'underline' }}>recruit@bwek.com</a></td>
                      <td style={{ padding: '1rem 0.5rem' }}>Fevian Leong</td>
                      <td style={{ padding: '1rem 0.5rem' }}>Human Resources Director</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>Media</td>
                      <td style={{ padding: '1rem 0.5rem' }}><a href="mailto:communications@bwek.com" style={{ color: '#007236', textDecoration: 'underline' }}>communications@bwek.com</a></td>
                      <td style={{ padding: '1rem 0.5rem' }}>Uta Urbaniak-Sage</td>
                      <td style={{ padding: '1rem 0.5rem' }}>Chief Financial Officer</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eaeaea' }}>
                      <td style={{ padding: '1rem 0.5rem' }}>Projects</td>
                      <td style={{ padding: '1rem 0.5rem' }}><a href="mailto:projects@bwek.com" style={{ color: '#007236', textDecoration: 'underline' }}>projects@bwek.com</a></td>
                      <td style={{ padding: '1rem 0.5rem' }}>Rune Wang Foelbaek</td>
                      <td style={{ padding: '1rem 0.5rem' }}>Senior Projects Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <Divider />

          {/* 05 - Newsletter & Join Us */}
          <section className="layout layout-page layout-root u-pb-7">
            <div className="layout-inner">
              <div className="row u-gy-5 u-gx-5">
                <div className="col-12 col-lg-7">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    Subscribe to Our Newsletter
                  </h2>
                  <div className="section-lead-content u-h4 u-mb-4">
                    <p>Sign up to receive alerts on press releases and updates on business activities.</p>
                  </div>
                  <NewsletterForm />
                </div>
                <div className="col-12 col-lg-5 ps-lg-5">
                  <h2 className="heading h5 u-mb-3 section-lead-subheading subheading u-text-color-primary u-mb-0">
                    Join Us Today
                  </h2>
                  <div className="section-lead-content u-h4 u-mb-4">
                    <p>Asia Pacific Shipping offers exciting and rewarding career opportunities to people who have the skills and determination to succeed at sea and/or ashore.</p>
                  </div>
                  <Link href="/careers" className="button button-outline" style={{ display: 'inline-block' }}>
                    <span>Careers at Asia Pacific Shipping &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
        </main>
      </div>
      <Footer />
    </>
  );
}
