const FacebookPost = require('../models/FacebookPost');

const getAllPosts = async (req, res, next) => {
  try {
    const allFbPosts = await FacebookPost.find();
    return res.status(200).json(allFbPosts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addNewPost = async (req, res, next) => {
  const postInfo = req.body;

  if (!postInfo.title || !postInfo.content) {
    return res.status(400).json('Invalid request!');
  }

  try {
    const newPost = {
      title: postInfo.title,
      content: postInfo.content,
      timeOfPost: new Date().getDate(),
    };

    await FacebookPost.create(newPost);
    return res.status(201).json('Post added!');
  } catch (error) {
    return res.status(500).json(error);
  }
};
const editPost = async (req, res, next) => {
  const postInfo = req.body;
  const id = req.params.id;

  if (!postInfo.title || !postInfo.content) {
    return res.status(400).json('Invalid request!');
  }

  try {
    const newPost = {
      title: postInfo.title,
      content: postInfo.content,
      timeOfPost: new Date().getDate(),
    };

    await FacebookPost.findByIdAndUpdate(id, newPost);
    return res.status(200).json('Post edited!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePost = async (req, res, next) => {
  const id = req.params.id;

  try {
    await FacebookPost.findByIdAndDelete(id);
    return res.status(200).json('Post deleted!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllPosts,
  addNewPost,
  editPost,
  deletePost,
};
