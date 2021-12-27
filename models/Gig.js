const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false //dont know meaning. solution here https://stackoverflow.com/questions/20386402/sequelize-unknown-column-createdat-in-field-list
});

module.exports = Gig;
