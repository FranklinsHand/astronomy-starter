module.exports = function(eleventyConfig) {
  eleventyConfig.addPairedShortcode("nav", function(data) {
    return /* html */`

    ${this.axiosData(data)}

    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900">
        <div class="w-full text-gray-700 bg-white shadow-md dark-mode:text-gray-200 dark-mode:bg-gray-800 ">
            <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div class="flex flex-row items-center justify-between p-1">
                    <a class="bg-white" href="${data.global.site_url}/"><img src="${data.global.site_url}/files/logo.png" alt="logo" width="115" height="67"></a>
                    <button title="home" class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                        <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    </button>
                </div>
                <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">

                    ${this.dropdown("academy", "Academy", "hover:bg-academy-green", "focus:bg-academy-green")}

                    ${this.dropdown("business", "Workforce Development", "hover:bg-business-blue", "focus:bg-business-blue")}

                    ${this.dropdown("community", "Community Impact", "hover:bg-community-blue", "focus:bg-community-blue")}

                    ${this.navItem("/about", "About Us", data)}
                    ${this.navItem("/events", "Events")}
                    ${this.navItem("https://thirdstreetec.z2systems.com/np/clients/thirdstreetec/donation.jsp", "Give")}

                </nav>
            </div>
        </div>
    </div>
    `
  });
};
