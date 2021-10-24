exports.data = {
    layout: "Base",

    permalink: "/team/index.html"
  }


exports.render = function(data) {

  return /* html */`
  <hr class="border-yellow-400 border-2"/>
  <main class="m-4">
    <h1>Third Street Team</h1>
    ${data.collections.team.map(team => /* html */`
      ${team.data.name.map(name => /* html */`
        <h2 class="mt-4">${name.team}</h2>
        <article class="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          ${name.member.map(member => /* html */`
            <div class="">
              <div style="width:300px; height:300px">
                <img src="${member.thumbnail + "?nf_resize=fit&w=1024&h=768"}"
                    class="foto w-full h-full object-cover"
                    alt="description" 
                    style="width:300px; height:300px"/>
              </div>
              <p>${member.name}</p>
              <p>${member.title}</p>
              <p>${member.email}<p>
            </div>
          `).join('')}
        </article>
      `).join('')}
    `).join('')}
  </main>
  `;
}
