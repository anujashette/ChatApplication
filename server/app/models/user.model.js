const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const newToken = require('../middleware/Token')
const sendMail = require('../middleware/NodeMailer')
const sendmail = new sendMail();

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmed: {
        type: Boolean,
        defaultValue: false
    },
},
    {
        timestamps: true
    },
);
var User = mongoose.model('user', UserSchema);
function userModel() {
}

//  Registration of User
userModel.prototype.registration = (userdata, callback) => {
    let token = ''
    User.find({ "email": userdata.email }, (error, data) => {
        if (error) {
            console.log('Error in registration process:', error)
            return callback(error)
        }
        else {
            if (data != '') {
                console.log('user exist')
                return callback('User with email id already exist...')
            }

            // User Registration model
            const user = new User({
                email: userdata.email || "Untitled email id",
                username: userdata.username,
                password: userdata.password,
                confirmed: false
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) callback(err)
                    user.password = hash;
                    // Save user req.body in the database
                    user.save((error, result) => {
                        if (error) {
                            return callback(error)
                        } else {
                            // console.log("save successfully data", user.id)
                            newToken.genToken(user, (error, emailtoken) => {
                                // console.log('email token',emailtoken.token)
                                const url = `http://localhost:5000/user/confirmed/${emailtoken.token}`
                                sendmail.mailer(url, user.email);
                            })
                            return callback(null, 'Your Account is created successfully.!!!')
                        }
                    })
                });
            });
        }
    })
};

//  User Login model
userModel.prototype.login = (userdata, callback) => {
    console.log('userData', userdata)

    User.findOne({ "email": userdata.email }, (error, data) => {
        if (error) {
            console.log('Error in registration process:', error)
            return callback(error)
        }
        else {
            if (!data) {
                return callback('user not exist')
            }
            else {
                // console.log('status',data.confirmed)

                if (data.confirmed) {
                    bcrypt.compare(userdata.password, data.password).then(isMatch => {
                        if (isMatch) {
                            // User matched
                            // Create JWT Payload

                            newToken.genToken(data, (error, token) => {

                                if (error) {
                                    return callback(error)
                                }
                                else {
                                    return callback(null, { 'token': token,
                                    'username': data.username,
                                    'email' : data.email,
                                    'status': 'login successfully'})
                                }
                            })
                        }
                        else {
                            return callback( 'Password is incorrect')
                        }
                    }).catch(err => {
                        console.log('Could not connect to the database. Exiting now...', err);
                        process.exit();
                    })
                }
                else {
                    return callback('Your email verifiation is not done')
                }

            }
        }
    })
}

//  Email verifaction
userModel.prototype.verify = (decoded, callback) => {
    // console.log(decoded.id)
    User.updateOne({ "_id": decoded.id }, { confirmed: true }, (error, data) => {
        if (error) return callback(error)
        // if(!data) return callback('Registration is not done.Please do it again')
        else return callback(null, data)
    })
}

//  Forget Password
userModel.prototype.forgetPass = (userdata, callback) => {
    console.log('model', userdata)
    User.findOne({ "email": userdata }, (error, data) => {
        if (error) {
            console.log('Error in registration process:', error)
            return callback(error)
        }
        else {
            if (!data) {
                console.log(data)
                return callback('user not exist')
            }
            else {
                if(data.confirmed){
                console.log("save successfully dataaaaaaaaaaaa", data.id)
                newToken.genToken(data, (error, emailtoken) => {
                    console.log('email tokennnnnnnnnnnnnnnnn', emailtoken.token)

                    const url = `http://localhost:3000/reset/${emailtoken.token}`
                    sendmail.mailer(url, data.email);
                })

                return callback(null, 'Your account is not exist')
            }else{
                callback(null,'Your account is not exist')
            }
        }
        }
    })
}

//  Reset Password
userModel.prototype.resetPass = (decoded, changedPass, callback) => {
    console.log(decoded.id)
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(changedPass, salt, (err, hash) => {
            if (err) callback(err)
            changedPass = hash;
            User.updateOne({ "_id": decoded.id }, { password:changedPass }, (error, data) => {
                if (error) return callback(error)
                if (!data) return callback('Registration is not done.Please do it again')
                else return callback(null, data)
            })
        })
    })
}
module.exports = userModel;
