const {Schema, model} = require("mongoose");

const FollowSchema = Schema({
  user: {
    type: Schema.ObjectID,
    ref: "User"
  },
  followed: {
    type: Schema.ObjectID,
    ref: "User"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = model("Follow", FollowSchema, "follows");