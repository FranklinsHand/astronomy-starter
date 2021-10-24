import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Team = createClass({
  render() {
    const entry = this.props.entry;
    const teamWidget = this.props.widgetsFor('name')

    console.log(this.props)

    console.log(teamWidget)


    const memberWidget = this.props.widgetsFor('member')

    console.log(teamWidget)

    return html`
      <div>
        ${teamWidget.map(team => html`
          <h1>${team.getIn(['data', 'name'])}</h1>
          <article class="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            ${memberWidget.map(member => html`
              <div class="">
                <div class="w-60 h-60">
                  <img src="${member.getIn(['data', 'thumbnail'])}"
                      class="foto w-full h-full object-cover"
                      alt="description" />
                </div>
                <p>${member.getIn(['data', 'name'])}</p>
                <p>${member.getIn(['data', 'title'])}</p>
                <p>${member.getIn(['data', 'email'])}</p>
              </div>
            `
            )}
          </article>
        `)}
      </div>
    `}
});

export default Team;