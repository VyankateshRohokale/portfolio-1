# AI Crawling & Indexing Guide for byencrypt

This document explains how byencrypt's website is optimized for AI crawlers, language models, and search engines.

## Overview

The byencrypt website is designed to be easily discoverable and parseable by AI systems including:

- ChatGPT (GPTBot, ChatGPT-User)
- Claude (anthropic-ai, Claude-Web)
- Google Gemini (Google-Extended)
- Perplexity (PerplexityBot)
- Common Crawl (CCBot)
- Cohere (cohere-ai)
- Amazon (Amazonbot)

## AI-Friendly Resources

### 1. **robots.txt** (`/public/robots.txt`)

- Explicitly allows all major AI crawlers
- Lists AI-specific user agents (GPTBot, ChatGPT-User, CCBot, Claude-Web, etc.)
- Points to sitemap and AI indexing files

**Access:** https://byencrypt.com/robots.txt

### 2. **AI Indexing JSON** (`/public/ai-indexing.json`)

- Machine-readable JSON with complete company information
- Services, technologies, contact info, blog articles
- Structured data optimized for AI parsing

**Access:** https://byencrypt.com/ai-indexing.json

### 3. **AI Info Text** (`/app/ai.txt`)

- Plain text format for simple parsing
- Company overview, services, technologies
- Contact information and project timelines

**Access:** https://byencrypt.com/ai.txt

### 4. **AI Data API** (`/app/api/ai-data/route.ts`)

- Dynamic JSON endpoint with latest company data
- Auto-updates with current date
- CORS enabled for cross-origin access
- Cached for performance

**Access:** https://byencrypt.com/api/ai-data

### 5. **AI Info Page** (`/app/ai-info/page.tsx`)

- Human and machine-readable webpage
- Comprehensive overview of all services
- Links to all machine-readable resources
- Displays technology stack and crawling policy

**Access:** https://byencrypt.com/ai-info

## Structured Data (Schema.org)

### Organization Schema

Located in `/app/layout.tsx`, includes:

- Company name, URL, logo
- Contact information
- Social media profiles
- Services offered (Offer schema)
- Knowledge areas

### Website Schema

- Site search capability
- Publisher information
- Content type declarations

## Meta Tags for AI

Added to the main layout:

```html
<meta name="ai-content-declaration" content="ai-assisted" />
<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
/>
<link
  rel="alternate"
  type="application/json"
  href="https://byencrypt.com/ai-indexing.json"
/>
```

## Sitemap

**Location:** `/app/sitemap.ts`
**Access:** https://byencrypt.com/sitemap.xml

Includes:

- All main pages
- All 7 service detail pages
- All blog posts
- AI info page
- Priority and update frequency metadata

## Services Data for AI

All services include:

- Name and description
- URL and slug
- Technologies used
- Project timeline
- Detailed offerings
- SEO metadata

### Services:

1. **Blockchain Development** - Smart contracts, DeFi, NFTs
2. **Full Stack Development** - Web and mobile applications
3. **Web3 Solutions** - dApps and wallet integration
4. **AI & Machine Learning** - ML models, NLP, computer vision
5. **Backend Architecture** - Microservices, APIs, cloud
6. **Security & Auditing** - Smart contract audits, pentesting
7. **Custom Solutions** - Bespoke development, modernization

## Blog Content

All blog posts include:

- Full SEO metadata
- Structured headings (H1, H2, H3)
- Code examples where relevant
- Related topics and keywords
- Canonical URLs

### Blog Articles:

1. Smart Contract Development Best Practices
2. Web3 vs Web2: Business Transformation Guide
3. DeFi Development Guide 2025
4. AI & Blockchain Integration Guide
5. Full Stack Development Trends 2025

## Contact Information

Easily discoverable in multiple formats:

- **Support:** support@byencrypt.com
- **Form:** https://byencrypt.com/contact
- **Careers:** https://byencrypt.com/career/apply

## Social Media

- **GitHub:** https://github.com/byencrypt
- **Twitter:** https://twitter.com/byencrypt
- **LinkedIn:** https://www.linkedin.com/company/byencrypt

## How AI Systems Can Use This Data

### For ChatGPT/Claude/Perplexity:

1. Access `/api/ai-data` for latest JSON data
2. Parse `/ai-indexing.json` for static data
3. Read `/ai.txt` for plain text information
4. Visit `/ai-info` for formatted overview

### For Search Engines:

1. Follow `robots.txt` directives
2. Parse `sitemap.xml` for all pages
3. Read Schema.org structured data in HTML
4. Index all meta tags and OpenGraph data

### For Web Scrapers:

1. Use API endpoint for programmatic access
2. Respect cache headers (3600s cache)
3. Follow CORS policies
4. Rate limiting is reasonable (not enforced strictly)

## Content Policy

✅ **AI Crawling:** Allowed  
✅ **AI Training:** Permitted  
✅ **Content Indexing:** Encouraged  
✅ **Commercial Use:** Allowed for AI training  
✅ **Attribution:** Appreciated but not required

## Updates

- **Last Updated:** November 18, 2025
- **Version:** 1.0
- **Update Frequency:** Content refreshed regularly
- **API Cache:** 1 hour (3600 seconds)

## Technical Implementation

### Files Created:

- `/public/robots.txt` - AI crawler permissions
- `/public/ai-indexing.json` - Static JSON data
- `/app/ai.txt` - Plain text information
- `/app/api/ai-data/route.ts` - Dynamic API endpoint
- `/app/ai-info/page.tsx` - Human-readable AI info page
- `/app/layout.tsx` - Enhanced with structured data

### Key Technologies:

- Next.js 15 App Router
- TypeScript
- Schema.org JSON-LD
- OpenGraph Protocol
- Twitter Cards
- Dynamic sitemap generation

## Verification

To verify AI-friendly setup:

1. **Check robots.txt:** `curl https://byencrypt.com/robots.txt`
2. **Check AI data:** `curl https://byencrypt.com/api/ai-data`
3. **Check sitemap:** `curl https://byencrypt.com/sitemap.xml`
4. **Validate schema:** Use Google's Rich Results Test
5. **Test meta tags:** Use OpenGraph debuggers

## Support

For questions about AI crawling or data access:

- Email: support@byencrypt.com
- API issues: Create issue on GitHub
 - API issues: Create issue on GitHub

---

**Note:** This website's content is created with AI assistance and is optimized for both human readers and AI systems. We encourage responsible AI crawling and training on our public content.
