import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";

import userController from "./controllers/users/user-controller.js";
import commentController from "./controllers/comments/comment-controller.js";

mongoose.connect("mongodb+srv://webdev:webdev@webdev.1dana.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const app = express();
app.use(cors());
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "shhh, dont tell anyone"
}));

userController(app);
commentController(app);

app.listen(process.env.PORT || 4000);