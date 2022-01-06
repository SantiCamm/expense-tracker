const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;

connectDB();

const transactions = require("./routes/transactions");

const app = express();

// In order to use the body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Each request made to this url will be routed to the transactions file
app.use("/expensetracker/transactions", transactions);

if (process.env.NODE_ENV === "production") {

    // We make our build folder the static folder
    app.use(express.static('client/build'));

    // Each request (except our api routes) will load the index.html file
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);
