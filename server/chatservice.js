
const fs = require('fs');
const logFilePath = 'logs.txt'; // the path to the log file


function printMessage(label, message){
  let time = new Date().toLocaleString();
    console.log(`(time: ${time})[${label}]: ${message}`)
    fs.appendFile(logFilePath, `(time: ${time})[${
      label}]: ${
        message}\n`, (err) => {
      if (err) throw err;
      // console.log('Log written to file');
    });
}

module.exports ={
  printMessage
}
