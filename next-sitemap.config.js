/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bruhcenter.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/test-og/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/gallery'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://bruhcenter.com/sitemap.xml',
    ],
  },
}
