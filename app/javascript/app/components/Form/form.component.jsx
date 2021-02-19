import React,{useRef} from 'react'
import "./form.styles.scss"

export default function Form({addImage}) {
    const imageInputElement = useRef('');

    const submitFormHandler = (e) => {
        e.preventDefault();
        const imageField = imageInputElement.current
        addImage(imageField);
        imageField.value = ''
    }

    return (
        <form onSubmit={submitFormHandler} className="image-upload-form">
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Image</label>
                <input type="file" className="form-control-file " ref={imageInputElement} />
            </div>

            <button type="submit" className="btn btn-primary">Upload</button>
        </form>
    )
}
