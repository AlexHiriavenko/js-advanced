import { urlUsers, urlPosts, pathImgs, header, btnNewPost } from "./JS-modules/variables.js";
import { createMarkup } from "./JS-modules/createMarkup.js";
import { formCreatePost } from "./JS-modules/form-create-post.js";
import { editOrDelPost } from "./JS-modules/ed-or-del-post.js";

btnNewPost.addEventListener("click", formCreatePost);

class Cards {
    async getParsData(url1, url2) {
        const res = await Promise.all([fetch(url1), fetch(url2)]);
        const parsed = await Promise.all(res.map((promise) => promise.json()));
        return parsed;
    }

    render(promises) {
        const [users, posts] = promises;
        const markup = users
            .flatMap((obj) => {
                const { id: mainID, name, email } = obj;
                return posts
                    .filter((post) => post.userId === mainID)
                    .map(({ title, body, id: postID }) => {
                        const div = document.createElement("div");
                        div.classList.add("post");
                        div.id = postID;
                        div.innerHTML = createMarkup(title, body, name, email, mainID, pathImgs);
                        return div;
                    });
            })
            .sort((cur, next) => next.id - cur.id);
        header.after(...markup);
        return markup;
    }

    listenerForPosts() {
        const allPosts = document.querySelectorAll(".post");
        allPosts.forEach((post) => {
            post.addEventListener("click", editOrDelPost);
        });
    }
}

const cards = new Cards();

cards
    .getParsData(urlUsers, urlPosts)
    .then((promises) => cards.render(promises))
    .then((markup) => cards.listenerForPosts(markup));
