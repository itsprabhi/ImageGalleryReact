import React, { useContext,useState } from 'react'
import { ImageContext } from '../contexts/ImageContext'

export default function ImageForm() {
    const { dispatch } = useContext(ImageContext)
    const [url,setUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_IMAGE', image: url})
        setUrl('')
    }
    return (
        <div className = 'gallery-form'>
            <form onSubmit = {handleSubmit}> 
                <input className = 'gallery-txt' type = 'text' placeholder = 'enter image url' 
                value = {url} onChange = {(e) => setUrl(e.target.value)} required/> <br />
                <input className = 'submit' type = 'submit' value = 'Add Image'></input>
            </form>
        </div>
    )
}
