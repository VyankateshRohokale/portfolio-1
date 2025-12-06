import React from 'react';
import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 font-mono">
      <div className="max-w-[1920px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            {/* <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                by
              </span>
              <span className="font-normal text-[34px] font-clock text-lime-400 leading-none">
                encrypt
              </span>
            </Link> */}
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8 text-lime-400" />
              <span className="text-2xl font-semibold text-white">
                Vyankatesh
              </span>
            </div>
            <p className="mt-4 text-gray-400 text-base">
              Exploring blockchain, full-stack, Web3, and AI to build the next generation of digital solutions.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://github.com/VyankateshRohokale" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://x.com/realpiyush2525" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/vyankatesh-rohokale-695b342a7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:realpiyush2525@gmail.com" className="text-gray-400 hover:text-lime-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/services/blockchain-development" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Blockchain Development</Link></li>
                  <li><Link href="/services/full-stack-development" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Full Stack Development</Link></li>
                  <li><Link href="/services/application-development" className="text-base text-gray-400 hover:text-lime-400 transition-colors">IOS / Android App Development</Link></li>
                  <li><Link href="/services/web3-solutions" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Web3 Solutions</Link></li>
                  <li><Link href="/services/ai-machine-learning" className="text-base text-gray-400 hover:text-lime-400 transition-colors">AI & Machine Learning</Link></li>
                  <li><Link href="/services/backend-architecture" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Backend Architecture</Link></li>
                  <li><Link href="/services/security-auditing" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Security & Auditing</Link></li>
                  <li><Link href="/services/custom-solutions" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Custom Solutions</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {/* <li><Link href="/projects" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Projects</Link></li> */}
                  <li><Link href="/contact" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-base text-gray-400 hover:text-lime-400 transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact Info</h3>
            <div className="mt-4 space-y-4">
              <p className="text-base text-gray-400">
                Email: <a href="mailto:realpiyush2525@gmail.com" className="text-lime-400 hover:text-white">realpiyush2525@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2025 Vyankatesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;