const service = require('../services/chatServices')

exports.sender = (req, res) => {

    try {
        service.sender(req.body, (error, result) => {
            if (error) {
                return res.status(500).json({ "message": "message not send", "error": error })
            }
            else {
                return res.status(200).json({ "message": "message send", "data": result })
            }
        })
    } catch (error) {

    }
}



exports.receiver = (req, res) => {

    try {
        service.receiver(req.body, (error, result) => {
            if (error) {
                return res.status(500).json({ "message": "message not received", "error": error })
            }
            else {
                return res.status(200).json({ "message": "message received", "data": result })
            }

        })
    } catch (error) {
    }

}


