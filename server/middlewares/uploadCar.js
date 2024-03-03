require("dotenv").config()
const multer = require("multer")
const multerS3 = require("multer-s3")
const AWS = require("aws-sdk")

const imageFilter = require("../helper/filterImage")

const { USER_ACCESS_KEY_ID, USER_SECRET_ACCESS_KEY } = process.env;

const s3 = new AWS.S3({
    accessKeyId: USER_ACCESS_KEY_ID,
    secretAccessKey: USER_SECRET_ACCESS_KEY,
    region: "ap-southeast-1",
});

//Storage
const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: "rentalcarsbayu/cars",
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + "-" + file.originalname);
        },
    }),
    fileFilter: imageFilter,
});

module.exports = uploadS3;
