"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const router = express_1.default.Router();
router.route("/").post(blogController_1.createBlog).get(blogController_1.getBlogs);
router.route("/:id").get(blogController_1.getBlogById).put(blogController_1.updateBlog).delete(blogController_1.deleteBlog);
exports.default = router;
