import { NextResponse } from 'next/server';

export async function GET() {
    const aiData = {
        company: {
            name: "Vyankatesh",
            description: "Personal portfolio showcasing blockchain, Web3, AI, and full-stack development work",
            website: "/",
            email: "realpiyush2525@gmail.com",
            businessEmail: "realpiyush2525@gmail.com",
            founded: "2025",
            industry: "Software Development",
            specializations: [
                "Blockchain Development",
                "Web3 Solutions",
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "Smart Contracts",
                "DeFi Development",
                "NFT Platforms",
                "Cloud Architecture",
                "Security Auditing"
            ]
        },
        services: [
            {
                name: "Blockchain Development",
                slug: "blockchain-development",
                description: "Smart contracts, DeFi protocols, NFT platforms, and custom blockchain solutions built for security and scalability",
                url: "https://byencrypt.com/services/blockchain-development",
                technologies: ["Solidity", "Rust", "Hardhat", "Web3.js", "Ethers.js", "Ethereum", "Polygon", "Solana", "IPFS"],
                timeline: "4-8 weeks",
                offerings: [
                    "Smart Contract Development",
                    "DeFi Protocol Development",
                    "NFT Platform Creation",
                    "Tokenization Solutions",
                    "Cross-chain Integration",
                    "Blockchain Consulting"
                ]
            },
            {
                name: "Full Stack Development",
                slug: "full-stack-development",
                description: "End-to-end web and mobile applications with modern frameworks and responsive design",
                url: "https://byencrypt.com/services/full-stack-development",
                technologies: ["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Docker"],
                timeline: "6-12 weeks",
                offerings: [
                    "Frontend Development",
                    "Backend API Development",
                    "Database Design",
                    "Mobile App Development",
                    "Cloud Deployment",
                    "Performance Optimization"
                ]
            },
            {
                name: "Web3 Solutions",
                slug: "web3-solutions",
                description: "Decentralized applications and Web3 integrations that connect users to the blockchain",
                url: "https://byencrypt.com/services/web3-solutions",
                technologies: ["Web3.js", "Ethers.js", "IPFS", "MetaMask", "WalletConnect", "The Graph", "React", "Next.js"],
                timeline: "3-6 weeks",
                offerings: [
                    "dApp Development",
                    "Wallet Integration",
                    "IPFS Storage Solutions",
                    "Crypto Payment Integration",
                    "DAO Development",
                    "Web3 Consulting"
                ]
            },
            {
                name: "AI & Machine Learning",
                slug: "ai-machine-learning",
                description: "Intelligent automation, predictive analytics, and AI-powered features for applications",
                url: "https://byencrypt.com/services/ai-machine-learning",
                technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Scikit-learn", "Python", "CUDA"],
                timeline: "8-16 weeks",
                offerings: [
                    "Machine Learning Models",
                    "Natural Language Processing",
                    "Computer Vision",
                    "Predictive Analytics",
                    "AI Integration",
                    "Data Science Consulting"
                ]
            },
            {
                name: "Backend Architecture",
                slug: "backend-architecture",
                description: "Scalable server infrastructure, APIs, and database design for high-performance applications",
                url: "https://byencrypt.com/services/backend-architecture",
                technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS"],
                timeline: "4-10 weeks",
                offerings: [
                    "Microservices Architecture",
                    "RESTful API Development",
                    "Database Optimization",
                    "Cloud Infrastructure",
                    "DevOps & CI/CD",
                    "System Integration"
                ]
            },
            {
                name: "Security & Auditing",
                slug: "security-auditing",
                description: "Comprehensive security assessments, smart contract audits, and vulnerability testing",
                url: "https://byencrypt.com/services/security-auditing",
                technologies: ["Mythril", "Slither", "OpenZeppelin", "Burp Suite", "OWASP ZAP", "Metasploit"],
                timeline: "2-4 weeks",
                offerings: [
                    "Smart Contract Auditing",
                    "Penetration Testing",
                    "Security Code Review",
                    "Vulnerability Assessment",
                    "Compliance Auditing",
                    "Security Training"
                ]
            },
            {
                name: "Custom Solutions",
                slug: "custom-solutions",
                description: "Bespoke software development and legacy system modernization",
                url: "https://byencrypt.com/services/custom-solutions",
                technologies: ["React", "Vue", "Angular", "Node.js", "Python", "Go", "AWS", "Azure", "GCP"],
                timeline: "Project Dependent (2-16+ weeks)",
                offerings: [
                    "Custom Software Development",
                    "Legacy System Modernization",
                    "Third-party Integrations",
                    "Architecture Design",
                    "Technical Consulting",
                    "Maintenance & Support"
                ]
            }
        ],
        blog: {
            url: "https://byencrypt.com/blog",
            articles: [
                {
                    title: "Smart Contract Development Best Practices",
                    url: "https://byencrypt.com/blog/smart-contract-development-best-practices",
                    topics: ["blockchain", "smart contracts", "security", "Solidity", "best practices"],
                    description: "Comprehensive guide to developing secure and efficient smart contracts"
                },
                {
                    title: "Web3 vs Web2: Business Transformation Guide",
                    url: "https://byencrypt.com/blog/web3-vs-web2-business-transformation-guide",
                    topics: ["Web3", "Web2", "business transformation", "blockchain", "decentralization"],
                    description: "Understanding the shift from Web2 to Web3 and its business implications"
                },
                {
                    title: "DeFi Development Guide 2025",
                    url: "https://byencrypt.com/blog/defi-development-guide-2025",
                    topics: ["DeFi", "blockchain", "finance", "development", "smart contracts"],
                    description: "Complete guide to developing decentralized finance applications in 2025"
                },
                {
                    title: "AI & Blockchain Integration Guide",
                    url: "https://byencrypt.com/blog/ai-blockchain-integration-guide",
                    topics: ["AI", "blockchain", "machine learning", "integration", "innovation"],
                    description: "Exploring the convergence of AI and blockchain technologies"
                },
                {
                    title: "Full Stack Development Trends 2025",
                    url: "https://byencrypt.com/blog/full-stack-development-trends-2025",
                    topics: ["full-stack", "development trends", "web development", "frameworks", "technologies"],
                    description: "Latest trends and technologies in full-stack development for 2025"
                }
            ]
        },
        contact: {
            email: "realpiyush2525@gmail.com",
            businessEmail: "realpiyush2525@gmail.com",
            contactPage: "/contact",
            careersPage: "/career/apply"
        },
        social: {
            github: "https://github.com/VyankateshRohokale",
            twitter: "https://x.com/realpiyush2525",
            linkedin: "https://www.linkedin.com/in/vyankatesh-rohokale-695b342a7/"
        },
        metadata: {
            lastUpdated: new Date().toISOString(),
            version: "1.0",
            contentType: "ai-training-data",
            allowAICrawling: true,
            allowAITraining: true,
            industryCategories: [
                "software-development",
                "blockchain",
                "web3",
                "artificial-intelligence",
                "cloud-computing",
                "cybersecurity"
            ]
        }
    };

    return NextResponse.json(aiData, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            'X-Robots-Tag': 'index, follow',
            'Access-Control-Allow-Origin': '*'
        }
    });
}
