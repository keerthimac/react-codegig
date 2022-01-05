const express = require("express");
const router = express.Router();
const Gig = require("../models/Gig");

//get gig list
// Get gig list
// router.get("/", async (req, res) =>
//   Gig.findAll()
//     .then((gigs) => res.send(gigs))
//     .catch((err) => res.send(err))
// );

router.get("/", async (req, res) => {
  const response = await Gig.findAll();
  res.json(response);
  // .then((gigs) => res.send(gigs))
  // .catch((err) => res.send(err))
});

// Add a gig
router.post("/", (req, res) => {
  //Dummy data before we get the data from the front end
  // const data = {
  //   // (this is hardcoded data for testing usually this will be a form data)
  //   title: "simple wordpress website",
  //   technologies: "wordpress,php,html,css",
  //   budget: "51000",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   contact_email: "user2@gmail.com",
  // };

  // Add validation to the form
  let { title, technologies, budget, description, email } = req.body; // javascript destructuring & req.body is the form data
  //console.log(req);

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
  if (!email) {
    errors.push({ text: "Please add a contact email" });
  }
  if (errors.length > 0) {
    res.send({
      errors,
      title,
      technologies,
      budget,
      description,
      email,
    });
  } else {
    if (!budget) {
      budget = "Unknown";
    } else {
      budget = `$${budget}`;
    }

    Gig.sync({ alter: true })
      .then(() => {
        return Gig.create({
          title,
          technologies,
          description,
          budget,
          email,
        });
      })

      .then((gig) => {
        res.send(gig);
        console.log(gig.toJSON());
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;
