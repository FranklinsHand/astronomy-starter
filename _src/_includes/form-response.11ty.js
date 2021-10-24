exports.data = {
    layout: "Base",
    permalink: data => `/form-response/index.html`,
    eleventyExcludeFromCollections: true
  }


exports.render = function(data) {

  return /* html */`
    <script>
      let param = new URLSearchParams(location.search.substring(1))
    </script>
    <div
      class="my-2 ml-auto mr-auto max-w-lg"
      x-data="{
        name: param.get('person.firstName'),
        email: param.get('person.email1')
      }"
    >
    <h1 class="m-4">
      Thank you <span x-text="name"></span> for your submission!
    </h1>
    <p>
      An email has been sent to <span x-text="email"></span> confirming your submission. If needed, will follow up with you as soon as we are able.
    </p>
    <div class="m-4">
      <h2>Learn how Third Street is changing our community</h2>
      <iframe 
        class="md:mx-auto"
        width="560"
        height="315" 
        src="https://youtu.be/Iau9yAdkdcY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  </div>
  `;
}
