require('dotenv').config()

const src = require("./_src/")

module.exports =  function(eleventyConfig) {

  //exposes eleventyConfig function to the 'src folder'
  src(eleventyConfig)

  return {
    dir: {
      input: "_src",
      includes: "",
      layouts: "_layouts",
      output: "_site",
      data: "_data"
    },
    templateFormats: [
      'md',
      '11ty.js',
    ],
  };

}
