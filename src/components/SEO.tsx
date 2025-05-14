import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = "BlogMaster - Modern Blog Platform",
  description = "A modern blog platform focused on delivering high-quality content with an exceptional user experience and SEO optimization.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
  url = typeof window !== "undefined" ? window.location.href : "",
  type = "website",
  twitterCard = "summary_large_image",
  twitterSite = "@blogmaster",
  twitterCreator = "@blogmaster",
  canonicalUrl = typeof window !== "undefined" ? window.location.href : "",
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    updateOrCreateMetaTag("description", description, "name");

    // Open Graph tags
    updateOrCreateMetaTag("og:title", title);
    updateOrCreateMetaTag("og:description", description);
    updateOrCreateMetaTag("og:image", image);
    updateOrCreateMetaTag("og:url", url);
    updateOrCreateMetaTag("og:type", type);

    // Twitter Card tags
    updateOrCreateMetaTag("twitter:card", twitterCard);
    updateOrCreateMetaTag("twitter:site", twitterSite);
    updateOrCreateMetaTag("twitter:creator", twitterCreator);
    updateOrCreateMetaTag("twitter:title", title);
    updateOrCreateMetaTag("twitter:description", description);
    updateOrCreateMetaTag("twitter:image", image);

    // Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl);
  }, [
    title,
    description,
    image,
    url,
    type,
    twitterCard,
    twitterSite,
    twitterCreator,
    canonicalUrl,
  ]);

  // Helper function to update or create meta tags
  const updateOrCreateMetaTag = (
    name: string,
    content: string,
    attributeType: string = "property",
  ) => {
    let metaTag = document.querySelector(`meta[${attributeType}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute(attributeType, name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", content);
  };

  // This component doesn't render anything visible
  return null;
};

export default SEO;
