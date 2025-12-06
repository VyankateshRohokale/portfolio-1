import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Job Application Form - Join byencrypt',
    description: 'Complete your job application to join the byencrypt team. Submit your resume and details for blockchain, Web3, AI, and full-stack developer positions.',
    keywords: [
        'job application form',
        'blockchain developer application',
        'Web3 job application',
        'apply to byencrypt',
        'submit resume blockchain',
        'developer job application'
    ],
    openGraph: {
        title: 'Job Application Form | byencrypt Careers',
        description: 'Complete your application to join the byencrypt team.',
        url: 'https://byencrypt.com/career/apply-form',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'byencrypt Careers Application',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Job Application Form | byencrypt Careers',
        description: 'Complete your application to join the byencrypt team.',
    },
    alternates: {
        canonical: 'https://byencrypt.com/career/apply-form',
    },
    robots: {
        index: false, // Don't index application form pages
        follow: true,
    },
};

export default function ApplyFormLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
