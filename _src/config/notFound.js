module.exports = function(eleventyConfig) {

    const fs = require('fs')

    eleventyConfig.setBrowserSyncConfig({//code to make 404 page work. I have no idea how it works tho lol so don't touch it
        callbacks: {
          ready: function(err, bs) {
    
            bs.addMiddleware("*", (req, res) => {
              const content_404 = fs.readFileSync('_site/404/index.html');
              // Add 404 http status code in request header.
              res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
              // Provides the 404 content without redirect.
              res.write(content_404);
              res.end();
            });
          }
        }
      });

}