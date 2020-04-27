import uuid from 'uuid/v1'

export const imageReducer = (state, action) => {
    switch(action.type){
        case 'ADD_IMAGE':
            return [...state, {
                imgUrl: action.image,
                id:uuid()
            }]
        case 'REMOVE_IMAGE':
            return state.filter( image => image.id !== action.id )
        default:
            return state;
    }
}