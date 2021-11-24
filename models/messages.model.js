const mongoose = require('mongoose');

const { Schema } = mongoose ;

const messagesSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    message:{
        type : String
    },
    isRead : {
        type: Boolean
    }
})

const Messages =   mongoose.model('Messages', messagesSchema);
module.exports = Messages;