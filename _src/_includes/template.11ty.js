exports.data = {
    layout: "Base",
    permalink: data => `/template.html`,
    eleventyExcludeFromCollections: true
  }


exports.render = function(data) {

  return /* html */`
    <div class="overflow-y-auto mt-4">
      <div class="my-2 ml-auto mr-auto max-w-sm min-h-screen md:max-w-md">
          <<content>>
      </div>
    </div>
  `;
}
