import Head from 'next/head';
import React from 'react';

type SEOTagsProps = {
  description?: string;
  metaImage?: string;
  shouldIndexPage?: boolean;
  pageTitle?: string;
}

const HeadWithSeo = ({ description, metaImage, shouldIndexPage, pageTitle }: SEOTagsProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {description && <meta name="description" content={description} />}
      {metaImage && <meta name="image" content={metaImage} />}

      {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#0B1D26" />
      <meta name="msapplication-TileColor" content="#0B1D26" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      {metaImage && <meta property="og:image" content={metaImage} />}
      {metaImage && <meta property="og:image:secure_url" content={metaImage} />}
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jeanmolossi" />
      <meta name="twitter:creator" content="@jeanmolossi" />
      {metaImage && <meta name="twitter:image" content={metaImage} />}
      {metaImage && <meta name="twitter:image:src" content={metaImage} />}
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />

      <title>{pageTitle}</title>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
  );
}

export default HeadWithSeo;