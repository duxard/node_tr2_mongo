const mongoose = require('mongoose');
//DB blueprint
const instagramPostsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    altname: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true
    }
});

const InstagramPosts = mongoose.model("InstagramPosts", instagramPostsSchema);

module.exports = InstagramPosts;
