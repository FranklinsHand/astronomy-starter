const markdown = require('./markdown-it.js')
const tailwind = require('./tailwind.js')
const notFound = require('./notFound.js')
const passthrough = require('./passthrough.js')

module.exports = function(eleventyConfig) {

  markdown(eleventyConfig)
  tailwind(eleventyConfig)
  notFound(eleventyConfig)
  passthrough(eleventyConfig)

  }
  