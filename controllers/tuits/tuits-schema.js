import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    postedBy: {
        username: String
    },
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number
    },
    liked: Boolean,
    handle: String,
    "avatar-image": String
}, {collection: 'tuits'});
export default schema;