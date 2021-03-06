const mongoose = require('mongoose');
//DB blueprint
const projectsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    authorFirstName: {
      type: String,
      required: true
    },
    authorLastName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    }
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = Projects;
