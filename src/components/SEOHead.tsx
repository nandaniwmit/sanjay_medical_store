import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  pageType?: 'website' | 'article' | 'pharmacy';
  schema?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  pageType = 'website',
  schema,
}) => {
  const location = useLocation();
  const currentFullUrl = canonicalUrl || `https://sanjaymedicalstore.in${location.pathname}`;

  useEffect(() => {
    // Page Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentFullUrl);

    // Open Graph Tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:type': pageType,
      'og:url': currentFullUrl,
      'og:site_name': 'Sanjay Medical Store Gaya',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let element = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(property.startsWith('twitter:') ? 'name' : 'property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });

    // JSON-LD Schema
    const schemaId = 'json-ld-schema';
    let scriptTag = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (scriptTag) {
      scriptTag.remove();
    }

    const defaultPharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': 'Sanjay Medical Store',
      'image': 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80',
      '@id': 'https://sanjaymedicalstore.in/#pharmacy',
      'url': 'https://sanjaymedicalstore.in',
      'telephone': '+919204548707',
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'W.Wazir ALi Lane, Gewalbigha',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '823001',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 24.795,
        'longitude': 85.000
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '08:00',
        'closes': '22:00'
      },
      'sameAs': [
        'https://wa.me/919204548707'
      ]
    };

    const finalSchema = schema || defaultPharmacySchema;

    scriptTag = document.createElement('script');
    scriptTag.id = schemaId;
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(finalSchema);
    document.head.appendChild(scriptTag);

  }, [title, description, currentFullUrl, pageType, schema]);

  return null;
};
