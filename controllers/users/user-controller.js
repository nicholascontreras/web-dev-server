import UserDao from "./user-dao.js";

const createUser = async (req, res) => {
    const newUser = req.body;
    const createdUser = await UserDao.createUser(newUser);
    res.json(createdUser);
}

export default (app) => {
    app.post('/api/users/register', createUser);
}