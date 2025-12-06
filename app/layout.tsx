import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Orbitron } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  // metadataBase intentionally left as root; update to your site URL when available
  title: {
    default: 'Vyankatesh - Software Development & Portfolio',
    template: '%s | Vyankatesh'
  },
  description: 'Personal portfolio showcasing blockchain, full-stack, Web3, and AI projects and capabilities.',
  keywords: [
    'software development',
    'blockchain development',
    'Web3 development',
    'AI solutions',
    'full-stack development',
    'smart contracts',
    'dApp development',
    'custom software',
    'Vyankatesh',
    'software consulting'
  ],
  authors: [{ name: 'Vyankatesh' }],
  creator: 'Vyankatesh',
  publisher: 'Vyankatesh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Vyankatesh - Software Development & Portfolio',
    description: 'Personal portfolio showcasing blockchain, full-stack, Web3, and AI projects.',
    siteName: 'Vyankatesh',
    images: [
      {
        url: '/image_full.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vyankatesh - Software Development Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyankatesh - Software Development & Portfolio',
    description: 'Personal portfolio showcasing blockchain, Web3, and AI projects.',
    images: ['/image_full.jpeg'],
    creator: '@realpiyush2525',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code',
  //   // yandex: 'your-yandex-verification-code',
  //   // bing: 'your-bing-verification-code',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const google_analytics_id = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en" className={orbitron.variable}>
      <head>
        <link rel="canonical" href="/" />
        <meta name="theme-color" content="#0a0a0a" />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${google_analytics_id}');
          `}
        </Script>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}
          strategy="afterInteractive"
        />

        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vyankatesh",
            "url": "/",
            "logo": "/image.png",
            "description": "Personal portfolio showcasing blockchain, Web3, AI, and full-stack projects.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://x.com/realpiyush2525",
              "https://www.linkedin.com/in/vyankatesh-rohokale-695b342a7/",
              "https://github.com/VyankateshRohokale"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "realpiyush2525@gmail.com",
              "url": "/contact"
            },
            "foundingDate": "2025",
            "knowsAbout": [
              "Blockchain Development",
              "Web3 Solutions",
              "Artificial Intelligence",
              "Machine Learning",
              "Full Stack Development",
              "Smart Contracts",
              "DeFi",
              "NFT Development",
              "Cloud Architecture",
              "Security Auditing"
            ],
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Blockchain Development",
                  "description": "Smart contracts, DeFi protocols, NFT platforms, and custom blockchain solutions",
                  "url": "https://byencrypt.com/services/blockchain-development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full Stack Development",
                  "description": "End-to-end web and mobile applications with modern frameworks",
                  "url": "https://byencrypt.com/services/full-stack-development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web3 Solutions",
                  "description": "Decentralized applications and Web3 integrations",
                  "url": "https://byencrypt.com/services/web3-solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI & Machine Learning",
                  "description": "Intelligent automation and AI-powered features",
                  "url": "https://byencrypt.com/services/ai-machine-learning"
                }
              }
            ]
          })}
        </Script>

        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Vyankatesh",
            "url": "/",
            "description": "Personal portfolio showcasing blockchain, Web3, and AI projects",
            "publisher": {
              "@type": "Organization",
              "name": "Vyankatesh"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        {/* AI-specific meta tags */}
        <meta name="ai-content-declaration" content="ai-assisted" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="alternate" type="application/json" href="/ai-indexing.json" title="AI Indexing Data" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Navigation />
        <Analytics />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}