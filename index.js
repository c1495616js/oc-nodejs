const app = require("express")();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen("8888", () => {
  console.log("server start at 8888");
});
