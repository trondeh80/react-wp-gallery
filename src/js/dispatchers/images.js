import * as actions from '../actions' ;

export const requestImages = () => {
    return (dispatch) => {
        dispatch(actions.getImages());

        return new Promise((resolve) => {

            // Fails because CORS!
            // fetch('http://www.eventyrhytta.no/wp-json/wp/v2/media').then(data => (data.json())).then(data => {
            //     console.log(data) ;
            //     debugger;
            // }).catch(error => {
            //     console.log('error', error) ;
            // }) ;

            setTimeout(() => {
                resolve([{
                    id: 1,
                    thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016978-175x175.jpg',
                    full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016978.jpg'
                }, {
                    id: 2,
                    thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016947-175x175.jpg',
                    full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016947.jpg'
                }]);
            }, 2000);
        }).then((data)=> {
            dispatch(actions.getImagesSuccess(data));
        });
    }
};