const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const UserScheme = mongoose.Schema(
    {
        name:{
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false
        },
        role: {
            type: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true, //TODO createdAt, udatedAt
        versionKey: false
    }
)

UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('users', UserScheme);