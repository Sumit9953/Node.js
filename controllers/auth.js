 const singupController = async(req,res) => {
    console.log('singupController called');
    res.send('singup')
 }
 const loginController = async(req,res) => {
    console.log('loginController called');
    res.send('login')
 }

 module.exports = {
    singupController,
    loginController
 }