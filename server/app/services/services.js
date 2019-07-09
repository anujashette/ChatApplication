const Model = require('../models/user.model')
const usermodel = new Model()

//  Registration service
exports.registration = (userdata, callback) => {
    console.log("service", userdata)
    try {
        usermodel.registration(userdata, (error, result) => {
            console.log("service", userdata)
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

//  Login service
exports.login = (userdata, callback) => {
    try {
        usermodel.login(userdata, (error, result) => {
            console.log("service", userdata)
            if (error) {
                console.log('service error')
                callback(error)
            }
            else {
                console.log('service executed', result)
                callback(null, result)
            }
        })
    } catch (error) {
        callback.send(error)
    }
}

//  Mail verification service
exports.verify = (decoded, callback) => {
    usermodel.verify(decoded, (error, confirmation) => {
        if (error) return callback(error)
        callback(null, confirmation)
    })
}

//  Forget service
exports.forgetPass = (userdata, callback) => {
    console.log('service', userdata)
    usermodel.forgetPass(userdata, (error, result) => {
        if (error) return callback(error)
        callback(null, result)
    })
}

//  Reset service
exports.resetPass = (decoded, changedPass, callback) => {
    console.log('service', decoded)
    usermodel.resetPass(decoded, changedPass, (error, confirmation) => {
        if (error) return callback(error)
        callback(null, confirmation)
    })
}
