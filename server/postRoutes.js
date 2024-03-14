const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.post('/add', addPost);

router.get('/', allPosts);

router.put('/update/:id', updatePost);

router.delete('/dlt/:id', deletePost)

const posts = [
    {
        id: "john_doe-flowers-0",
        author: "john_doe",
        url: "https://colesclassroom.com/wp-content/uploads/2020/03/white-and-red-cherry-blossom-flowers-3979186.jpg",
        title: "Flowers",
        description: "This is the some random image taken from the goolge images",
    },
]

async function updatePost(req, res) {
    const { id } = req.params;
    const { author, url, title, description } = req.body;

    const postIndex = posts.findIndex(post => post.id == id);
    if (postIndex === -1) {
        res.status(404).json({ error: "Post not found" });
        return
    }
    if (author) {
        posts[postIndex].author = author;
    }
    if (url) {
        posts[postIndex].url = url;
    }
    if (title) {
        posts[postIndex].title = title;
    }
    if (description) {
        posts[postIndex].description = description;
    }

    return res.json({ message: "Post updated successfully", updatedPost: posts[postIndex] });
}

async function deletePost(req, res) {
    const { id } = req.params;
    console.log(req.params)
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    else {
        posts.pop(postIndex)
        res
            .status(200)
            .json({ operation: "success" })
    }

}


async function addPost(req, res) {
    try {
        const { author, url, title, description } = req.body;

        if (((author === undefined) && (url === undefined) && (title === undefined) && (description == undefined))) {
            res
                .status(402)
                .json({ error: "invalid details" })
            return
        }

        posts.push({ author, url, title, description, id: author + "-" + title + "-" + posts.length })

        res
            .status(200)
            .json({ author, post_status: "success" })
        console.log(posts)
    }

    catch (err) {
        res
            .status(500)
            .send(err)
    }
}

async function allPosts(req, res) {
    res.status(200)
    res.json(posts)
}

module.exports = router;