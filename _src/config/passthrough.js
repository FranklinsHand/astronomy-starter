module.exports = function(eleventyConfig) {

  //passes all files and folders in _public to root of _site
  eleventyConfig.addPassthroughCopy({"_public/": "."});


}