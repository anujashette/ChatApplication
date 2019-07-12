module.exports = (app) => {
    const usercrtR = require('../controllers/registeration.controller.js');
    const usercrtL = require('../controllers/login.controller.js');
    const confirm = require('../controllers/confirm.controller');
    const cahtCrt = require('../controllers/chat.controller')

    //    @route    post api/ auth
    //    @desc     register user
    //    @access   public

    // Create a new user
    app.post('/user/registration', usercrtR.registration);

    // User login 
    app.post('/user/login', usercrtL.login);

    //token verification
    // app.post('/', usercrtV.verifytoken)

    // Email verification
    app.get('/user/confirmed/:token', confirm.confimed)

    // Forget Password
    app.post('/user/forgetpass/', confirm.forgetPass)
    // Reset password
    app.post('/user/resetpass/', confirm.resetPass)

    app.post('/chat/sender',cahtCrt.sender)

    app.post('/chat/receiver',cahtCrt.receiver)

}