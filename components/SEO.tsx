import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  structuredData?: object;
}

const defaultTitle = 'The Gryphon Group LLC - Navigating Risk with Nobility';
const defaultDescription = 'The Gryphon Group LLC provides professional commercial real estate services. Explore our projects in South Carolina and Washington, and learn about our trusted team and partners.';
const defaultOGImage = '/img/The-Gryphon-Group-LLC-White.png';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thegryphongroup.com';

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  canonical,
  ogImage = defaultOGImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title === defaultTitle ? title : `${title} | The Gryphon Group LLC`;
  const canonicalUrl = canonical || siteUrl;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="The Gryphon Group LLC" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="The Gryphon Group LLC" />
      <meta name="theme-color" content="#0d6efd" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}

