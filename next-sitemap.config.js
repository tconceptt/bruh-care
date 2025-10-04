/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bruhcenter.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/test-og/*'],
  transform: async (config, path) => {
    // Set higher priority for homepage
    if (path === '/') {
      return {
        loc: path,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        changefreq: 'weekly',
        priority: 1.0,
      }
    }
    
    // Set medium priority for gallery
    if (path === '/gallery') {
      return {
        loc: path,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        changefreq: 'monthly',
        priority: 0.8,
      }
    }
    
    // Default for other pages
    return {
      loc: path,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      changefreq: config.changefreq,
      priority: config.priority,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
