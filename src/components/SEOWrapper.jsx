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
        <link rel="canonical" href={`https://codethriveinfo.in${location.pathname}`} />
        {/* Open Graph */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://codethriveinfo.in${location.pathname}`} />
      </Helmet>
      {children}
    </>
  );
}
