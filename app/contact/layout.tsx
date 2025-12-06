import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch for Your Software Development Needs',
    description: 'Contact byencrypt for blockchain, Web3, AI, and full-stack development services. Get a free consultation and quote for your project.',
    keywords: [
        'contact software development',
        'blockchain development quote',
        'hire blockchain developers',
        'Web3 consultation',
        'software development inquiry',
        'contact byencrypt',
        'Web3 development contact'
    ],
    openGraph: {
        title: 'Contact Us | byencrypt',
        description: 'Get in touch for blockchain, Web3, AI, and full-stack development services.',
        url: 'https://byencrypt.com/contact',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Contact byencrypt',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | byencrypt',
        description: 'Get in touch for blockchain, Web3, AI, and full-stack development services.',
    },
    alternates: {
        canonical: 'https://byencrypt.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
