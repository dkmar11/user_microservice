const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userSchema = require('./schemasMongo/schemaUser');
const SetUserDB = require('./setUsersDB');

dotenv.config();
//class to save a user to mongoDB
class SetUserMongo extends SetUserDB {
    constructor(){
        super();
        //connect to mongoDB
        mongoose.connect('mongodb://root:4ppdbm0ng0@127.0.0.1:27017/appdb', {
            authSource: 'admin',
            useNewUrlParser: true
        });
    }

    //method to save a user to mongoDB
    async set(user){
        const newUser = mongoose.model('users', userSchema);
        await new newUser({
            name:user.name,
            lastName:user.lastName,
            ci:user.ci,
            email:user.email,
            direction:user.direction,
            zone:user.zone,
            number:user.number
        }).save();   
    }
    //method to disconnect from mongoDB
    async disconnect(){
        await mongoose.disconnect();
    }
}

module.exports = SetUserMongo;
