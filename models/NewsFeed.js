const mongoose = require('mongoose');
//DB blueprint
const newsSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const NewsFeed = mongoose.model("NewsFeed", newsSchema);

module.exports = NewsFeed;
