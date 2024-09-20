const fs = require('fs');
const multer = require('multer');




    const storage = multer.diskStorage({
        destination: (req, file, cb) =>{
            const uploadDir = './uploads';

            if(!fs.existsSync(uploadDir)){
                fs.mkdirSync(uploadDir);
            }

            cb(null, uploadDir);
        },
        filename: (req, file, cb)=>{
            cb(null, file.originalname);
        }
    })

    const upload = multer({storage : storage})

    
module.exports = {upload}
