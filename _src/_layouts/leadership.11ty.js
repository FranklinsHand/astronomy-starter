exports.data = {
    layout: "Base",

    permalink: "/leadership/index.html"
  }


exports.render = function(data) {

  return /* html */`
  <hr class="border-yellow-400 border-2"/>
  <main class="my-4 mx-auto max-w-md">
    ${data.collections.leadership.map(team => /* html */`
      ${team.data.name.map(name => /* html */`
        <h1 class="my-2">${name.team}</h1>
        <article class="m-4">
          ${name.member.map(member => /* html */`
            <div class="m-2">
              <p class="p-0 m-0">${member.name}</p>
              ${member.title ? `<p class="text-sm m-0">${member.title}</p>` : ""}
            </div>
          `).join('')}
        </article>
      `).join('')}
    `).join('')}
  </main>
  `;
}
