import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    password: String
})

const UserInstance = mongoose.model('User', userSchema);

export default UserInstance;