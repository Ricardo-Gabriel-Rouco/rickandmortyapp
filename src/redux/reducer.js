const {ADD_FAVOURITE, DELETE_FAVOURITE} = require('./actions-types')

const initialState = {
    myFavorites: [],
}

function rootReducer (state = initialState, { type , payload}){
    switch (type) {
        case ADD_FAVOURITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        
        case DELETE_FAVOURITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(e => e.id !== payload)
            }
    
        default:
            return state
    }
}

export default rootReducer