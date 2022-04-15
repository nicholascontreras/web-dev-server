import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/users/user-controller.js";
import tuitsController from "./controllers/tuits/tuits-controller.js";

mongoose.connect('mongodb+srv://webdev:webdev@webdev.1dana.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);