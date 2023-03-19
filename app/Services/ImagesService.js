import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { imgApi } from "./AxiosService.js";

class ImagesService {

    async getImage() {
        const res = await imgApi.get('')
        console.log('[FOUND IMG]');
        appState.image = new Image(res.data)
    }
}

export const imagesService = new ImagesService()