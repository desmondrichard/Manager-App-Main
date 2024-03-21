import React, { useRef, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function ImageUpload({ isClearImage, onActivateProgressBar, dynamicImageName }) { //isClearImage 1st comes with value false-no clear
    const inputRef = useRef(null);   //initialized with null for resetting purpose, and since formik is used we use useRef
    const [image, setImage] = useState("");
    //base 64:
    const [baseImage, setBaseImage] = useState("");

    function handleImageClick() {
        inputRef.current.click();
    }

    //Image without converting to Base64:
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setImage(file);
        onActivateProgressBar(1);
        dynamicImageName(file);
    }


    return (
        // 
        <>

            <label htmlFor='image-upload-input' className='image-upload-label h5 text-muted' style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
                {/* like placeholder: */}
                {baseImage ? (isClearImage ? "" : image.name) : "Upload .JPEG/.PNG"}
            </label>

            <div onClick={() => handleImageClick()}>
                {
                    image && !isClearImage ?
                        (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={URL.createObjectURL(image)}></Image>)
                        :
                        (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={require('../../../assets/dummy_profile_img.png')}></Image>)
                }

                <input type="file" ref={inputRef} onChange={(e) => handleImageChange(e)} style={{ display: 'none' }} /><br />
                <Button variant="success" className='uploadImageBtn' style={{ whiteSpace: 'nowrap' }}>Select to Upload</Button>
            </div>

        </>
    )
}

export default ImageUpload