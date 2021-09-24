import axios from './axios';



export const getLiked = () => {
    return axios.get('/tinder/likes');
}

export const postLiked = (likeItem) => {
    return axios.post('/tinder/likes', likeItem).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    })
}

export const deleteLiked = (name) => {
    return axios.delete('/tinder/likes', {params: {name:name}}).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
}