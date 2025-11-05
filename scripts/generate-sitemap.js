const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');

const hostname = 'https://codethriveinfo.in'; // your domain
const urls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

(async () => {
  const stream = new SitemapStream({ hostname });
  urls.forEach(u => stream.write(u));
  stream.end();
  const sitemap = await streamToPromise(stream);
  writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('✅ sitemap.xml generated in /public');
})();
