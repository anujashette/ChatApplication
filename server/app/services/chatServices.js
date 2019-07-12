const chat = require('../models/chat.model')
const chatmodel = new chat()

    exports.sender = (chatdata, callback) => {
        console.log("service", chatdata)
        try {
            chatmodel.sender(chatdata, (error, result) => {
                console.log("service", chatdata)
                if (error) {
                    console.log('service error')
                    callback(error)
                }
                else {
                    console.log('service executed', result)
                    callback(null, result)
                }
            })
        }
        catch (error) {
            callback.send(error)
        }
    }

    exports.receiver = (chatdata, callback) => {
        console.log("service", chatdata)
        try {
            chatmodel.receiver(chatdata, (error, result) => {
                console.log("service", chatdata)
                if (error) {
                    console.log('service error')
                    callback(error)
                }
                else {
                    console.log('service executed', result)
                    callback(null, result)
                }
            })
        }
        catch (error) {
            callback.send(error)
        }
    }



