import * as keyDown from "./modules/search/keyDown.js";
import * as userOptions from "./modules/search/options.js";
import getImgs from "./modules/fetch.js";
import { urlRundom30Imgs } from "./modules/urls.js";
import { imgsGallery, searchBtn } from "./modules/varablesDOM.js";
import renderImgsList from "./modules/renderImgsList.js";
import handleSearch from "./modules/search/handleSearch.js";

let data = await getImgs(urlRundom30Imgs);

renderImgsList(data, imgsGallery);

searchBtn.addEventListener("click", handleSearch);
