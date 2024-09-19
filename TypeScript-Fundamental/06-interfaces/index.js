"use strict";
// ----------
// interfaces
// ----------
const authorOne = { name: "mastoora", avatar: "/img/mastoora.png" };
const newPost = {
    title: "My first post",
    body: "something interesting",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
// --------------------------
// as function argument types
// --------------------------
function createPost(post) {
    console.log(`created post${post.title} by ${post.author.name}`);
}
createPost(newPost);
// ------------
// with arrays
// ------------
let posts = [];
posts.push(newPost);
