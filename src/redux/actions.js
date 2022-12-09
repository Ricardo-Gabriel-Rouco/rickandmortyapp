import {ADD_FAVOURITE, DELETE_FAVOURITE} from './actions-types'

export function addFavorite(id){
    return {
    type: ADD_FAVOURITE,
    payload: id
    }
}

export function deleteFavorite(id){
    return {
    type: DELETE_FAVOURITE,
    payload: id}  
}

// module.exports = {
//     addFavorite,
//     deleteFavorite
// }