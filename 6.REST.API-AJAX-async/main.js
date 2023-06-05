// 1й вариант
const btnIP = document.querySelector(".btn-ip");
const textShowIP = document.querySelector(".ip");
const textShowLocation = document.querySelector(".location");

const ipify = "https://api.ipify.org/?format=json";
const ipApi = "http://ip-api.com/json/";
const neededFields = ["continent", "country", "regionName", "city", "district", "lat", "lon"];
const generateUrl = (ip) => `${ipApi}${ip}?fields=${neededFields.join(",")}&lang=en`;

btnIP.addEventListener("click", LocationDefine);

async function LocationDefine() {
    try {
        btnIP.disabled = true;
        btnIP.style.backgroundColor = "grey";
        render(textShowIP, "please wait");
        render(textShowLocation, "please wait");

        const ip = await ipDefine();
        render(textShowIP, ip);
        const location = await getResponse(generateUrl(ip));
        render(textShowLocation, location);

        btnIP.style.backgroundColor = "#4f5af4";
    } catch (error) {
        render(textShowLocation, "Error: " + error.message);
    } finally {
        btnIP.disabled = false;
    }
}

const getResponse = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
const ipDefine = async () => {
    const response = await getResponse(ipify);
    return response.ip;
};

function render(domElement, value) {
    if (typeof value === "string") {
        return (domElement.textContent = value);
    }
    if (typeof value === "object") {
        const ul = document.createElement("ul");
        const listContent = Object.entries(value);
        for (let [key, value] of listContent) {
            const li = document.createElement("li");
            !value ? (value = "no data") : value;
            li.textContent = key + ": " + value;
            ul.append(li);
        }
        domElement.textContent = "data loaded:";
        domElement.append(ul);
        return ul;
    }
}


// 2й вариант. Работает лучше потому что он использует другой сервер и позволяет делать запрос с SSL/https
// сервер https://get.geojs.io/ . Если задеплоить 1й вариант - будет работать только на локальном сервере
// иначе будет ошибка запроса из за политики безопасности
// в ридМи есть ссылка - можно протестить что 2й вариант работает 

// const btnIP = document.querySelector(".btn-ip");
// const textShowIP = document.querySelector(".ip");
// const textShowLocation = document.querySelector(".location");

// const ipify = "https://api.ipify.org/?format=json";
// const geojsIO = "https://get.geojs.io/v1/ip/geo/";
// const generateUrl2 = (ip) => `${geojsIO}${ip}.json`


// btnIP.addEventListener("click", LocationDefine);

// async function LocationDefine() {
//     try {
//         btnIP.disabled = true;
//         btnIP.style.backgroundColor = "grey";
//         render(textShowIP, "please wait");
//         render(textShowLocation, "please wait");

//         const ip = await ipDefine();
//         render(textShowIP, ip);
//         const location = await getResponse(generateUrl2(ip));
//         render(textShowLocation, location);

//         btnIP.style.backgroundColor = "#4f5af4";
//         btnIP.disabled = false;
//     } catch (error) {
//         console.error(error);
//         render(textShowIP, "Error: failed to get IP address");
//         render(textShowLocation, "Error: failed to get location data");
//     }
// }


// const getResponse = async (url) => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//         throw new Error("Failed to get response from server");
//     }
// };


// const ipDefine = async () => {
//     try {
//         const response = await getResponse(ipify);
//         if (response?.ip) {
//             return response.ip;
//         }
//         throw new Error("IP address not found");
//     } catch (error) {
//         console.error("Error getting IP address", error);
//         render(textShowIP, "Error getting IP address");
//         throw error;
//     }
// };


// function render(domElement, value) {
//     if (typeof value === "string") {
//         return (domElement.textContent = value);
//     }
//     if (typeof value === "object") {
//         const ul = document.createElement("ul");
//         const listContent = Object.entries(value);
//         for (let [key, value] of listContent) {
//             const filter = ["continent_code", "country", "region", "city", "latitude", "longitude"]
//             if (filter.includes(key)) {
//                 const li = document.createElement("li");
//                 !value ? (value = "no data") : value;
//                 li.textContent = key + ": " + value;
//                 ul.append(li);
//             }
//         }
//         domElement.textContent = "data loaded:";
//         domElement.append(ul);
//         return ul;
//     }
// }