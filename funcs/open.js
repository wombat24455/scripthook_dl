const vars = require('../vars');

module.exports = {
    openDir: function()
    {
        console.log("opening dir...")
        require('child_process').exec(`start ${vars.verDirectory}`);
        console.log("done");
    }
}
