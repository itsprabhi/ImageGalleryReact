import React,{ useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'
import ImageDetails from '../components/ImageDetails'

export default function ImageList() {
    const { images } = useContext(ImageContext)
    return !images.length ? (
        <div>
            <div className = 'empty'>
                <h2>We dont have any image. Lets add!</h2>
            </div>
        </div>
    ) : (
        <div>
            <div className = 'image-list'>
                <div className = 'image-grid'>
                    {images.map(image => {
                        return (
                            <ImageDetails image = {image} key = {image.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
