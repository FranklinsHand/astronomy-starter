exports.data = {
    layout: "Base",
  //      eleventyComputed: { currently broken in 11ty. outputs url /possum/#/name. may be fixed in the future.
  //        permalink: data => `/possum/${data.possum.name}.html`
  //      },
    permalink: data => `/index.html`,
    metaDescription: "Third Street Education Center brings dignity and hope to generations through workforce development programs and focused education for young boys"
  }


exports.render = function(data) {

  return /* html */`
        <div class="text-white py-20 bg-gray-800 bg-bottom bg-no-repeat bg-cover md:py-30 md:bg-center lg:bg-bottom 2xl:py-40" 
        style="background-image: url('files/hero-tower-2.jpeg');">
          <div class="m-3">
            <p class="m-2 text-center">THIRD STREET EDUCATION CENTER</p>
            <h1 class="font-bold text-center text-2xl md:text-4xl m-0.5">WE CAN BRING</h1>
            <h1 class="font-bold text-center text-2xl md:text-4xl m-0.5">DIGNITY AND HOPE</h1>
            <h1 class="font-bold text-center text-2xl md:text-4xl m-0.5">TO GENERATIONS</h1>
          </div>
        </div>
        <div class="text-gray-800 md:text-center">
          <h2 class="text-gray-800 m-2">We beleive in transforming generations with the power of the gospel</h2>
          <p></p>
          <article class="p-4">
            <div class="max-w-lg mx-auto">
              <h2>Academy</h2>
              <p>Through donations from people just like you we are able to empower the next generation of leaders.</p>
              ${this.button("/academy/about", "Academy", "bg-academy-green", "hover:bg-green-900")}
            </div>
          </article>
          <article class="p-4">
            <div class="max-w-lg mx-auto">
              <h2>Workforce Development</h2>
              <p>Our workforce development program provides top notch landscaping and catering services for our community. We do extensive on the job training for all of our workforce development employees, and all profits go directly to funding our school.</p>
              ${this.button("https://thirdstreetec.z2systems.com/np/clients/thirdstreetec/survey.jsp?surveyId=1&", "Hire Us", "bg-business-blue", "hover:bg-blue-900")}  
            </div>
          </article>
          <article class="p-4">
            <div class="max-w-lg mx-auto">
              <h2>Community Impact</h2>
              <p>Third Street Volunteers are some of the hardest working people around. They support our students through...</p>
              ${this.button("/volunteer", "Volunteer", "bg-community-blue", "hover:bg-blue-600")}
            </div>
          </article>
        </div>
  `;
}
