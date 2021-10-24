exports.data = {

    permalink: '/robots.txt',
    eleventyExcludeFromCollections: true

  }
// https://www.11ty.recipes/recipes/add-a-sitemap/
// https://www.belter.io/eleventy-sitemap/

exports.render = function(data) {

  return `Sitemap: ${data.global.site_url}/sitemap.xml

User-agent: *
Disallow:
  `;
}
