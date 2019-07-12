const Validator = require("validator");
const service = require("../services/UserServices")

// Create and Save a new Note
exports.login = (req, res) => {

    try {
        var error = ""
        // Validate request
        if (!req.body.email) {
            error = " email can not be empty"
        }
        if (!Validator.isEmail(req.body.email)) {
            error = "email is invalid"
        }
        if (!req.body.password) {
            error = " password can not be empty"
        }

        // Check if error occure in user input
        if (error) {
            return res.status(500).send({
                message: error || "Some error occurred in login process."
            
            });
        }
        else {
            service.login(req.body, (error, result) => {
                console.log('inside controller')
                console.log("login", req.body)
                if (error) {
                    console.log('errror',error)
                    return res.status(500).json({
                        message: error || "Some error occurred while login."
                    });
                }
                else {
                    return res.status(200).json(result);
                }
            })
        }
    }
    catch (error) {
    }
}