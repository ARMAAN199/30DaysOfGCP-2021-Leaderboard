const express = require("express");
// const mainroutes = require("./routes/mainroutes");
const fs = require("fs/promises");
const createCsvWriter = require("csv-writer").createArrayCsvWriter;

const app = express();
const hostname = "0.0.0.0";
const port = 8080;
app.set("view engine", "ejs");

app.use(express.static("public"));
// app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const puppeteer = require("puppeteer");
const { json } = require("body-parser");

const csvWriter = createCsvWriter({
  header: ["Quests"],
  path: "file.csv",
});

// For testing and development purposes

// const urls = [
//     "https://google.qwiklabs.com/public_profiles/a13186ba-7fef-45ad-a539-cbf589475fa8",
//     "https://google.qwiklabs.com/public_profiles/8b44dc79-6547-4be9-90f6-21a770e42550",
//     "https://www.qwiklabs.com/public_profiles/5ff2c506-64ea-4bc8-b48f-59cfc4152736",
//     "https://google.qwiklabs.com/public_profiles/1b2f781e-5edc-485f-8fe7-1f63735588d2",
//   ];

var finalobj = {};

// setInterval(function () {
//   startbrowser();
// }, 360000);
startbrowser();
// Refresshes Every 6 minutes

app.get("/", (req, res, next) => {
  res.send(finalobj);
});

app.listen(port, () => {
  console.log(`App Running on port ${port || process.env.PORT}.`);
});
