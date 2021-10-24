module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("module", function(data) {
    return /* html */`
    <p>example<p>
    `
  });
};
