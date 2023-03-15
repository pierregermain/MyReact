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

const followsThisUser = async (userId, profileId) => {

  // userId sigue a profileId
  let following = await Follow.findOne({ "user": userId, "followed": profileId });

  // profileId sigue a userId
  let follower = await Follow.findOne({ "user": profileId, "followed": userId });

    return {
      userIsFollowing: following,
      profileIsFollowing: follower
    }


}

module.exports = {
  followUserIds,
  followsThisUser
}