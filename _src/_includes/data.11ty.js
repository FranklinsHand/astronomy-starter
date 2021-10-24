exports.data = {
  
    permalink: data => `/data.json`,
    eleventyExcludeFromCollections: true

  }


exports.render = function(data) {

  return /* html */`{
    "academy": [
      ${data.collections.academy.map(academy => `{
        "name": "${academy.data.title}",
        "url": "${data.global.site_url}${academy.data.page.url}"
      }`)}
    ],
    "business":[
      ${data.collections.business.map(business => `{
        "name": "${business.data.title}",
        "url": "${data.global.site_url}${business.data.page.url}"
      }`)}
    ],
    "community": [
        ${data.collections.community.map(community => `{
          "name": "${community.data.title}",
          "url": "${data.global.site_url}${community.data.page.url}"
      }`)}
    ],
    "links": [
      ${data.collections.links.map(link => `{
        "name": "${link.data.name}",
        "url": "${link.data.url}",
        "type": "${link.data.type}"
      }`)}
    ]
  }`;
}
