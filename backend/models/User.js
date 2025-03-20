const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email:{type: String, require: true, unique: true},
    password:{type: String, require: true}
})
module.export = mongoose.model('User', userSchema);
