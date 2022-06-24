const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5050;

app.use(express.static(path.resolve(__dirname + "/frontend")));
app.use(express.static(path.resolve(__dirname + "/frontend/js")));
app.use(express.static(path.resolve(__dirname + "/frontend/css")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/frontend/index.html"));
});

app.listen(process.env.PORT || PORT, () => {
  console.log("server is running on port http://localhost:" + PORT);
});
