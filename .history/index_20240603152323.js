import express from "express";

const app = new Array(10);

function createServer(host, port) {
  for (let i = 0; i < app.length; i++) {
    app[i] = express();

    app[i].listen(port, () => {
      console.log(`server running on  ${port}`);
    });
    port++;
  }
}

createServer("localhost", 3000);