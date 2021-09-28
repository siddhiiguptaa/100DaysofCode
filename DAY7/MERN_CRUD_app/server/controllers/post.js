const Post = require('../models/post')
const slugify = require('slugify')

exports.create = (req, res) => {
    const { title, content, user } = req.body; //req.params
        const slug = slugify(title);
        // validate
        switch (true) {
            case !title:
                return res.status(400).json({ error: 'Title is required' });
                break;
            case !content:
                return res.status(400).json({ error: 'Content is required' });
                break;
        }
        // create post
        Post.create({ title, content, user, slug }, (err, post) => {
            if (err) {
                console.log(err);
                res.status(400).json({ error: 'Duplicate post. Try another title' });
            }
            res.json(post);
        });
}

exports.list = function (req, res) {
    Post
        .find({})
        .limit(10) //limits the posts to a certain number
        .sort({createdAt: -1}) //for the posts to come in ascending order by time created
        .exec(function (err, posts) {
            if(err) return console.error(err)
            res.json(posts)
        })

    }
exports.read = function (req, res) {
    const { slug } = req.params
    
    Post
        .findOne({slug: slug})
        .exec(function (err, posts) {
            if(err) return console.error(err)
            res.json(posts)
        })
    }