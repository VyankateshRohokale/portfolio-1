import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vyankatesh.dev'

    // Define all your routes
    const routes = [
        '',
        '/services',
        '/projects',
        '/contact',
        '/career/overview',
        '/career/how-we-work',
        '/career/culture',
        '/career/apply',
        '/privacy',
        '/terms',
        '/ai-info',
    ]

    // Service detail pages
    const servicePages = [
        '/services/blockchain-development',
        '/services/full-stack-development',
        '/services/web3-solutions',
        '/services/ai-machine-learning',
        '/services/backend-architecture',
        '/services/security-auditing',
        '/services/custom-solutions',
    ]

    // Blog posts
    const blogPosts = [
        '/blog',
        '/blog/smart-contract-development-best-practices',
        '/blog/web3-vs-web2-business-transformation-guide',
        '/blog/defi-development-guide-2025',
        '/blog/ai-blockchain-integration-guide',
        '/blog/full-stack-development-trends-2025',
    ]

    // Combine routes
    const allRoutes = [...routes, ...servicePages, ...blogPosts]

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'daily' : route.includes('blog') ? 'weekly' : 'monthly') as 'weekly' | 'daily' | 'monthly',
        priority: route === '' ? 1 : route.includes('blog') ? 0.9 : route.includes('services/') ? 0.8 : route.includes('career') ? 0.7 : 0.8,
    }))
}
