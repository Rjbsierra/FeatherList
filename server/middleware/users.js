const fs = require('fs');
const multer = require('multer');
const path = require('path');

    const upload = multer({
        storage : multer.memoryStorage(),
        limits: {
            fileSize: 1024 * 1024 * 2,
          },
        fileFilter: (req, file, cb) => {
            if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
              return cb(new MulterError("LIMIT_INVALID_TYPE"));
            }
        
            return cb(null, true);
          }
    })

    
module.exports = {upload}
