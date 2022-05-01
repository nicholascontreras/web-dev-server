import mongoose from 'mongoose';
const schema = mongoose.Schema({
    blueprintKey: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true},
    text: {type: String, required: true}
}, {collection: 'comments'});
export default schema;