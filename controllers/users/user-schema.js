import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    following: {type: [mongoose.Schema.Types.ObjectId], ref: "UserModel", required: true}
}, {collection: 'users'});
export default schema;