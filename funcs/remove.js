const fs = require("fs");
const vars = require('../vars');

module.exports = {
    remove: function()
    {
        console.time(`Successfully deleted the ${vars.folder} folder`);
        try {
          fs.rm(vars.folder, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
          });
          console.timeEnd(`Successfully deleted the ${vars.folder} folder`);
        } catch (err) {
          console.error(`Error while deleting ${vars.folder}.`);
        }
    }
}
