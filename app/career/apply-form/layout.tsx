import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Job Application Form - Join Vyankatesh',
    description: 'Complete your job application to join the Vyankatesh team. Submit your resume and details for blockchain, Web3, AI, and full-stack developer positions.',
    keywords: [
        'job application form',
        'blockchain developer application',
        'Web3 job application',
        'apply to Vyankatesh',
        'submit resume blockchain',
        'developer job application'
    ],
    openGraph: {
        title: 'Job Application Form | Vyankatesh Careers',
        description: 'Complete your application to join the Vyankatesh team.',
        url: 'https://vyankatesh.dev/career/apply-form',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Vyankatesh Careers Application',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Job Application Form | Vyankatesh Careers',
        description: 'Complete your application to join the Vyankatesh team.',
    },
    alternates: {
        canonical: 'https://vyankatesh.dev/career/apply-form',
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
