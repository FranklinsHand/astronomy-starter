module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("dropdownItem", function(data) {
    return /* html */`
      <ul class="list-none">
        <li><a x-bind:id="item.name" x-bind:href="item.url" x-text="item.name" class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"></a></li>
      </ul>
    `
  });
};
