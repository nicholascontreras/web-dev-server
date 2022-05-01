import CommentDao from "./comment-dao.js";
import UserDao from "../users/user-dao.js";

const createNewComment = async (req, res) => {
    const createdId = (await CommentDao.createComment(req.body))["_id"];
    const newComment = await CommentDao.getCommentById(createdId).populate("user", "username");
    res.json(newComment);
};

const getCommentsForBlueprint = async (req, res) => {
    const comments = await CommentDao.getCommentsOnBlueprint(req.params["blueprintKey"]).populate("user", "username");
    res.json(comments);
};

const getCommentsForUser = async (req, res) => {
    const comments = await CommentDao.getCommentsByUser(req.params["user"]).populate("user", "username");
    res.json(comments);
};

export default (app) => {
    app.post("/api/comments/", createNewComment);
    app.get("/api/comments/:blueprintKey", getCommentsForBlueprint);
    app.get("/api/comments/user/:user", getCommentsForUser);
}