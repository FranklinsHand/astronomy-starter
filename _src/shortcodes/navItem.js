module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("navItem", function(link, label, data) {

    var siteURL = ""

    if(data) {
      siteURL = data.global.site_url
    }

    return /* html */`
    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" 
      href="${siteURL + link}"
      >
      ${label}
    </a>
    `
  });
};
