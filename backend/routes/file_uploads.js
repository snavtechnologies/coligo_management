const express = require("express");
const multer = require('multer');

const router = express.Router();
const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "application/pdf": "pdf"
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    // cb(error, "backend/angular/assets/kyc_images");
       cb(error, "backend/images");
    // cb(error, "images");

  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
router.post("", multer({ storage: storage }).single('image'), (req, res, next) => {
  console.log("success");
  console.log(req.body);
  // console.log(req.file);
  res.status(201).json({
    message: "added"
  });

});
module.exports = router;
