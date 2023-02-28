const { loginController, singupController } = require('../controllers/auth');

const router = require('express').Router();

router.post("/login", loginController)
router.post("/singup", singupController)

module.exports = router;