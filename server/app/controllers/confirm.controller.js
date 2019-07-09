// const config = require('../../config/database.config.js')
// const jwt = require('jsonwebtoken')
const usercrtV = require('../middleware/TokenVerify.js');
const services = require('../services/services')

exports.confimed = (req, res) => {
    usercrtV.verifytoken(req.params.token, (error, decoded) => {
        if (error) {
            res.status(401).send(error)
        }
        else {
            services.verify(decoded, (error, confirmation) => {
                console.log(confirmation)
                if (error) return res.status(401).send(error)
                return res.status(200).send('Email verification is done.');
            })
        }
    })
}

exports.forgetPass = (req, res) => {
    console.log('controller', req.body.email)
    services.forgetPass(req.body.email, (error, result) => {
        if (error) return res.status(400).send({ "message": error })
        else return res.status(200).send({ "message": result })
    })
}

exports.resetPass = (req, res) => {
    const userToken = req.headers['token'];
    usercrtV.verifytoken(userToken, (error, decoded) => {
        if (error) {
            res.status(401).send(error)
        }
        else {
            console.log('controller  decoded', decoded)

            services.resetPass(decoded, req.body.password, (error, confirmation) => {
                console.log(confirmation)
                if (error) return res.status(401).send(error)
                return res.status(200).send('Reset Password succefully.');
            })
        }
    })
}