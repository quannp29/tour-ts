import express, { Router } from "express";
const router: Router = express.Router();
import multer from "multer";
import { uploadSingle } from "../../middlewares/admin/uploadCloud.middleware";

import * as controller from "../../controllers/admin/upload.controller";
const upload = multer();

router.post("/", upload.single("file"), uploadSingle, controller.upload);

export const uploadRoutes: Router = router;