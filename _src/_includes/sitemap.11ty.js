exports.data = {

    permalink: '/sitemap.xml',
    eleventyExcludeFromCollections: true

  }
// https://www.belter.io/eleventy-sitemap/
// https://www.11ty.recipes/recipes/add-a-sitemap/

exports.render = function(data) {

  return /* html */`<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data.collections.all.map(page => /* html */`
    ${page.data.layout ? /* html */`<url>
          <loc>${data.global.site_url}${page.url || url}</loc>
          <lastmod>${page.date.toISOString()}</lastmod>
          <changefreq>${page.data.changeFreq ? page.data.changeFreq : 'monthly'}</changefreq>
      </url>` : ''}
    `).join('')}
</urlset>
  `;
}
