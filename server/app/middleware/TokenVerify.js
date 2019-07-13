const config = require('../../config/database.config.js')
const jwt = require('jsonwebtoken')

// FORMAT OF TOKEN
// token - Bearer <access-token>
exports.verifytoken = (userToken, callback) => {

    // const userToken = req.headers['token'];  used for post
    // CHECK IF USERTOKEN IS UNDEFINED
    if (!userToken) {
        return callback({ 'message': 'No token is provided' })
    }
    else {
        jwt.verify(userToken, config.jwtsecret, (err, decoded) => {
            // console.log(decoded.id)
            if (err) callback(err)
            callback(null, decoded)
        });
    }
}
