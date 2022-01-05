const express = require("express");
const mysql = require("mysql2");

//Database
const db = require("./config/database");

//test db option 01
// db.authenticate()
// .then(()=>console.log('Connection has been established successfully.'))
// .catch (err=>console.error('Unable to connect to the database:', err))

//Test db option 02
try {
  db.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database:", err);
}

const app = express();

//for use Json data from body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Gig Routes
app.use("/gigs", require("./routes/gigs")); //Middleware - run between request and responce

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
