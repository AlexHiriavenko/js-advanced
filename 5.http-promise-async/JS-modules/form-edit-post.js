import { changePostOnServer } from "./changePostOnServer.js";

// функция = редактировать пост
export function formEditPost(postForEdit, postForEditId) {
    const form = document.createElement("form");
    form.id = "change-form";

    const titleLabel = document.createElement("label");
    titleLabel.for = "change-title";
    titleLabel.textContent = "Change Title:";
    form.appendChild(titleLabel);

    const titleInput = document.createElement("textarea");
    titleInput.id = "change-title";
    titleInput.name = "change-title";
    const titlePost = postForEdit.querySelector("h3");
    titleInput.value = titlePost.textContent;
    form.appendChild(titleInput);

    const contentLabel = document.createElement("label");
    contentLabel.for = "change-content";
    contentLabel.textContent = "Change Content:";
    form.appendChild(contentLabel);

    const contentInput = document.createElement("textarea");
    contentInput.id = "change-content";
    contentInput.name = "change-content";
    const contentPost = postForEdit.querySelector("p");
    contentInput.value = contentPost.textContent;
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
        changePostOnServer(contentInput, titleInput, contentPost, titlePost, form, postForEditId);
    });
}
