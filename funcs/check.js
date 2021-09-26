const fs = require("fs");
const vars = require('../vars');

module.exports = {
    check: function()
    {
        fs.access(`../${vars.folder}`, function(error) {
            if (error) {
            } else {
              console.log(`Folder ${vars.folder} already exists... deleting...`);
        
              fs.rm(`../${vars.folder}`, { recursive: true }, (err) => {
                if (err) {
                    throw err;
                }
              });
            }
        })
    }
}
