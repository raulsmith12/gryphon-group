export interface OrganizationStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  founder?: {
    '@type': string;
    name: string;
  };
  sameAs?: string[];
}

export interface WebSiteStructuredData {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thegryphongroup.com';

export function getOrganizationStructuredData(): OrganizationStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Gryphon Group LLC',
    url: siteUrl,
    logo: `${siteUrl}/img/The-Gryphon-Group-LLC-White.png`,
    description: 'The Gryphon Group LLC provides professional commercial real estate services, navigating risk with nobility.',
    founder: {
      '@type': 'Person',
      name: 'David Green',
    },
    sameAs: [
      // Add social media links here when available
    ],
  };
}

export function getWebSiteStructuredData(): WebSiteStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Gryphon Group LLC',
    url: siteUrl,
    description: 'The Gryphon Group LLC - Professional commercial real estate services',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getPersonStructuredData(name: string, jobTitle: string, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    ...(image && { image: image.startsWith('http') ? image : `${siteUrl}${image}` }),
    worksFor: {
      '@type': 'Organization',
      name: 'The Gryphon Group LLC',
    },
  };
}

