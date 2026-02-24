/**
 * LocalBusinessSchema Component
 * 
 * Implementa Schema Markup para LocalBusiness, essencial para Google Meu Negócio.
 * Inclui informações de contato, endereço, horários de funcionamento e telefones.
 */

export default function LocalBusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "André Dias Advogados",
    "image": "https://www.andrediasadvogados.com.br/logo.png",
    "description": "Advocacia especializada em Direito Criminal, Trabalhista, Cível, Família e Empresarial. 16 anos de experiência na Zona Leste de São Paulo.",
    "url": "https://www.andrediasadvogados.com.br",
    "telephone": [
      "+55 11 9 3805-9405",
      "+55 11 5050-6310"
    ],
    "email": "contato@andrediasadvogados.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Aldeia dos Machacális, 124",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "03000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "São Paulo"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/andrediasadvogados",
      "https://www.instagram.com/andrediasadvogados"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "16"
    },
    "knowsAbout": [
      "Direito Criminal",
      "Direito Trabalhista",
      "Direito Cível",
      "Direito de Família",
      "Direito Empresarial"
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
  );
}
