const http = require("http");
const { app } = require("./index");
const PORT = 8000;
const { connectDb } = require("./connection.js");

connectDb()
  .then(() => {
    listenServer();
    console.log("DB connected!");
  })
  .catch((err) => console.log(err));

function listenServer() {
  const createServer = http.createServer(app);
  createServer.listen(PORT, () => console.log("Server started!"));
}
