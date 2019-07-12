const mongoose = require('mongoose');
var date =new Date()
var time = date.getHours() +':'+ date.getMinutes();
var day = date.getDay() +'/'+ date.getMonth()+'/'+date.getFullYear();

const UserSchema = mongoose.Schema({
    sender: {
        type: String,
        require: true,
    },
    receiver: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    time : {
         type : String, 
         default:time
    },
    day:{
        type:String,
        default:day
    }

});

var Chat = mongoose.model('Chat', UserSchema);

function chatModel(){

}

chatModel.prototype.sender=(chatdata,callback)=>{
    console.log('chat model')

    try{

        const chat = new Chat({
            sender : chatdata.sender,
            receiver : chatdata.receiver,
            message : chatdata.message
        });

        chat.save((error,result)=>{
            console.log('chat model',chatdata)

            if(error){
                callback(error)
            }else{
                callback(null,result)
            }
        })
    }catch(error){

    }
}

chatModel.prototype.receiver=(chatdata,callback)=>{
    console.log('chat model')

    try{

        Chat.find({},(error,data)=>{
            if(error){
                callback(error)
            }else{
                callback(null,data)
            }
        })
    }catch(error){

    }
}

module.exports=chatModel