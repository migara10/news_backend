const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')
const validate = require('../middlewares/validateUser')
const path = require('path')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    // dest:'./upload/images'
    storage: storage
})


router.post('/', validate.varyToken,upload.single('file'), newsController.createNews) // add news
router.get('/', validate.varyToken,  newsController.getAllNews) // get news
router.get('/headline',  newsController.getAllNewsHeadlings) // get news headlings
router.get('/:value',  newsController.getAllNewsByCategory) // get news by category
router.put('/:id', validate.varyToken, newsController.editNews) // edit news
router.delete('/publish/:id', validate.varyToken, newsController.publishNews) // publish
router.delete('/unpublish/:id', validate.varyToken, newsController.unPublishNews) // unpublish

module.exports = router