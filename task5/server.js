const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname + "/js")));
app.use(express.static(path.resolve(__dirname + "/js/pages")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 8086, () => {
  console.log("server is running on http://localhost:" + 8086);
});
