import React,{ useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'


export default function ImageDetails({ image }) {
    const { dispatch } = useContext(ImageContext)
    return (
        <div className = 'image-container'>
            <div className = 'image'>
                <img src = {image.imgUrl} alt = 'gallery pic'/>
            </div>
            <div className = 'image-btns'>
                <button onClick = {() => dispatch({type:'REMOVE_IMAGE', id: image.id})}>
                    Delete Image
                </button>
            </div>
        </div>
    )
}
