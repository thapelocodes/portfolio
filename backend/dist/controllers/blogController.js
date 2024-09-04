"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlogById = exports.getBlogs = exports.createBlog = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
// Create a new blog post
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    try {
        const newBlog = new Blog_1.default({ title, content });
        const savedBlog = yield newBlog.save();
        res.status(201).json(savedBlog);
    }
    catch (err) {
        res
            .status(400)
            .json({ message: `Failed to create blog post: ${JSON.stringify(err)}` });
    }
});
exports.createBlog = createBlog;
// Get all blog posts
const getBlogs = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield Blog_1.default.find();
        res.status(200).json(blogs);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Failed to fetch blog posts: ${JSON.stringify(err)}` });
    }
});
exports.getBlogs = getBlogs;
// Get a single blog post
const getBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield Blog_1.default.findById(req.params.id);
        if (blog)
            res.status(200).json(blog);
        else
            res.status(404).json({ message: "Blog not found" });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Failed to fetch blog post: ${JSON.stringify(err)}` });
    }
});
exports.getBlogById = getBlogById;
// Update a blog post
const updateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlog = yield Blog_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (updatedBlog)
            res.status(201).json(updatedBlog);
        else
            res.status(404).json;
    }
    catch (err) {
        res
            .status(400)
            .json({ message: `Failed to update blog post: ${JSON.stringify(err)}` });
    }
});
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBlog = yield Blog_1.default.findByIdAndDelete(req.params.id);
        if (deletedBlog)
            res.status(200).json({ message: "Blog deleted" });
        else
            res.status(404).json({ message: "Blog not found" });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Failed to delete blog post: ${JSON.stringify(err)}` });
    }
});
exports.deleteBlog = deleteBlog;
