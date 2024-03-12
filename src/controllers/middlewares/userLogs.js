const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/userLogs.txt');

const userLogs = (req, res, next) => {
  const logMessage = `El usuario ingresó a la ruta: ${req.path}\n`;
  fs.appendFileSync(logFilePath, logMessage);
  next();
};

module.exports = userLogs;