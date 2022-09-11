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


// router.post('/',validate.varyToken, newsController.createNews) // add news
router.get('/', validate.varyToken, newsController.getAllNews) // get news
router.put('/:id', validate.varyToken, newsController.editNews) // edit news
router.delete('/publish/:id', validate.varyToken, newsController.publishNews) // publish
router.delete('/unpublish/:id', validate.varyToken, newsController.unPublishNews) // unpublish

/* router.post('/', upload.single('profile'), (req,res) => {
    console.log(req.file)
    console.log(req.body)
    console.log(req.file.filename)
    console.log(req.body.desc)
}) */
router.post('/', validate.varyToken,upload.single('file'), newsController.createNews)
module.exports = router