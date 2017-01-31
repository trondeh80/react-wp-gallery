export const GET_IMAGES = 'GET_IMAGES' ;
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS' ;
export const VIEW_IMAGE = 'VIEW_IMAGE' ;

export function getImages(){
    return {
        type: GET_IMAGES,
    }
}

export function getImagesSuccess(json){
    return {
        type: GET_IMAGES_SUCCESS,
        images: json // Todo: be sure to check that this is correct
    }
}