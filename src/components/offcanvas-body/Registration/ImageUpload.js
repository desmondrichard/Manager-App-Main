import React, { useEffect, useRef, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function ImageUpload({ isClearImage, onActivateProgressBar, dynamicImageName, showPutData, updateClicked, clearImageInPost }) { //isClearImage 1st comes with value false-no clear
    const inputRef = useRef(null);   //initialized with null for resetting purpose, and since formik is used we use useRef
    const [image, setImage] = useState("");
    //base 64:
    const [baseImage, setBaseImage] = useState("");

    function handleImageClick() {
        inputRef.current.click();
    }

    console.log("updateClickedChild", updateClicked)
    //Image without converting to Base64:  post
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        setImage(file);
        onActivateProgressBar(1);
        dynamicImageName(file);

    }

    // const handleImageChange = async (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();

    //     reader.onload = (event) => {
    //         const binaryString = event.target.result;
    //         const base64String = btoa(binaryString);
    //         setImage(file);
    //         setBaseImage(base64String);
    //         onActivateProgressBar(1);
    //         dynamicImageName(file);
    //     };

    //     reader.readAsBinaryString(file);
    // };

    // Helper function to get the URL from the image file
    const getImageUrl = (file) => {
        return URL.createObjectURL(file);
    };

    //get image url from backend for update request
    console.log("showPutDataImage", showPutData)
    //uncomment:
    const putImageUrl = showPutData.imageData;
    console.log("putImageUrl", putImageUrl)
    return (

        <>

            <label htmlFor='image-upload-input' className='image-upload-label h5 text-muted' style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
                {/* like placeholder: */}
                {baseImage ? (isClearImage ? "" : image.name) : "Upload .JPEG/.PNG"}
            </label>

            <div onClick={() => handleImageClick()}>
                {
                    !clearImageInPost ? (
                        //uncomment:
                        image ?
                            (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={URL.createObjectURL(image)}></Image>)
                            :
                            // (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={require('../../../assets/dummy_profile_img.png')}></Image>)
                            (updateClicked && putImageUrl ?
                                (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={`data:image/jpeg;base64,${putImageUrl}`}></Image>)
                                :
                                (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={require('../../../assets/dummy_profile_img.png')}></Image>)
                            )
                    ) : (

                        image && !isClearImage ?
                            (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={URL.createObjectURL(image)}></Image>)
                            :
                            (<Image style={{ width: '150px', height: '110px', border: '1px solid #DEE2E6', marginBottom: '9px', cursor: 'pointer' }} src={require('../../../assets/dummy_profile_img.png')}></Image>)
                    )
                }
                {/* {console.log("updateClicked:", !updateClicked, image, !isClearImage)} */}
                <input type="file" ref={inputRef} onChange={(e) => handleImageChange(e)} style={{ display: 'none' }} /><br />
                <Button variant="success" className='uploadImageBtn' style={{ whiteSpace: 'nowrap' }}>Select to Upload</Button>
            </div>

        </>
    )
}

export default ImageUpload