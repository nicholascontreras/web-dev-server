import UserDao from "./user-dao.js";

const createUser = async (req, res) => {
    if (await UserDao.getUserByUsername(req.body["username"])) {
        res.json({"error": "That username is already in use. Please choose a different username."});
    } else {
        const createdUser = await UserDao.createUser(req.body);
        req.session["current_user"] = createdUser;
        res.json(createdUser);
    }
}

const loginUser = async (req, res) => {
    const username_match = await UserDao.getUserByUsername(req.body["username"]);
    if (username_match && username_match["password"] === req.body["password"]) {
        req.session["current_user"] = username_match;
        res.json(username_match);
    } else {
        res.json({"error": "No account found for the given username and password."});
    }
}

const logoutUser = async (req, res) => {
    req.session.destroy();
    res.end();
}

const getUserProfile = async (req, res) => {
    const userIdMatch = await UserDao.getUserById(req.params["userId"]);
    if (userIdMatch) {
        res.json(userIdMatch);
    } else {
        res.json({"error": "No account found for the given id."});
    }
}

const followUser = async (req, res) => {
    await UserDao.addUserToFollow(req.params["follower"], req.params["following"]);
    res.end();
}

const unfollowUser = async (req, res) => {
    await UserDao.removeUserToFollow(req.params["follower"], req.params["following"]);
    res.end();
}

export default (app) => {
    app.post("/api/users/register", createUser);
    app.post("/api/users/login", loginUser);
    app.post("/api/users/logout", logoutUser);
    app.get("/api/users/profile/:userId", getUserProfile);
    app.get("/api/users/follow/:follower/:following", followUser);
    app.get("/api/users/unfollow/:follower/:following", unfollowUser);
}