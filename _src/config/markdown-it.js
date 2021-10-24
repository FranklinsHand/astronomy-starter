module.exports = function(eleventyConfig) {

    let markdownIt = require("markdown-it");
    let markdownItAttrs = require('@gerhobbelt/markdown-it-attrs');
    let mardownLinkReplace = require("markdown-it-replace-link");

    let options = {
      html: true,
      breaks: true,
      linkify: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options)

      .use(markdownItAttrs, {
        // optional, these are default options
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: ['id', 'class']  // empty array = all attributes are allowed
        })

      .use(mardownLinkReplace, {
        replaceLink: function (link, env, token) {
          if (token.type === 'image') {
            return link + "?nf_resize=fit&w=1000";
          }
          return link
        }
      })
      
    );
}