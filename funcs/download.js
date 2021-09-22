const scrape = require('website-scraper');
const vars = require('../vars');
const fs = require("fs");

module.exports = {
    downloader: function()
    {
        console.time(`Downloaded files from ${vars.ScriptHookWebsite}`);
        scrape({
          urls: [vars.ScriptHookWebsite],
          directory: `../${vars.folder}`,
          sources: [],
          recursive: true,
          maxDepth: 1,
        });
      
        console.timeEnd(`Downloaded files from ${vars.ScriptHookWebsite}`);
    }
}
