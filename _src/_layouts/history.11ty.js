exports.data = {
    layout: "Base",

    permalink: "/history/index.html"
  }


exports.render = function(data) {

  return /* html */`
  <hr class="border-yellow-400 border-2"/>
  <main class="ml-auto mr-auto max-w-md">
    ${data.collections.history.map(history => /* html */`
      ${history.data.year.map(year => /* html */`
        <article class="m-4">
          <h1>${year.year}</h1>
          <ul>
            ${year.items.map(item => /* html */`
                <li class="p-2">${item.item}</li>
            `).join('')}
          </ul>
        </article>
      `).join('')}
    `).join('')}
  </main>
  `;
}
