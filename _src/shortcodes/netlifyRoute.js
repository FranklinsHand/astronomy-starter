module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("netlifyRoute", function() {
    return /* html */`
    <script>
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    </script>
    `
  });
};
