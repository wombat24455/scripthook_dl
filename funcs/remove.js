const fs = require("fs");
const vars = require('../vars');

module.exports = {
    remove: function()
    {
        console.time(`Successfully deleted directory: ${vars.folder}`);
        try {
          fs.rm(vars.folder, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
          });
          console.timeEnd(`Successfully deleted directory: ${vars.folder}`);
        } catch (err) {
          console.error(`Error while deleting ${vars.folder}.`);
        }
    }
}
