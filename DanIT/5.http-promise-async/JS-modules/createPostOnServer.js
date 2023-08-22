import { urlPosts, urlUsers, pathCreatePostImg, header } from "./variables.js";
import { createMarkup } from "./createMarkup.js";
import { editOrDelPost } from "./ed-or-del-post.js";

export async function createPostOnServer(idNewPost, titleInput, contentInput, form) {
    const newPostForServer = {
        id: idNewPost,
        body: contentInput.value,
        title: titleInput.value,
        userId: 5,
    };
    const response = await fetch(urlPosts, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPostForServer),
    });
    if (response.ok) {
        fetch(urlUsers)
            .then((users) => users.json())
            .then((users) => users.find(({ id }) => id === newPostForServer.userId))
            .then(({ name, email, id }) => {
                const newPost = document.createElement("div");
                newPost.className = "post";
                newPost.id = idNewPost;
                newPost.innerHTML = createMarkup(
                    newPostForServer.title,
                    newPostForServer.body,
                    name,
                    email,
                    id,
                    pathCreatePostImg
                );
                form.remove();
                header.after(newPost);
                return newPost;
            })
            .then((newPost) => newPost.addEventListener("click", editOrDelPost));
    } else {
        alert("не возможно создать пост");
    }
}
