import React, { createContext, useReducer } from 'react';
import { imageReducer } from '../reducers/imageReducer';

export const ImageContext = createContext()

function ImageContextProvider(props) {
    const [images, dispatch] = useReducer(imageReducer, [])
    return (
        <ImageContext.Provider value = {{images, dispatch}}>
            { props.children }
        </ImageContext.Provider>
    )
}

export default ImageContextProvider
