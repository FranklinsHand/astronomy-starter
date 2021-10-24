
// Import modules to include
const example = require('./example.js')
const head = require('./head.js')
const footer = require('./footer.js')
const nav = require('./nav.js')
const imageShortcode = require('./imageShortcode.js')
const dropdownItem = require('./dropdownItem.js')
const dropdown = require('./dropdown.js')
const navItem = require('./navItem.js')
const axiosData = require('./axiosData.js')
const netlifyRoute = require('./netlifyRoute.js')
const button = require('./button.js')

module.exports = function(eleventyConfig) {
  example(eleventyConfig)
  head(eleventyConfig)
  footer(eleventyConfig)
  nav(eleventyConfig)
  imageShortcode(eleventyConfig)
  dropdownItem(eleventyConfig)
  dropdown(eleventyConfig)
  navItem(eleventyConfig)
  axiosData(eleventyConfig)
  netlifyRoute(eleventyConfig)
  button(eleventyConfig)
}
