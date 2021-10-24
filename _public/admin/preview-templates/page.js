import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    //${entry.getIn(["data", "heroGoal"], null)} makes it not appear if empty

    var hero = entry.getIn(['data', 'hero'])

    var heroTrue = this.props.widgetsFor('hero').getIn(["data", "heroLink"], null)

    return html`
      <hr class="bg-yellow-600 border-2"/>
      <div>
        <div class="mt-5 mx-auto max-w-7xl px-4 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-15">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">${entry.getIn(["data", "title"])}</span>
            </h1>
            ${heroTrue ? html`
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                ${this.props.widgetsFor('hero').getIn(["data", "heroSummary"], null)}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div class="rounded-md shadow">
                  <a href="${this.props.widgetsFor('hero').getIn(["data", "heroLink"], null)}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 {bgColor} hover:bg-yellow-900 hover:text-white md:py-4 md:text-lg md:px-10">
                    ${this.props.widgetsFor('hero').getIn(["data", "heroGoal"], null)}
                  </a>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="m-3 md:m-20" >${this.props.widgetFor("body")}</div>

          ${heroTrue ? html`
            <div class="my-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              <div class="mt-3 sm:mt-0 sm:mx-3">
                <a href="${this.props.widgetsFor('hero').getIn(["data", "heroLink"])}" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-900 md:py-4 md:text-lg md:px-10">${this.props.widgetsFor('hero').getIn(["data", "heroGoal"])}</a>
              </div>   
            </div> 
          ` : ''}
      </div>
    `;
  }
});

export default Page;