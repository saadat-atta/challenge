import React from 'react'
import "./image.styles.scss"

export default function Image({image, removeImage}) {
    const {id, src, type, size} = image;

    return (
        <div className="card image-card">
            <span className="close" onClick={() => removeImage(id)}></span>
            <img className="card-img-top" src={src} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Mime Type: {type}</h5>
                <p className="card-text">Size: {size} bytes</p>
            </div>
        </div>
    )
}
