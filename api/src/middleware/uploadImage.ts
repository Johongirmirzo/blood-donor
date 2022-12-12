import multer from "multer"
import {v4 as uuidv4} from "uuid";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/images"));
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4() + "-" + file.originalname);
    },
  });
  
export const uploadImage = multer({storage: storage, limits: {fileSize: 1000000}})
