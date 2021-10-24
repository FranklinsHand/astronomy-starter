module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("button", function(link, goal, bg, hover) {
    return /* html */`
    <div class="mt-3 sm:mt-0 sm:mx-3">
      <a href="${link}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${bg} ${hover} md:py-4 md:text-lg md:px-10">${goal}</a>
    </div>  
    `
  });
};
