import React, {useState} from 'react'
import {notify} from 'react-notify-toast';
import Image from "../Image/image.component";
import Form from "../Form/form.component";
import "./images.styles.scss"

export default function Images() {
    const [images, setImages] = useState([]);

    const addImage = (imageElement) => {
        const file = imageElement.files[0];
        if (!file) {
            notify.show('Please select a file', 'warning');
            return;
        }
        notify.show('Image uploaded successfully', 'success');
        let reader = new FileReader();

        reader.onloadend = function () {
            setImages([
                ...images,
                {
                    id: images.length + 1,
                    src: reader.result,
                    type: file.type,
                    size: file.size
                }
            ])
        };
        reader.readAsDataURL(file);
    }

    const removeImage = (img_id) => {
        if (!img_id) return
        setImages(images.filter(img => img.id !== img_id))
    }

    return (
        <div>
            <Form addImage={addImage}/>
            <div className="card-deck cards-container">
                {
                    images && images.map(img => <Image key={img.id} image={img} removeImage={removeImage}/>)
                }
            </div>
        </div>
    )
}
