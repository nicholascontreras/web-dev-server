import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

import userController from "./controllers/users/user-controller.js";

mongoose.connect('mongodb+srv://webdev:webdev@webdev.1dana.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());

userController(app);

app.listen(process.env.PORT || 4000);