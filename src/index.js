const app = require("./app");

// Initial Server

app.listen(app.get("port"), () =>
  console.log(`Service is running on port: ${app.get("port")}`)
);
