import { urlPosts } from "./variables.js";

export async function changePostOnServer(...args) {
    const [contentInput, titleInput, contentPost, titlePost, form, postForEditId] = args;
    const response = await fetch(urlPosts + postForEditId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: titleInput.value,
            body: contentInput.value,
        }),
    });
    if (response.ok) {
        titlePost.textContent = await titleInput.value;
        contentPost.textContent = await contentInput.value;
        await form.remove();
    } else {
        alert("извините редактирование недоступно, сервер не отвечает");
    }
}
