'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const roles = [
    {
        department: 'Blockchain',
        jobs: [
            {
                title: 'Senior Blockchain Developer',
                location: 'Remote',
                type: 'Full time',
                level: 'Senior',
                description: 'Work on smart contracts, DeFi, and NFT platforms for global clients.',
            },
            {
                title: 'Smart Contract Auditor',
                location: 'Remote',
                type: 'Contract',
                level: 'Mid',
                description: 'Audit and secure blockchain protocols and contracts.',
            },
            {
                title: 'Blockchain Intern',
                location: 'Remote',
                type: 'Internship',
                level: 'Intern',
                description: 'Assist in the development and auditing of blockchain applications.',
            },
        ],
    },
    {
        department: 'Full Stack',
        jobs: [
            {
                title: 'Full Stack Engineer',
                location: 'Remote',
                type: 'Full time',
                level: 'Mid',
                description: 'Build scalable web and mobile apps using modern frameworks.',
            },
            {
                title: 'Full Stack Intern',
                location: 'Remote',
                type: 'Internship',
                level: 'Intern',
                description: 'Support the development of web applications using modern frameworks.',
            },
        ],
    },
    {
        department: 'Web3',
        jobs: [
            {
                title: 'Web3 Specialist',
                location: 'Remote',
                type: 'Full time',
                level: 'Mid',
                description: 'Integrate wallets, dApps, and decentralized storage.',
            },
        ],
    },
    {
        department: 'AI & ML',
        jobs: [
            {
                title: 'AI/ML Engineer',
                location: 'Remote',
                type: 'Full time',
                level: 'Mid',
                description: 'Develop and deploy machine learning models for real-world applications.',
            },
        ],
    },
];

const departments = ['All', ...Array.from(new Set(roles.map(r => r.department)))];
const locations = ['All', ...Array.from(new Set(roles.flatMap(r => r.jobs.map(j => j.location))))];
const types = ['All', ...Array.from(new Set(roles.flatMap(r => r.jobs.map(j => j.type))))];
const levels = ['All', ...Array.from(new Set(roles.flatMap(r => r.jobs.map(j => j.level))))];

export default function CareerApplyPage() {
    const [department, setDepartment] = useState('All');
    const [location, setLocation] = useState('All');
    const [type, setType] = useState('All');
    const [level, setLevel] = useState('All');
    const [resumeSent, setResumeSent] = useState(false);
    const router = useRouter();

    const filteredRoles = roles
        .filter(r => department === 'All' || r.department === department)
        .map(r => ({
            ...r,
            jobs: r.jobs.filter(
                job =>
                    (location === 'All' || job.location === location) &&
                    (type === 'All' || job.type === type) &&
                    (level === 'All' || job.level === level)
            ),
        }))
        .filter(r => r.jobs.length > 0);

    return (
        <div className="min-h-screen bg-black pt-24 px-4 font-mono">
            <div className="max-w-5xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-10 md:mb-16 px-2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Join <span className="text-4xl sm:text-5xl md:text-6xl text-lime-400 font-semibold font-clock">Vyankatesh</span> and help us<br />
                        <span className="text-4xl sm:text-5xl md:text-6xl text-lime-400 font-semibold font-clock">build the future</span> of technology
                    </h1>
                    <p className="text-sm sm:text-lg text-gray-400 max-w-md sm:max-w-2xl mx-auto">
                        We’re looking for passionate innovators, engineers, and creators. Explore open roles or send us your resume if you want to work with us—even if there’s no perfect match listed!
                    </p>
                </div>

                {/* Enhanced Filters */}
                <div className="mb-10 flex flex-col md:flex-row gap-4 items-center md:justify-start justify-center">
                    <div className="text-gray-400 font-semibold mb-2 md:mb-0 md:mr-4">Filter by:</div>
                    <div className="flex flex-col gap-4 w-full md:flex-row md:w-auto">
                        <select
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                            className="bg-gray-900 border border-gray-700 text-gray-300 rounded-full px-6 py-2 focus:outline-none focus:border-lime-400"
                        >
                            {departments.map(dep => (
                                <option key={dep} value={dep}>{dep}</option>
                            ))}
                        </select>
                        <select
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            className="bg-gray-900 border border-gray-700 text-gray-300 rounded-full px-6 py-2 focus:outline-none focus:border-lime-400"
                        >
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <select
                            value={type}
                            onChange={e => setType(e.target.value)}
                            className="bg-gray-900 border border-gray-700 text-gray-300 rounded-full px-6 py-2 focus:outline-none focus:border-lime-400"
                        >
                            {types.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        <select
                            value={level}
                            onChange={e => setLevel(e.target.value)}
                            className="bg-gray-900 border border-gray-700 text-gray-300 rounded-full px-6 py-2 focus:outline-none focus:border-lime-400"
                        >
                            {levels.map(l => (
                                <option key={l} value={l}>{l}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Roles List */}
                <div className="mt-8">
                    {filteredRoles.length === 0 ? (
                        <div className="text-center text-gray-400 py-12">
                            No roles found for selected filters.
                        </div>
                    ) : (
                        filteredRoles.map(r => (
                            <div key={r.department} className="mb-10">
                                <h2 className="text-2xl font-bold text-white mb-4">{r.department}</h2>
                                {r.jobs.map((job, idx) => (
                                    <div key={idx} className="mb-6 border-b border-gray-800 pb-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <div className="text-lime-400 font-semibold text-lg">{job.title}</div>
                                                <div className="text-gray-400 text-sm mb-1">
                                                    {job.location} &bull; {job.type} &bull; {job.level}
                                                </div>
                                                <div className="text-gray-300 mb-2">{job.description}</div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    router.push(
                                                        `/career/apply-form?title=${encodeURIComponent(job.title)}&department=${encodeURIComponent(r.department)}&location=${encodeURIComponent(job.location)}&type=${encodeURIComponent(job.type)}&level=${encodeURIComponent(job.level)}&description=${encodeURIComponent(job.description)}`
                                                    )
                                                }
                                                className="mt-4 md:mt-0 px-6 py-2 border border-lime-400 text-lime-400 rounded-full font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300 w-max"
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    )}
                </div>

                {/* Resume Submission Option */}
                <div className="mt-20 mb-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Didn&apos;t find a role that matches your skills?
                    </h2>
                    <p className="text-gray-400 mb-6">
                        We&apos;re always looking for talented people.
                    </p>
                    <button
                        onClick={() =>
                            router.push(
                                `/career/apply-form?title=other&description=User%20did%20not%20find%20a%20matching%20role`
                            )
                        }
                        className="px-8 py-3 rounded-full border border-lime-400 text-lime-400 font-semibold hover:bg-lime-400 hover:text-black transition-all duration-300"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}