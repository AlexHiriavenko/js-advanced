import { apiKey } from "./unsplashAPI.js";

export const urlRundom30Imgs = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30&orientation=landscape`;
export const urlBasicSearch = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&per_page=30&orientation=landscape`;
