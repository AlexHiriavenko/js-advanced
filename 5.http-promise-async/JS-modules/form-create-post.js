import { urlPosts } from "./variables.js";
import { createPostOnServer } from "./createPostOnServer.js";

export async function formCreatePost() {
    const checkLoad = document.querySelector(".post");
    if (!checkLoad) {
        alert("подождите несколько секунд");
    } else {
        const response = await fetch(urlPosts);
        const posts = await response.json();
        const idNewPost = await (posts.length + 1);
        createForm(idNewPost);

        function createForm(idNewPost) {
            const form = document.createElement("form");
            form.id = "form-create-post";

            const info = document.createElement("h3");
            info.style.color = "green";
            info.textContent = "New post for User with ID #5";
            form.append(info);
            const titleLabel = document.createElement("label");
            titleLabel.for = "title";
            titleLabel.textContent = "Title:";
            form.appendChild(titleLabel);

            const titleInput = document.createElement("textarea");
            titleInput.id = "new-post-title";
            titleInput.name = "new-post-title";
            titleInput.placeholder = "enter title text";
            form.appendChild(titleInput);

            const contentLabel = document.createElement("label");
            contentLabel.for = "new-post-content";
            contentLabel.textContent = "Content:";
            form.appendChild(contentLabel);

            const contentInput = document.createElement("textarea");
            contentInput.id = "new-post-content";
            contentInput.name = "new-post-content";
            contentInput.placeholder = "enter content text";
            form.appendChild(contentInput);

            const confirmInput = document.createElement("input");
            confirmInput.type = "submit";
            confirmInput.value = "Confirm";
            form.appendChild(confirmInput);

            const cancel = document.createElement("button");
            cancel.textContent = "Cancel";
            cancel.className = "cancel";
            confirmInput.after(cancel);

            document.body.appendChild(form);

            cancel.addEventListener("click", () => form.remove());

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                createPostOnServer(idNewPost, titleInput, contentInput, form);
            });
        }
    }
}
