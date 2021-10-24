//https://github.com/FranklinsHand/eleventy-netlify-boilerplate/blob/master/admin/preview-templates/index.js

import Page from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("academy", Page);
CMS.registerPreviewTemplate("business", Page);
CMS.registerPreviewTemplate("community", Page);
CMS.registerPreviewTemplate("individual", Page);

CMS.registerPreviewStyle("/_src/styles/index.css");
// Register any CSS file on the home page as a preview style
fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });