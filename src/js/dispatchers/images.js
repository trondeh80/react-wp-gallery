import * as actions from '../actions' ;

export const requestImages = () => {
    return (dispatch) => {
        dispatch(actions.getImages());

        return new Promise((resolve) => {

            // Fails because CORS!
            // return fetch('http://www.eventyrhytta.no/wp-json/wp/v2/media').then(data => (data.json())).then(data => {
            //     console.log(data) ;
            //     debugger;
            // }).catch(error => {
            //     console.log('error', error) ;
            // }) ;

            resolve([{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016978-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016978.jpg'
            }, {
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016947-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016947.jpg'
            }, {
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016886-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016886.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016965-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016965.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016966-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016966.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016968-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016968.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016981-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016981.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016991-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016991.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016993-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016993.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016994-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016994.jpg'
            },{
                thumbnail: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016996-175x175.jpg',
                full: 'http://www.eventyrhytta.no/wp-content/uploads/2014/01/A1016996.jpg'
            },
            ].map((image, index)=>  {
                image.id = index;
                return image;
            }));
        }).then((data)=> {
            dispatch(actions.getImagesSuccess(data));
        });
    }
};