import { Helmet } from 'react-helmet-async';

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonical,
  type = "website" 
}) {
  const siteTitle = "Dinasti AC Services";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Layanan AC Profesional`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
