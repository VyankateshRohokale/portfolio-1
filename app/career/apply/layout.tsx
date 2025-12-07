import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Apply Now - Open Positions at Vyankatesh',
    description: 'View open positions and apply to join Vyankatesh. We are hiring blockchain developers, Web3 engineers, full-stack developers, and more.',
    keywords: [
        'Vyankatesh careers',
        'blockchain developer jobs',
        'Web3 developer jobs',
        'remote blockchain jobs',
        'smart contract developer hiring',
        'DeFi developer jobs',
        'apply blockchain developer'
    ],
    openGraph: {
        title: 'Open Positions | Vyankatesh Careers',
        description: 'View and apply for open positions at Vyankatesh.',
        url: 'https://vyankatesh.dev/career/apply',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Vyankatesh Careers',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Open Positions | Vyankatesh Careers',
        description: 'View and apply for open positions at Vyankatesh.',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/career/apply',
    },
};

export default function ApplyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
