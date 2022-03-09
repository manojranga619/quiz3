const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "Manoj123",
      password: "Manoj@123"
    },
    type: "default"
  },
  server: "adbquiz3.database.windows.net",
  options: {
    database: "adbquiz3",
    encrypt: true
  }
};


const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
  }
});

connection.connect();
module.exports = connection;