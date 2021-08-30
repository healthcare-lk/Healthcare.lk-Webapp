const router = require('express').Router()

router.route('/category')
    .get(categoryCtrl.getCategories)

module.exports = router   