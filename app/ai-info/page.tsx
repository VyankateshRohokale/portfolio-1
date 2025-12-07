import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Information | Vyankatesh',
    description: 'Machine-readable information about Vyankatesh services, technologies, and capabilities for AI systems and crawlers',
    robots: 'index, follow',
};

export default function AIInfoPage() {
    return (
        <div className="min-h-screen bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-lime-400 mb-4 font-mono">
                        AI & Machine-Readable Information
                    </h1>
                    <p className="text-xl text-gray-400 font-mono">
                        Structured data about Vyankatesh for AI systems, language models, and web crawlers
                    </p>
                </div>

                {/* Company Overview */}
                <section className="mb-12 bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 font-mono">Company Overview</h2>
                    <div className="space-y-2 text-gray-300 font-mono">
                        <p><strong className="text-lime-400">Name:</strong> Vyankatesh</p>
                        <p><strong className="text-lime-400">Type:</strong> Personal Portfolio</p>
                        <p><strong className="text-lime-400">Website:</strong> /</p>
                        <p><strong className="text-lime-400">Email:</strong> realpiyush2525@gmail.com</p>
                        <p><strong className="text-lime-400">Business Inquiries:</strong> realpiyush2525@gmail.com</p>
                        <p><strong className="text-lime-400">Description:</strong> Personal portfolio showcasing blockchain, Web3, AI, and full-stack development work</p>
                    </div>
                </section>

                {/* Services */}
                <section className="mb-12 bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 font-mono">Services Offered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="border border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-lime-400 mb-2 font-mono">{service.name}</h3>
                                <p className="text-gray-400 mb-3 font-mono text-sm">{service.description}</p>
                                <p className="text-gray-500 text-sm font-mono mb-2"><strong>Timeline:</strong> {service.timeline}</p>
                                <p className="text-gray-500 text-sm font-mono mb-2"><strong>URL:</strong> <a href={service.url} className="text-lime-400 hover:underline">{service.url}</a></p>
                                <div className="mt-3">
                                    <p className="text-gray-400 text-sm font-mono mb-1"><strong>Technologies:</strong></p>
                                    <p className="text-gray-500 text-xs font-mono">{service.technologies.join(', ')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="mb-12 bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 font-mono">Technology Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-lime-400 mb-3 font-mono">Blockchain</h3>
                            <p className="text-gray-400 text-sm font-mono">Solidity, Rust, Hardhat, Web3.js, Ethers.js, Ethereum, Polygon, Solana, IPFS, The Graph</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-lime-400 mb-3 font-mono">Frontend</h3>
                            <p className="text-gray-400 text-sm font-mono">React, Next.js, TypeScript, Tailwind CSS, Vue.js, Angular, Redux</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-lime-400 mb-3 font-mono">Backend</h3>
                            <p className="text-gray-400 text-sm font-mono">Node.js, Python, Go, FastAPI, Express.js, Django, NestJS</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-lime-400 mb-3 font-mono">Database</h3>
                            <p className="text-gray-400 text-sm font-mono">PostgreSQL, MongoDB, Redis, MySQL, Cassandra</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-lime-400 mb-3 font-mono">AI/ML</h3>
                            <p className="text-gray-400 text-sm font-mono">TensorFlow, PyTorch, OpenAI API, Hugging Face, Scikit-learn, CUDA</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-lime-400 mb-3 font-mono">Cloud & DevOps</h3>
                            <p className="text-gray-400 text-sm font-mono">AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform</p>
                        </div>
                    </div>
                </section>

                {/* Machine-Readable Data Links */}
                <section className="mb-12 bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 font-mono">Machine-Readable Data</h2>
                    <div className="space-y-3">
                        <p className="text-gray-400 font-mono">
                            <strong className="text-lime-400">JSON API:</strong>{' '}
                            <a href="/api/ai-data" className="text-blue-400 hover:underline">/api/ai-data</a>
                        </p>
                        <p className="text-gray-400 font-mono">
                            <strong className="text-lime-400">AI Index:</strong>{' '}
                            <a href="/ai-indexing.json" className="text-blue-400 hover:underline">/ai-indexing.json</a>
                        </p>
                        <p className="text-gray-400 font-mono">
                            <strong className="text-lime-400">Plain Text:</strong>{' '}
                            <a href="/ai.txt" className="text-blue-400 hover:underline">/ai.txt</a>
                        </p>
                        <p className="text-gray-400 font-mono">
                            <strong className="text-lime-400">Sitemap:</strong>{' '}
                            <a href="/sitemap.xml" className="text-blue-400 hover:underline">/sitemap.xml</a>
                        </p>
                        <p className="text-gray-400 font-mono">
                            <strong className="text-lime-400">Robots.txt:</strong>{' '}
                            <a href="/robots.txt" className="text-blue-400 hover:underline">/robots.txt</a>
                        </p>
                    </div>
                </section>

                {/* Crawling Policy */}
                <section className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-4 font-mono">AI Crawling Policy</h2>
                    <div className="space-y-2 text-gray-400 font-mono">
                        <p>✅ AI crawling is <strong className="text-lime-400">allowed</strong></p>
                        <p>✅ AI training on content is <strong className="text-lime-400">permitted</strong></p>
                        <p>✅ All major AI crawlers are <strong className="text-lime-400">explicitly allowed</strong> (GPTBot, ChatGPT-User, Claude-Web, CCBot, Google-Extended, PerplexityBot, etc.)</p>
                        <p>✅ Content is provided in multiple formats for optimal indexing</p>
                        <p>📅 Last updated: November 18, 2025</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

const services = [
    {
        name: 'Blockchain Development',
        description: 'Smart contracts, DeFi protocols, NFT platforms, and custom blockchain solutions',
        url: 'https://vyankatesh.dev/services/blockchain-development',
        timeline: '4-8 weeks',
        technologies: ['Solidity', 'Rust', 'Hardhat', 'Web3.js', 'Ethereum', 'Polygon']
    },
    {
        name: 'Full Stack Development',
        description: 'End-to-end web and mobile applications with modern frameworks',
        url: 'https://vyankatesh.dev/services/full-stack-development',
        timeline: '6-12 weeks',
        technologies: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS']
    },
    {
        name: 'Web3 Solutions',
        description: 'Decentralized applications and Web3 integrations',
        url: 'https://vyankatesh.dev/services/web3-solutions',
        timeline: '3-6 weeks',
        technologies: ['Web3.js', 'Ethers.js', 'IPFS', 'MetaMask', 'WalletConnect']
    },
    {
        name: 'AI & Machine Learning',
        description: 'Intelligent automation, predictive analytics, and AI-powered features',
        url: 'https://vyankatesh.dev/services/ai-machine-learning',
        timeline: '8-16 weeks',
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Python']
    },
    {
        name: 'Backend Architecture',
        description: 'Scalable server infrastructure, APIs, and database design',
        url: 'https://vyankatesh.dev/services/backend-architecture',
        timeline: '4-10 weeks',
        technologies: ['Node.js', 'Python', 'Go', 'Docker', 'Kubernetes', 'AWS']
    },
    {
        name: 'Security & Auditing',
        description: 'Comprehensive security assessments and smart contract audits',
        url: 'https://vyankatesh.dev/services/security-auditing',
        timeline: '2-4 weeks',
        technologies: ['Mythril', 'Slither', 'OpenZeppelin', 'Burp Suite', 'OWASP ZAP']
    },
    {
        name: 'Custom Solutions',
        description: 'Bespoke software development and legacy system modernization',
        url: 'https://vyankatesh.dev/services/custom-solutions',
        timeline: 'Project Dependent',
        technologies: ['React', 'Node.js', 'Python', 'AWS', 'Azure', 'GCP']
    }
];
