# SEO Quick Reference Checklist

## ✅ Immediate Actions After Deployment

### 1. Google Search Console Setup

- [ ] Verify site ownership
   - [ ] Submit sitemap: `https://vyankatesh.dev/sitemap.xml`
- [ ] Monitor indexing status
- [ ] Check for crawl errors

### 2. Bing Webmaster Tools

- [ ] Verify site ownership
- [ ] Submit sitemap
- [ ] Configure site settings

### 3. Verification Codes

- [ ] Add Google Search Console verification code to `/app/layout.tsx`
- [ ] Add Bing verification code if needed
- [ ] Update `.env` with `NEXT_PUBLIC_GOOGLE_VERIFICATION`

### 4. Social Media

- [ ] Test Open Graph tags on Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter Cards on Twitter Card Validator: https://cards-dev.twitter.com/validator
   - [ ] Update Twitter handle in metadata if different from @realpiyush2525

### 5. Performance Testing

- [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Test Core Web Vitals
- [ ] Check mobile usability
- [ ] Verify structured data with Rich Results Test

### 6. Analytics

- [ ] Confirm Google Analytics is tracking (check `NEXT_PUBLIC_GA_ID`)
- [ ] Set up goals and conversions
- [ ] Enable enhanced measurement
- [ ] Connect Search Console to Analytics

---

## 🔧 Configuration Updates Needed

### Environment Variables

Update your `.env` or deployment environment:

```bash
NEXT_PUBLIC_GA_ID=your-actual-ga-id
NEXT_PUBLIC_SITE_URL=https://vyankatesh.dev
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### Files to Customize

1. **`/lib/seo.ts`**

   - Update `siteUrl` if different from vyankatesh.dev
   - Update `twitterHandle` if different
   - Add more keywords if needed

2. **`/app/layout.tsx`**

   - Replace Google verification placeholder
   - Update social media links in Organization schema
   - Verify all URLs are correct

3. **`/public/robots.txt`**
   - Update sitemap URL if domain changes
   - Add specific rules if needed

---

## 📊 Weekly Monitoring Tasks

### Week 1-4 (Launch Phase)

- [ ] Check indexing progress daily
- [ ] Monitor for crawl errors
- [ ] Review search queries in Search Console
- [ ] Check for manual actions/penalties

### Ongoing (Monthly)

- [ ] Review search performance trends
- [ ] Monitor keyword rankings
- [ ] Check for broken links
- [ ] Update content based on search queries
- [ ] Review Core Web Vitals
- [ ] Check mobile usability

---

## 🎯 SEO KPIs to Track

### Search Console Metrics

- Total clicks
- Total impressions
- Average CTR (Click-Through Rate)
- Average position
- Number of indexed pages

### Google Analytics Metrics

- Organic traffic
- Bounce rate
- Pages per session
- Average session duration
- Goal completions

### Technical Metrics

- Core Web Vitals (LCP, FID, CLS)
- Page load time
- Mobile performance score
- Desktop performance score

---

## 🚨 Common Issues & Solutions

### Issue: Pages not indexed

**Solution**:

- Submit sitemap again
- Use URL Inspection tool in Search Console
- Check robots.txt isn't blocking
- Request indexing manually

### Issue: Low CTR

**Solution**:

- Improve meta descriptions
- Add power words to titles
- Update Open Graph images
- Test different title formats

### Issue: Slow performance

**Solution**:

- Optimize images
- Enable caching
- Use CDN
- Minimize JavaScript

### Issue: Duplicate content

**Solution**:

- Check canonical tags
- Use 301 redirects
- Add `noindex` to duplicate pages
- Update sitemap

---

## 📝 Content Strategy Tips

### Blog Post SEO (Future)

When adding blog posts:

1. Target specific long-tail keywords
2. Use keyword in: title, H1, first paragraph, URL
3. Add internal links to services/projects
4. Include images with alt text
5. Add FAQ schema for question-based posts
6. Aim for 1500+ words for pillar content

### Service Page Updates

- Add more detailed service descriptions
- Include case studies/examples
- Add FAQ section with FAQ schema
- Show pricing if possible
- Add call-to-action buttons

### Project Portfolio

- Add more project details
- Include technologies used
- Show before/after metrics
- Add client testimonials
- Link to live demos

---

## 🔗 Useful SEO Tools

### Free Tools

- Google Search Console
- Google Analytics
- Google PageSpeed Insights
- Google Rich Results Test
- Google Mobile-Friendly Test
- Bing Webmaster Tools

### Paid Tools (Recommended)

- Ahrefs - Backlinks & keyword research
- SEMrush - Comprehensive SEO suite
- Moz - Domain authority tracking
- Screaming Frog - Technical SEO audits

### Testing Tools

- metatags.io - Social preview
- Facebook Sharing Debugger
- Twitter Card Validator
- Schema.org Validator
- SSL Labs - Security check

---

## ✨ Quick Wins

### Easy Improvements

1. Add schema markup to testimonials
2. Create an FAQ page with FAQ schema
3. Add breadcrumb navigation with schema
4. Optimize image file names and alt text
5. Add internal links between related pages
6. Create a blog for content marketing

### Technical Quick Wins

1. Enable HTTP/2
2. Implement lazy loading
3. Optimize CSS delivery
4. Minify resources
5. Use browser caching
6. Compress images

---

## 📞 Need Help?

Refer to:

- **Detailed Guide**: `SEO_GUIDE.md`
- **Implementation Summary**: `SEO_IMPLEMENTATION.md`
- **Utility Functions**: `lib/seo.ts`
- **Structured Data Components**: `components/StructuredData.tsx`

---

**Remember**: SEO is an ongoing process. Regular monitoring and updates are key to success!

**Created**: November 18, 2025
