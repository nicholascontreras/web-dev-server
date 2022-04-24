import userModel from "./user-model.js";

const findAllUsers = () => userModel.find();
const createUser = (user) => userModel.create(user);

export default {findAllUsers, createUser};