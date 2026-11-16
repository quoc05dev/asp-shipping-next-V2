import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getCmsRepository } from '@/data/cms/getCmsRepository';

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cmsRepository = await getCmsRepository();
  const article = (await cmsRepository.getLatestNews()).find((item) => item.slug === slug);

  if (!article) notFound();

  const date = formatDate(article.date);

  return (
    <>
      <Header />
      <main id="siteMain" className="main container container-rfs container-w-outer" style={{ backgroundColor: '#ffffff', minHeight: '60vh' }}>
        <article className="content-single" style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1rem 4rem' }}>
          <Link href="/media/latest-news" style={{ color: '#007236', textDecoration: 'underline' }}>
            Latest News
          </Link>
          {article.category && (
            <p className="h6 u-text-color-primary u-mt-4 u-mb-2">{article.category}</p>
          )}
          <h1 className="heading h2 u-mb-3">{article.title}</h1>
          {date && <time className="entry-time h6 u-text-color-secondary" dateTime={article.date}>{date}</time>}
          {article.image.url && (
            <img
              src={article.image.url}
              alt={article.image.alt || article.title}
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto', margin: '2rem 0', borderRadius: '4px' }}
            />
          )}
          <p className="u-mb-4">{article.excerpt}</p>
          <Link href="/media/latest-news" className="button button-outline">
            Back to latest news
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
