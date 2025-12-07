import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Software Development Insights & Tutorials',
    description: 'Expert insights on blockchain, Web3, AI, DeFi, and full-stack development. Learn from industry professionals about the latest trends and best practices.',
    keywords: [
        'software development blog',
        'blockchain tutorials',
        'Web3 guides',
        'DeFi development',
        'smart contract tutorials',
        'full-stack development blog'
    ],
    openGraph: {
        title: 'Blog | Vyankatesh',
        description: 'Expert insights on blockchain, Web3, AI, and full-stack development.',
        url: 'https://vyankatesh.dev/blog',
        type: 'website',
    },
};

const blogPosts = [
    {
        id: 1,
        title: 'Smart Contract Development Best Practices: A Complete Guide for 2025',
        description: 'Master the art of secure and efficient smart contract development with our comprehensive guide covering everything from basic principles to advanced optimization techniques.',
        slug: 'smart-contract-development-best-practices',
        date: 'January 15, 2025',
        readTime: '12 min read',
        category: 'Blockchain',
        tags: ['Solidity', 'Smart Contracts', 'Security', 'DeFi'],
    },
    {
        id: 2,
        title: 'Web3 vs Web2: The Complete Guide to Business Transformation in 2025',
        description: 'Discover the fundamental differences between Web3 and Web2, understand why businesses are making the shift, and learn the practical steps to transition your organization.',
        slug: 'web3-vs-web2-business-transformation-guide',
        date: 'January 20, 2025',
        readTime: '15 min read',
        category: 'Web3',
        tags: ['Web3', 'Business', 'Blockchain', 'Digital Transformation'],
    },
    {
        id: 3,
        title: 'Building DeFi Applications: A Comprehensive Development Guide for 2025',
        description: 'Master the complete lifecycle of DeFi development—from protocol design and smart contract implementation to frontend integration and security auditing.',
        slug: 'defi-development-guide-2025',
        date: 'January 25, 2025',
        readTime: '18 min read',
        category: 'DeFi',
        tags: ['DeFi', 'Smart Contracts', 'Liquidity Pools', 'AMM'],
    },
    {
        id: 4,
        title: 'AI and Blockchain Integration: Building the Future of Intelligent Decentralized Systems',
        description: 'Discover how the convergence of artificial intelligence and blockchain technology is creating unprecedented opportunities for transparent AI and intelligent autonomous systems.',
        slug: 'ai-blockchain-integration-guide',
        date: 'February 1, 2025',
        readTime: '16 min read',
        category: 'AI & Blockchain',
        tags: ['AI', 'Blockchain', 'Machine Learning', 'Decentralized AI'],
    },
    {
        id: 5,
        title: 'Full-Stack Development Trends 2025: Technologies and Practices Shaping the Future',
        description: 'Discover the latest trends, frameworks, and best practices dominating full-stack development in 2025, from AI-assisted coding to edge computing and beyond.',
        slug: 'full-stack-development-trends-2025',
        date: 'February 5, 2025',
        readTime: '17 min read',
        category: 'Full-Stack',
        tags: ['Next.js', 'React', 'TypeScript', 'Web Development'],
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-black pt-20 font-mono">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-lime-400/10 border border-lime-400/30 rounded-full mb-6">
                        <BookOpen className="h-6 w-6 text-lime-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Development <span className="text-lime-400">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Expert guides, tutorials, and insights on blockchain, Web3, AI, DeFi, and full-stack development from the Vyankatesh team.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-lime-400/50 transition-all duration-300 group"
                            >
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-lime-400/10 text-lime-400 text-sm font-semibold rounded-full border border-lime-400/30">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 line-clamp-3">
                                    {post.description}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                    <span className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock className="h-4 w-4 mr-2" />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Link */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-lime-400 hover:text-lime-300 font-semibold transition-colors"
                                >
                                    Read Article
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-t from-gray-900/50 to-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Want to Learn More?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Get expert insights delivered to your inbox. Subscribe to our newsletter for the latest in blockchain, Web3, and software development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 border border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400/10 transition-colors"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
