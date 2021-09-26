const fs = require("fs");
const path = require("path");
const notifier = require('node-notifier');
const vars = require('../vars');

module.exports = {
    listNumFiles: function()
    {
        fs.readdir('./latest_ver', (error, files) => {
            let totalFiles = files.length;
            console.log(`There are currently ${totalFiles} Script Hook V version(s) downloaded`);
            if (error) {
              throw error
            }
        
            switch (totalFiles) {
              case 1:
                notifier.notify({
                  title: 'Script Hook V auto-downloader',
                  message: 'Daily check completed, no new versions downloaded',
                  icon: `${vars.icon}`,
                  sound: true,
                  wait: false,
                  appID: 'joe nuts',
                })
                break;
              case 2:
                var pogFiles2 = fs.readdirSync(`./${vars.verDirectory}`).filter(file => file.endsWith('.zip')); // finds files with the .zip extention
                strpogFiles2 = pogFiles2.toString();
                old_ver = strpogFiles2.slice(12, 22);
                const oldFile = `${vars.verDirectory}/ScriptHookV_${old_ver}.zip`;
                new_ver = strpogFiles2.slice(39, 49);

                console.log(`Old version: ${old_ver}\nNew version: ${new_ver}`);
                console.time(`Deleting version: ${old_ver}`);

                if (old_ver < new_ver) {
                  try {
                    fs.unlinkSync(oldFile); // deletes the older version of scripthook
                  } catch (err) {
                    throw err
                  }
                  console.timeEnd(`Deleting version: ${old_ver}`);

                  notifier.notify({
                    title: 'Script Hook V auto-downloader',
                    message: `A new version of script hook has been released:\n${old_ver} to ${new_ver}`,
                    icon: `${vars.icon}`,
                    sound: true,
                    wait: false,
                    appID: 'joe nuts',
                  })
                }
                break;
            }
          });
    }
}
