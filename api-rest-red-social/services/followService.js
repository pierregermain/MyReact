const Follow = require("../models/followModel")

const followUserIds = async (userId) => {


  // Usuarios que sigue userId
  let following = await Follow.find({ "user": userId })
    .select({ "_id": 0, "__v": 0, "user": 0, "created_at": 0 })
    .exec();

  // Usuarios que siguen a userId
  let followers = await Follow.find({ "followed": userId })
    .select({"user": 1, "_id": 0})
    .exec();


  // Convertir los objetos a arrays

  let followingClean = [];
  following.forEach(follow => {
    followingClean.push(follow.followed);
  });

  let followersClean = [];
  followers.forEach(follow => {
    followersClean.push(follow.user);
  })

  return {
    following: followingClean,
    followers: followersClean
  }

}

const followsThisUser = async (identityUserId, profileUserId) => {

}

module.exports = {
  followUserIds,
  followsThisUser
}