import Script from 'next/script';

interface BreadcrumbItem {
    name: string;
    url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <Script id="breadcrumb-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}

export function ServiceSchema({ services }: { services: any[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Software Development",
        "provider": {
            "@type": "Organization",
            "name": "byencrypt",
            "url": "https://byencrypt.com"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                }
            }))
        }
    };

    return (
        <Script id="service-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Script id="faq-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}

export function ArticleSchema({
    title,
    description,
    image,
    datePublished,
    dateModified,
    author = 'byencrypt'
}: {
    title: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image || "https://byencrypt.com/image_full.jpeg",
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": {
            "@type": "Organization",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "byencrypt",
            "logo": {
                "@type": "ImageObject",
                "url": "https://byencrypt.com/image.png"
            }
        }
    };

    return (
        <Script id="article-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}

export function JobPostingSchema({
    title,
    description,
    location = 'Remote',
    employmentType = 'FULL_TIME',
    datePosted
}: {
    title: string;
    description: string;
    location?: string;
    employmentType?: string;
    datePosted: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": title,
        "description": description,
        "datePosted": datePosted,
        "employmentType": employmentType,
        "hiringOrganization": {
            "@type": "Organization",
            "name": "byencrypt",
            "sameAs": "https://byencrypt.com",
            "logo": "https://byencrypt.com/image.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": location,
                "addressCountry": "US"
            }
        },
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "Worldwide"
        },
        "jobLocationType": "TELECOMMUTE"
    };

    return (
        <Script id="job-posting-schema" type="application/ld+json">
            {JSON.stringify(schema)}
        </Script>
    );
}
