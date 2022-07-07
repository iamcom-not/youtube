import express from "express";
import { watch, getEdit,postEdit, upload, deleteVideo, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

// 정규식 같은거 사용해서 숫자만 오게 해서 upload가 맨뒤에 와도 작동됨
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
// videoRouter.get("/:id(\\d+)/delete", deleteVideo);
// videoRouter.get("/upload", upload);


export default videoRouter;