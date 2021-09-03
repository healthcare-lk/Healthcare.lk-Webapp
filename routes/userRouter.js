const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken) 

//get with params

router.get('/infor', auth, userCtrl.getUser )

router.put('/addcart', auth, userCtrl.addCart)

router.get('/history', auth, userCtrl.history)

router.put('/update', auth, userCtrl.updateUser)

//Social Logins
//router.post('/google_login', userCtrl.googleLogin)





module.exports = router