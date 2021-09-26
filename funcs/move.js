const fs = require("fs");
const path = require("path");
const vars = require('../vars');

module.exports = {
    move: function()
    {
        console.time(`Script Hook found`);
        var pogFiles = fs.readdirSync(`./${vars.folder}`).filter(file => file.endsWith('.zip'));
        var strpogFiles = pogFiles.toString();
        var pogFile = strpogFiles.slice(0, 26);
        console.timeEnd(`Script Hook found`);
        /* looks for scripthook */
      
        /* moves scripthook to ./latest_ver */
        console.time(`${pogFile} successfully moved to ${vars.verDirectory}`);
        const pathToFile = path.join(`./${vars.folder}`, pogFile);
        const pathToNewDestination = path.join(`./${vars.verDirectory}`, pogFile);
      
        fs.copyFile(pathToFile, pathToNewDestination, function (err) {
          if (err) {
            throw err
          } else {
            console.timeEnd(`${pogFile} successfully moved to ${vars.verDirectory}`);
          }
        })
        /* moves scripthook to ./latest_ver */
    }
}
