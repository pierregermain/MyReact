const {Schema, model} = require("mongoose");

// En la tabla Follow, el campo *user* es el ID del usuario que sigue al usuario *followed*.
const FollowSchema = Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User"
  },
  followed: {
    type: Schema.ObjectId,
    ref: "User"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("Follow", FollowSchema, "follows");