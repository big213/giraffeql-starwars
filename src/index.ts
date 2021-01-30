import express from "express";
import path from "path";
import { initializeJomql } from "jomql";
import "./schema";

const app = express();
app.use(express.json());
const port = 8080;

initializeJomql(app, {
  debug: true,
  lookupValue: true,
  jomqlPath: "/jomql",
});

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.sendFile("static/home.html", { root: path.dirname(__dirname) });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
