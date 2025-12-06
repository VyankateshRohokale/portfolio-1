// SEO Configuration and Constants
export const SEO_CONFIG = {
    siteName: 'Vyankatesh',
    siteUrl: 'https://vyankatesh.dev',
    defaultTitle: 'Vyankatesh Rohokale - Software Development & Portfolio',
    defaultDescription: 'Personal portfolio and software development services specializing in blockchain, full-stack, Web3, mobile apps, and AI solutions.',
    defaultImage: '/image_full.jpeg',
    twitterHandle: '@realpiyush2525',
    themeColor: '#a3e635',
    backgroundColor: '#000000',
};

// Generate canonical URL
export function getCanonicalUrl(path: string = ''): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SEO_CONFIG.siteUrl}${cleanPath}`;
}

// Generate Open Graph metadata
export function generateOpenGraph(
    title: string,
    description: string,
    path: string = '',
    image?: string
) {
    return {
        title,
        description,
        url: getCanonicalUrl(path),
        siteName: SEO_CONFIG.siteName,
        type: 'website' as const,
        locale: 'en_US',
        images: [
            {
                url: image || SEO_CONFIG.defaultImage,
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    };
}

// Generate Twitter Card metadata
export function generateTwitterCard(
    title: string,
    description: string,
    image?: string
) {
    return {
        card: 'summary_large_image' as const,
        title,
        description,
        images: [image || SEO_CONFIG.defaultImage],
        creator: SEO_CONFIG.twitterHandle,
    };
}

// Common keywords for the site
export const COMMON_KEYWORDS = [
    'software development',
    'blockchain development',
    'Web3 development',
    'AI solutions',
    'full-stack development',
    'smart contracts',
    'dApp development',
    'custom software',
    'Vyankatesh',
];

// Page-specific SEO data
export const PAGE_SEO = {
    home: {
        title: SEO_CONFIG.defaultTitle,
        description: SEO_CONFIG.defaultDescription,
        keywords: COMMON_KEYWORDS,
    },
    services: {
        title: 'Software Development Services - Blockchain, Web3, AI & Full-Stack',
        description: 'Professional software development services including blockchain development, Web3 solutions, AI/ML integration, and full-stack development.',
        keywords: [...COMMON_KEYWORDS, 'DeFi development', 'NFT marketplace', 'smart contract audit'],
    },
    projects: {
        title: 'Portfolio & Projects - Showcasing Our Software Development Work',
        description: 'Explore our portfolio of successful software development projects including blockchain applications, Web3 platforms, and AI solutions.',
        keywords: [...COMMON_KEYWORDS, 'portfolio', 'case studies', 'blockchain projects'],
    },
    contact: {
        title: 'Contact - Get in Touch for Your Software Development Needs',
        description: 'Contact Vyankatesh for blockchain, Web3, AI, and full-stack development services. Get a free consultation and quote.',
        keywords: [...COMMON_KEYWORDS, 'contact', 'consultation', 'quote'],
    },
    careers: {
        title: 'Careers - Join Our Team of Expert Developers',
        description: 'Join the team to work on cutting-edge blockchain, Web3, and AI projects. Remote-first team with competitive compensation.',
        keywords: [...COMMON_KEYWORDS, 'careers', 'jobs', 'remote work', 'developer jobs'],
    },
};

// Structured Data Templates
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        logo: `${SEO_CONFIG.siteUrl}/image.png`,
        description: SEO_CONFIG.defaultDescription,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
        },
        sameAs: [
            'https://twitter.com/realpiyush2525',
            'https://www.linkedin.com/in/vyankatesh-rohokale-695b342a7/',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            url: `${SEO_CONFIG.siteUrl}/contact`,
        },
    };
}

export function generateWebsiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        description: SEO_CONFIG.defaultDescription,
        publisher: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName,
        },
    };
}
