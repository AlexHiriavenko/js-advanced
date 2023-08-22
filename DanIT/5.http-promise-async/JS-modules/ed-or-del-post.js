import { formEditPost } from "./form-edit-post.js";
import { delPost } from "./delPost.js";

//функция - слушатель постов
export function editOrDelPost(event) {
    let target = event.target;
    // если нажать на корзинку - выполнить ф-цию удалить пост
    if (target.matches(".post-del") || target.matches(".btnDel")) {
        const postForDel = target.closest(".post");
        const postForDelId = postForDel.id;
        const quest = confirm("удалить пост?");
        quest ? delPost(postForDel, postForDelId) : alert("вы отменили удаление");
    }
    // если нажать на карандаш - выполнить ф-цию редактировать пост
    if (target.matches(".btnEdit") || target.matches(".post-edit")) {
        const postForEdit = target.closest(".post");
        const postForEditId = postForEdit.id;
        formEditPost(postForEdit, postForEditId);
    }
}
