import React, { useContext } from 'react'
import{ ImageContext } from '../contexts/ImageContext'
import ImageForm from './ImageForm'

export default function Navbar() {
    const { images } = useContext(ImageContext)
    return (
        <nav>
            <div className = 'navbar'>
                <div>
                    <h1>
                        Image Gallery
                    </h1>
                    <p>You have {images.length} images </p>
                </div>
            </div>
            <ImageForm />
        </nav>
    )
}
