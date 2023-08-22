import { urlPosts } from "./variables.js";

//функция - удалить пост
export async function delPost(postForDel, postID) {
    const response = await fetch(urlPosts + postID, {
        method: "DELETE",
    });
    if (response.ok) {
        postForDel.remove();
        setTimeout(() => alert("подтверждено сервером, пост удален"), 200);
    } else {
        alert("извините удалить невозможно, сервер не отвечает");
    }
}
