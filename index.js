const CheckModule = require('./funcs/check');
const DlModule = require('./funcs/download');
const MoveModule = require('./funcs/move');
const RmDirModule = require('./funcs/remove');
const OpenDirModule = require('./funcs/open');
const ListNumModule = require('./funcs/list');

/* prevents function speed related errors */
const executeFirst = () => {
  CheckModule.check();
  DlModule.downloader();
}
const executeSecond = () => {
  MoveModule.move();
}
const executeThird = () => {
  RmDirModule.remove();
}
const executeFourth = () => {
  OpenDirModule.openDir();
}
const executeLast = () => {
  ListNumModule.listNumFiles();
}
/* prevents function speed related errors */

setTimeout(executeFirst, 0);
setTimeout(executeSecond, 2000);
setTimeout(executeThird, 3000);
setTimeout(executeFourth, 4000)
setTimeout(executeLast, 5000);
