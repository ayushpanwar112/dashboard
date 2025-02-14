import express from "express";
import blogController from "../controller/blogController.js";
import getController from "../controller/getController.js";
import reviewController from "../controller/reviewControllers.js";



const blogRoute = express.Router();

blogRoute.post("/fetch-blogs", blogController);
blogRoute.get("/blogs", getController);
 blogRoute.get("/fetch-reviews",reviewController);

export default blogRoute;
