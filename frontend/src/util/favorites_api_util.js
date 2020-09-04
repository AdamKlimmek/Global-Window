import axios from 'axios';

export const fetchPhotoFavorites = id => (
    axios.get(`/api/photos/${id}/favorites`)
);

export const fetchUserFaves = id => (
    axios.get(`/api/users/${id}/favoritePhotos`)
);

export const makeFavorite = favoriteData => (
    axios.post('/api/favorites/', favoriteData)
);

export const unFavorite = favoriteData => {
    console.log('hitting unfave utils')
    return axios.delete('/api/favorites/', favoriteData)
};