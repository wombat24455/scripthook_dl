/* modules needed */
const scrape = require('website-scraper');
const fs = require("fs");
const path = require("path");
const notifier = require('node-notifier');
/* modules needed */

/* variables */
const folder = 'scripthookv';
const ScriptHookWebsite = 'http://www.dev-c.com/gtav/scripthookv/';
const verDirectory = '.\\latest_ver';
/* variables */

/* prevents function speed related errors */
const executeFirst = () => {
  check();
  downloader();
}
const executeSecond = () => {
  poggers();
}
const executeThird = () => {
  delDirectory();
}
const executeFourth = () => {
  openDir();
}
const executeLast = () => {
  listnumfiles();
}
/* prevents function speed related errors */

/* deletes scripthook folder if already exists */
function check() {
  fs.access(`./${folder}`, function(error) {
    if (error) {

    } else {
      console.log(`Folder ${folder} already exists... deleting...`);

      fs.rm(folder, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
      });
    }
  })
}
/* deletes scripthook folder if already exists */


/* downloads the files from ScriptHookWebsite */
function downloader() {
  console.time(`Downloaded files from ${ScriptHookWebsite}`);
  scrape({
    urls: [ScriptHookWebsite],
    directory: 'scripthookv',
    sources: [],
    recursive: true,
    maxDepth: 1,
  });

  console.timeEnd(`Downloaded files from ${ScriptHookWebsite}`);
}
/* downloads the files from ScriptHookWebsite */

/* finds and moves scripthook */
function poggers() {
  console.time(`Script Hook found`);
  var pogFiles = fs.readdirSync(`./${folder}`).filter(file => file.endsWith('.zip'));
  var strpogFiles = pogFiles.toString();
  var pogFile = strpogFiles.slice(0, 26);
  console.timeEnd(`Script Hook found`);
  /* looks for scripthook */

  /* moves scripthook to ./latest_ver */
  console.time(`${pogFile} successfully moved to ${folder}`);
  const pathToFile = path.join(`./${folder}`, pogFile);
  const pathToNewDestination = path.join(__dirname, "latest_ver", pogFile);

  fs.copyFile(pathToFile, pathToNewDestination, function (err) {
    if (err) {
      throw err
    } else {
      console.timeEnd(`${pogFile} successfully moved to ${folder}`);
    }
  })
  /* moves scripthook to ./latest_ver */
}
/* finds and moves scripthook */

/* deletes the folder downloaded */
function delDirectory() {
  console.time(`Successfully deleted directory: ${folder}`);
  try {
    fs.rm(folder, { recursive: true }, (err) => {
      if (err) {
          throw err;
      }
    });
    console.timeEnd(`Successfully deleted directory: ${folder}`);
  } catch (err) {
    console.error(`Error while deleting ${folder}.`);
  }
}
/* deletes the folder downloaded */

/* lists the number of files in the directory ./latest_ver */
function listnumfiles() {
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
          icon: path.join(__dirname, 'img/cashmoney.png'),
          sound: true,
          wait: false,
          appID: 'joe nuts',
        })
        break;
      case 2:
        var pogFiles2 = fs.readdirSync('./latest_ver').filter(file => file.endsWith('.zip')); // finds files with the .zip extention
        strpogFiles2 = pogFiles2.toString();
        old_ver = strpogFiles2.slice(12, 22);
        const oldFile = `./latest_ver/ScriptHookV_${old_ver}.zip`;
        new_ver = strpogFiles2.slice(39, 49);
        console.log(`Old version: ${old_ver}\nNew version: ${new_ver}`);
        console.time(`Deleting ${oldFile}`);
        if (old_ver < new_ver) {
          try {
            fs.unlinkSync(oldFile); // deletes the older version of scripthook
            console.log("Successfully deleted the file.");
          } catch (err) {
            throw err
          }
          console.timeEnd(`Deleting ${oldFile}`);
          notifier.notify({
            title: 'Script Hook V auto-downloader',
            message: `A new version of script hook has been released:\n${old_ver} to ${new_ver}`,
            icon: path.join(__dirname, 'img/cashmoney.png'),
            sound: true,
            wait: false,
            appID: 'joe nuts',
          })
        }
        break;
    }
  });
}
/* lists the number of files in the dir ./latest_ver */

/* opens file dir */
function openDir() {
  console.log("opening dir...")
  require('child_process').exec(`start ${verDirectory}`);
  console.log("done");
}
/* opens file dir */

setTimeout(executeFirst, 0);
setTimeout(executeSecond, 3000);
setTimeout(executeThird, 4000);
setTimeout(executeFourth, 5000);
setTimeout(executeLast, 6000);