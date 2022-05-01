import userModel from "./user-model.js";

const findAllUsers = () => userModel.find();
const getUserByUsername = (username) => userModel.findOne({"username": username});
const getUserById = (id) => userModel.findById(id);
const createUser = (user) => userModel.create(user);
const addUserToFollow = (followerId, followingId) =>
    userModel.findByIdAndUpdate(followerId, {$push: {"following": followingId}});
const removeUserToFollow = (followerId, followingId) =>
    userModel.findByIdAndUpdate(followerId, {$pullAll: {"following": [followingId]}});

export default {findAllUsers, getUserByUsername, getUserById, createUser, addUserToFollow, removeUserToFollow};