import { useEffect } from "react";
import { BUSINESS_INFO, FAQS_DATA } from "../data";

interface SEOHeadProps {
  title?: string;
  description?: string;
  pagePath: string;
}

export default function SEOHead({ title, description, pagePath }: SEOHeadProps) {
  const finalTitle = title 
    ? `${title} | ${BUSINESS_INFO.name}` 
    : `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`;
  
  const finalDescription = description || BUSINESS_INFO.tagline;

  useEffect(() => {
    // 1. Update Title
    document.title = finalTitle;

    // 2. Helper to set/create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Set standard Meta Tags
    setMetaTag("description", finalDescription);
    setMetaTag("keywords", "animal medicine store, medical store tikari, pharmacy gaya, vet medicine bihar, veterinary vaccine gaya, buy medicines tikari, online pharmacy gaya, animal feed supplements, surgical supplies gaya, baby care tikari, Dr K P Singh pharmacy");
    setMetaTag("robots", "index, follow");
    setMetaTag("author", BUSINESS_INFO.name);

    // 4. Set OpenGraph tags
    setMetaTag("og:title", finalTitle, true);
    setMetaTag("og:description", finalDescription, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", `https://animalmedicinestore-gaya.web.app/${pagePath}`, true);
    setMetaTag("og:image", "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800", true);
    setMetaTag("og:site_name", BUSINESS_INFO.name, true);

    // 5. Set Twitter Cards
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", finalTitle);
    setMetaTag("twitter:description", finalDescription);
    setMetaTag("twitter:image", "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800");

    // 6. Inject JSON-LD Schema
    const existingSchema = document.getElementById("local-business-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaScript = document.createElement("script");
    schemaScript.id = "local-business-schema";
    schemaScript.type = "application/ld+json";

    // Main local business & pharmacy schema
    const mainSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Pharmacy",
          "@id": "https://animalmedicinestore-gaya.web.app/#pharmacy",
          "name": BUSINESS_INFO.name,
          "description": finalDescription,
          "telephone": BUSINESS_INFO.phone,
          "email": BUSINESS_INFO.email,
          "url": "https://animalmedicinestore-gaya.web.app/",
          "logo": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=200",
          "image": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "SH-69, Kinjar Kurtha Road",
            "addressLocality": "Tikari, Gaya",
            "addressRegion": "Bihar",
            "postalCode": "824236",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.9427", // Approximate latitude for Tikari, Gaya
            "longitude": "84.8197" // Approximate longitude for Tikari, Gaya
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "09:00",
              "closes": "20:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/AnimalMedicineStoreTikari",
            "https://g.co/kgs/xyz" // Custom maps
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://animalmedicinestore-gaya.web.app/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://animalmedicinestore-gaya.web.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": pagePath || "Home",
              "item": `https://animalmedicinestore-gaya.web.app/${pagePath}`
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://animalmedicinestore-gaya.web.app/#faq",
          "mainEntity": FAQS_DATA.slice(0, 5).map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    schemaScript.innerHTML = JSON.stringify(mainSchema);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup schemas if page unmounts
      schemaScript.remove();
    };
  }, [finalTitle, finalDescription, pagePath]);

  return null;
}
