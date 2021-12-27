const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

//get gig list
// Get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => res.send(gigs))
    .catch((err) => res.send(err))
);

//display add gig form
router.get("/add", (req, res) => res.render("add"));

// Add a gig
router.post("/add", (req, res) => {
  // const data = { // (this is hardcoded data for testing usually this will be a form data)
  //   title: 'simple wordpress website',
  //   technologies: 'wordpress,php,html,css',
  //   budget: '51000',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   contact_email: 'user2@gmail.com'
  // }

  // Add validation to the form
  let { title, technologies, budget, description, contact_email } = req.body; // javascript destructureing & req.body is the form data
  let errors = [];
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!technologies) {
    errors.push({ text: "Please some technologies" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }
  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email,
    });
  } else {
    if (!budget) {
      budget = "Unknown";
    } else {
      budget = `$${budget}`;
    }
    Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email,
    })
      .then((gig) => {
        res.redirect("/gigs");
        //console.log(gig)
      })
      .catch((err) => console.log(err));
  }
});

//Insert into table

module.exports = router;
