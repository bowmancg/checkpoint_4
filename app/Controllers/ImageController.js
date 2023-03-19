import { appState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawImage() {
    let img = appState.image
    document.body.style.backgroundImage = `url(${img.imgUrl})`
}

export class ImageController {
    constructor() {
        console.log('construct');
        this.getImage()
        appState.on('image', _drawImage)
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            Pop.error(error)
        }
    }
}