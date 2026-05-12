const SITE_NAME = 'Advanced Talent Group';

const ROUTE_META = {
  '/': {
    title: `${SITE_NAME} - Social Host Careers`,
    description:
      'Join as a social host - video chat, flexible work, and real support.',
  },
  '/faq': {
    title: `FAQ - ${SITE_NAME}`,
    description:
      'Frequently asked questions for social hosts about requirements, payouts, and support.',
  },
  '/privacy': {
    title: `Privacy Policy - ${SITE_NAME}`,
    description:
      'How Advanced Talent Group collects, uses, stores, and protects your personal information.',
  },
  '/cookies': {
    title: `Cookies Policy - ${SITE_NAME}`,
    description:
      'How we use cookies and similar technologies on this website.',
  },
};

function metaForPath(pathname) {
  return (
    ROUTE_META[pathname] || {
      title: SITE_NAME,
      description:
        'Social host careers, flexible schedule, and a supportive team.',
    }
  );
}

function ensureMeta(attr, key) {
  let node = document.querySelector(`meta[${attr}="${key}"]`);
  if (!node) {
    node = document.createElement('meta');
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  return node;
}

/**
 * One-time JSON-LD when VITE_SITE_URL is configured.
 */
export function injectJsonLdWebsite() {
  const site = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
  if (!site || typeof document === 'undefined') return;

  const existing = document.getElementById('jsonld-website');
  if (existing) return;

  const script = document.createElement('script');
  script.id = 'jsonld-website';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: site,
  });
  document.head.appendChild(script);
}

/**
 * Updates title, description, canonical, og:url, and twitter:url.
 */
export function applyRouteSeo(pathname) {
  const currentPath = pathname || '/';
  const meta = metaForPath(currentPath);
  document.title = meta.title;

  const description = ensureMeta('name', 'description');
  description.setAttribute('content', meta.description);

  const site = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
  if (!site) return;

  const url = `${site}${currentPath}`;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  ensureMeta('property', 'og:title').setAttribute('content', meta.title);
  ensureMeta('property', 'og:description').setAttribute('content', meta.description);
  ensureMeta('property', 'og:type').setAttribute('content', 'website');
  ensureMeta('property', 'og:url').setAttribute('content', url);

  ensureMeta('name', 'twitter:card').setAttribute('content', 'summary_large_image');
  ensureMeta('name', 'twitter:title').setAttribute('content', meta.title);
  ensureMeta('name', 'twitter:description').setAttribute('content', meta.description);
  ensureMeta('name', 'twitter:url').setAttribute('content', url);

  const imageBase = (import.meta.env.VITE_OG_IMAGE_URL || '').trim();
  const imageAbs =
    imageBase && imageBase.startsWith('http')
      ? imageBase
      : `${site}${imageBase || '/og-image.png'}`;
  ensureMeta('property', 'og:image').setAttribute('content', imageAbs);
  ensureMeta('name', 'twitter:image').setAttribute('content', imageAbs);
}
