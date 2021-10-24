module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("head", function(data) {
    return /* html */`
    <head>
      <title>${this.page.fileSlug} Third Street</title>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="${data.metaDescription ? data.metaDescription : ''}">

      <link rel="shortcut icon" href="${data.global.site_url}/_src/tsec-favicon.png">

      <script async defer data-domain="thirdstreetec.netlify.app" src="https://plausible.io/js/plausible.js"></script>

      <link href="${data.global.site_url}/styles/index.css" rel="stylesheet">

      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

      <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      <script async src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

    </head>
    `
  });
};
