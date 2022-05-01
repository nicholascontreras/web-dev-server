import commentModel from "./comment-model.js";

const findAllComments = () => commentModel.find();
const getCommentById = (id) => commentModel.findById(id);
const getCommentsOnBlueprint = (blueprintKey) => commentModel.find({blueprintKey: blueprintKey});
const getCommentsByUser = (user) => commentModel.find({user: user});
const createComment = (comment) => commentModel.create(comment);

export default {findAllComments, getCommentById, getCommentsOnBlueprint, getCommentsByUser, createComment};