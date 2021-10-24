class Base {
  data() {
    return {
      //permalink: "/base.html"
      changeFreq: 'daily'
    }
  }
  render(data) {
    return /* html */`
<!DOCTYPE html>
<html lang="en">

  ${this.head(data)}

  <body class="flex-col">

    <div class="">
      ${this.nav(data)}
    </div>

    <main class="flex-grow">
      ${data.content}
    </main>

    <div class="">
      ${this.footer(data)}
    </div>

  </body>
</html>
    `;
  }
}

module.exports = Base
