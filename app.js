const express = require("express");
const app = express();
const itemsController = require("./src/controllers/items");
const PORT = 8000;

//Database, if any

//Controllers
app.use("/api/item", itemsController);

//Port
app.set("port", PORT);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
