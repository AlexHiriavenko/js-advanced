import { apiKey } from "./unsplashAPI.js";

async function getImgs(basicURL, options) {
    try {
        const url = options ? basicURL + options : basicURL;
        const response = await fetch(url);

        if (response.status === 401 || response.status === 403) {
            alert("превышен лимит запросов на сервер, попробуйте позже");
            throw new Error("превышен лимит запросов на сервер");
        }

        if (!response.ok) {
            throw new Error(`Ошибка запроса, status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
}

export default getImgs;

export async function getImgPathByID(id) {
    try {
        const url = `https://api.unsplash.com/photos/${id}/?client_id=${apiKey}`;
        const response = await fetch(url);

        if (response.status === 401 || response.status === 403) {
            alert("превышен лимит запросов на сервер, попробуйте позже");
            throw new Error("превышен лимит запросов на сервер");
        }

        if (!response.ok) {
            throw new Error(`Ошибка запроса, status: ${response.status}`);
        }

        const { urls } = await response.json();
        return urls.regular;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
}
