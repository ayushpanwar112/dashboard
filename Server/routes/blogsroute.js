import express from "express";
import blogController from "../controller/blogController.js";
import getController from "../controller/getController.js";
import reviewController from "../controller/reviewControllers.js";
import axios from "axios";
import wordpressController from "../controller/wordpressController.js";
import getReview from "../controller/getReview.js";



const blogRoute = express.Router();

blogRoute.post("/fetch-blogs", blogController);
blogRoute.get("/blogs", getController);
 blogRoute.get("/fetch-reviews",reviewController);
 blogRoute.get("/review",getReview);
 
 blogRoute.get("/fetch",wordpressController)

/*  blogRoute.post("/post", async (req, res) => {
    try {
      const response = await axios.get("http://localhost:7000/api/posts");
      const data = response.data;
  
      const newBlog = new Blog({
        kind: data.kind,
        postId: data._id,
        blogId: data.blog?.id || "",
        published: new Date(data.published),
        updated: new Date(data.updated),
        url: data.url,
        title: data.title,
        content: data.content,
        author: data.author,
        keywords: data.labels || [],
        description: data.content.substring(0, 150), // Short description from content
        imageUrl: data.thumbnail || "", // Thumbnail if exists
        replies: data.replies || { totalItems: 0, selfLink: "" },
        etag: data.etag,
      });
  
      await newBlog.save();
      res.status(200).json({ message: "Data saved to a different database!", newBlog });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  }); */

export default blogRoute;
