import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { seoData } from '../seo';

export function SEOWrapper({ children }) {
  const location = useLocation();
  const seo = seoData[location.pathname] || seoData['/'];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        <link rel="canonical" href={`https://codethriveinfo.vercel.app${location.pathname}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://codethriveinfo.vercel.app${location.pathname}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://codethriveinfo.vercel.app${location.pathname}`} />
        <meta property="twitter:title" content={seo.title} />
        <meta property="twitter:description" content={seo.description} />
        <meta property="twitter:image" content={seo.ogImage} />
      </Helmet>
      {children}
    </>
  );
}
