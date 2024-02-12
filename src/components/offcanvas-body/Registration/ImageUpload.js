import React, { useRef, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function ImageUpload({ isClearImage, onActivateProgressBar, dynamicImageName }) { //isClearImage 1st comes with value false-no clear
    const inputRef = useRef(null);   //initialized with null for resetting purpose, and since formik is used we use useRef
    const [image, setImage] = useState("");


    function handleImageClick() {
        inputRef.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        console.log(file);
        setImage(e.target.files[0]);//used to set img present in target.files[0]
        onActivateProgressBar(1); //sets value to 1 from 0 if image is uploaded
        console.log("after file", file)
    }

    return (
        // 
        <>
            {/* {console.log("dynamicImageName", dynamicImageName)} */}
            <label htmlFor='image-upload-input' className='image-upload-label h5 text-muted' style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
                {/* like placeholder: */}
                {image ? image.name : "Upload JPG/PNG"}
            </label>

            <div onClick={() => handleImageClick()}>
                {
                    image && !isClearImage ?
                        (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={URL.createObjectURL(image)}></Image>)
                        :
                        (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={require('../../../assets/dummy_profile_img.png')}></Image>)
                }

                <input type="file" ref={inputRef} onChange={(e) => handleImageChange(e)} style={{ display: 'none' }} name='dynamicImageName' /><br />
                <Button variant="success" className='uploadImageBtn' style={{ whiteSpace: 'nowrap' }}>Select to Upload</Button>
            </div>
        </>
    )
}

export default ImageUpload