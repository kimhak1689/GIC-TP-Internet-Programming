const express = require('express')
const router = express.Router();
const joiValidation = require('../middlewares/joiValidation');
const { signInSchema, signUpSchema } = require('../schemas');
const { login } = require('../services/login')
const { register } = require('../services/register');
const userService = require('../services/user');
const { logout } = require('../services/logout');
const auth = require('../middlewares/auth');
const { getUser } = require('../services/user')


router.get('/me', auth.ensureSignedIn, auth.currentUser, async function (req, res, next) {
    const { currentUser } = req;
    const result = await userService.findById(currentUser?._id);
    res.json(result);
})

router.post('/logout', auth.ensureSignedIn, async (req, res) => {
    const result = logout(req.session);
    return res.json(result);
})

router.post('/login', auth.ensureSignedOut, joiValidation(signInSchema), async (req, res, next) => {
    const { email, password } = req.body;
    const result = await login(email, password);
    req.session.jwt = result?.data?.token

    res.json(result);
})

router.post('/register', auth.ensureSignedOut, joiValidation(signUpSchema), async (req, res, next) => {
    const createdUser = await register(req.body)
    res.json(createdUser);
})

//get user by id
router.get('/user/:id', auth.ensureSignedIn, async function (req, res, next) {
    var userId = req.path.split("/user/")[1]
    result = await getUser(userId)
    return res.json(result)
})

router.get('/findall', auth.ensureSignedIn, async function (req, res, next) {
    const result = await userService.findall();
    return res.json(result)
})
router.post('/update-password', auth.currentUser, async function (req, res, next) {
    const email = req.currentUser.email
    const param = JSON.parse(req.body);
    const newPassword = param
    const result = await userService.updatePass(newPassword, email)
    return res.json(result)
})
router.post('/update-user', auth.currentUser, async function (req, res) {
    const email = req.currentUser.email
    const param = JSON.parse(req.body);
    const newInfo = param
    const result = await userService.updateUser(newInfo, email)
    return res.json(result)
})
router.post('/delete-user', auth.currentUser, async function (req, res) {
    const email = req.currentUser.email
    const result = await userService.deleteUser(email);
    if (result.success) {
        logout(req.session);
        res.clearCookie('token')
    }
    return res.json(result)
})



module.exports = router;