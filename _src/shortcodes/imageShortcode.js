const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("imageShortcode", function(src, cls, alt, sizes, widths) {
    let options = {
        widths: widths,
        formats: ['png', 'jpeg'],
        outputDir: './_site/img/'
      };

      // generate images, while this is async we don’t wait
      Image(src, options);

      let imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
      // get metadata even the images are not fully generated
      metadata = Image.statsSync(src, options);
      return Image.generateHTML(metadata, imageAttributes);
  });
};
