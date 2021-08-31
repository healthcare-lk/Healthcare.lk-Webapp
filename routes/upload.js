const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


//upload an image only admin can use

router.post('/upload', auth , authAdmin, (req, res) =>{
    
    try {
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length === 0)
        return res.status(400).send({msg: 'No files were uploaded.'})

        const file = req.files.file;
        if(file.size > 1024*1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "Size too large"})
        } 
        

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "File format is incorrect."})
        }
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

//delete image
router.post('/destroy',auth , authAdmin, (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})

    } catch (err) {
        return res.status(500).json({msg: err.message})
        
    }
     
     
})



const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
module.exports = router


