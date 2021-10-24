module.exports = function(eleventyConfig) {
  eleventyConfig.addJavaScriptFunction("axiosData", function(data) {
    return /* html */`
    <script>
      axios({
        method: 'get',
        url: '${data.global.site_url}/data.json',
        responseType: 'json'
      })
      .then(response => (
        this.items = response,
        this.academyLinks = response.data.links.filter(link => link.type === 'academy'),
        this.businessLinks = response.data.links.filter(link => link.type === 'business'),
        this.communityLinks = response.data.links.filter(link => link.type === 'community')
      ))

    </script>
    `
  });
};
