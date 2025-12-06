import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Vyankatesh Rohokale - Software Development Services',
        short_name: 'Vyankatesh',
        description: 'Personal portfolio and software development services specializing in blockchain, Web3, mobile and AI solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#a3e635',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/image.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/image.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            }
        ],
        categories: ['business', 'productivity', 'technology'],
        screenshots: [
            {
                src: '/image_full.jpeg',
                sizes: '1920x1080',
                type: 'image/jpeg'
            }
        ],
        shortcuts: [
            {
                name: 'Services',
                url: '/services',
                description: 'View our software development services'
            },
            {
                name: 'Contact',
                url: '/contact',
                description: 'Get in touch with us'
            }
        ]
    }
}
