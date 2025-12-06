import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Apply Now - Open Positions at byencrypt',
    description: 'View open positions and apply to join byencrypt. We are hiring blockchain developers, Web3 engineers, full-stack developers, and more.',
    keywords: [
        'byencrypt careers',
        'blockchain developer jobs',
        'Web3 developer jobs',
        'remote blockchain jobs',
        'smart contract developer hiring',
        'DeFi developer jobs',
        'apply blockchain developer'
    ],
    openGraph: {
        title: 'Open Positions | byencrypt Careers',
        description: 'View and apply for open positions at byencrypt.',
        url: 'https://byencrypt.com/career/apply',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'byencrypt Careers',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Open Positions | byencrypt Careers',
        description: 'View and apply for open positions at byencrypt.',
    },
    alternates: {
        canonical: 'https://byencrypt.com/career/apply',
    },
};

export default function ApplyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
