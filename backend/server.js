const express = require("express");
require("dotenv").config();
const colors = require("colors");
const path = require("path");
const app = express();
var cors = require("cors");
app.use(cors());
const port = process.env.PORT || 9000;
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.get("/api/users", (req, res) => {
  res.json({ message: "Welcome to the Support Desk" });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
