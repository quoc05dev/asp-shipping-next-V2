import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy - Asia Pacific Shipping',
  description: 'How Asia Pacific Shipping collects, uses and protects personal information submitted through this website.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '60vh' }}>
        <div className="content-width" style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1rem 4rem' }}>
          <h1 className="heading h2 u-mb-4">Privacy Policy</h1>
          <p className="u-mb-4">
            Asia Pacific Shipping respects your privacy. This policy explains what information we collect through
            this website, why we collect it, and how we handle it.
          </p>

          <h2 className="heading h5 u-mt-6 u-mb-3">Information we collect</h2>
          <p className="u-mb-3">
            When you submit the contact form, we collect the name, email address, phone number, company and message
            you provide. When you subscribe to our newsletter, we collect your name and email address. We also
            receive standard technical information from your browser, such as your IP address and the pages you
            visit, through our hosting provider.
          </p>

          <h2 className="heading h5 u-mt-6 u-mb-3">How we use your information</h2>
          <p className="u-mb-3">
            We use your information to respond to enquiries, send the newsletter you requested, operate and secure
            the website, and comply with legal obligations. We do not sell your personal information.
          </p>

          <h2 className="heading h5 u-mt-6 u-mb-3">Sharing and storage</h2>
          <p className="u-mb-3">
            Information is stored in our website database and may be processed by service providers that host or
            support the website. We keep personal information only for as long as needed for the purposes above or
            as required by law.
          </p>

          <h2 className="heading h5 u-mt-6 u-mb-3">Your choices</h2>
          <p className="u-mb-3">
            You can ask us to access, correct or delete the personal information you have submitted, and you can
            unsubscribe from the newsletter at any time by contacting us.
          </p>

          <h2 className="heading h5 u-mt-6 u-mb-3">Contact</h2>
          <p className="u-mb-0">
            For privacy questions or requests, contact us at{' '}
            <a href="mailto:info@aspshipping.vn" style={{ color: '#007236', textDecoration: 'underline' }}>
              info@aspshipping.vn
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
