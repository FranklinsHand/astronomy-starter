exports.data = {
  layout: "Base",

  eleventyComputed: {
    permalink: async data => {
      if(data.tags) {
        return `/${data.tags[0]}/${data.name}/index.html`
      } else {
        return `/${data.name}/index.html`
      }
    }
 },
}


exports.render = function(data) {

  var bgColor = "bg-yellow-400"
  var hColor = "hover:bg-yellow-900"
  var bColor = "border-yellow-400"
  if(data.tags) {
    if(data.tags[0] === "academy") {
      bgColor = "bg-academy-green"
      hColor = "hover:bg-green-900"
      bColor = "border-green-800"
    }else if(data.tags[0] === "business") {
      bgColor = "bg-business-blue"
      hColor = "hover:bg-blue-900"
      bColor = "border-business-blue"

    }else if(data.tags[0] === "community") {
      bgColor = "bg-community-blue"
      hColor = "hover:bg-blue-600"
      bColor = "border-community-blue"
    }
  }
  
  var hero = null

  if(data.hero) {
    if(data.hero.heroLink) {
      hero = data.hero
    }
  }


  return /* html */`
      <hr class="${bColor} border-2"/>
      <div class="mx-auto max-w-lg">
        <div class="my-5 mx-auto px-4 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-15">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">${data.title}</span>
            </h1>

            ${hero ? /* html */`
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:text-center md:mt-5 md:text-xl">
                ${hero.heroSummary}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div class="rounded-md shadow">
                  <a href="${hero.heroLink}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${bgColor} ${hColor} hover:text-white md:py-4 md:text-lg md:px-10">
                    ${hero.heroGoal}
                  </a>
                </div>
              </div>
            ` : ""}

          </div>
        </div>



        <div class="m-3" >${data.content}</div>

        ${hero ? /* html */`
        <div class="my-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div class="mt-3 sm:mt-0 sm:mx-3">
            <a href="${hero.heroLink}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white ${bgColor} ${hColor} md:py-4 md:text-lg md:px-10">${hero.heroGoal}</a>
          </div>   
        </div> 
        ` : ""}

      </div>
  `;
}
