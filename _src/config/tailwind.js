module.exports = function(eleventyConfig) {

    const pluginTailwindCSS = require("eleventy-plugin-tailwindcss");
    
    eleventyConfig.addPlugin(pluginTailwindCSS, {
        src: "_src/styles/index.css",
        dest: ".",
        minify: true,
        configFile: "tailwind.config.js",
        });

}