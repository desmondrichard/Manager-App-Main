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

    const handleImageChange = async (e) => {
        const file = e.target.files[0];//setted file path like target
        setImage(file);//used to set img present in target.files[0]
        const base64 = await convertBase64(file) //converting to base64
        const base64WithoutPrefix = base64.split(',')[1]; //To remove prefix data:image/jpeg;base64, from url.since we in GET method we defaultly added data:image/*;base64, in parent else this line is no needed:
        setBaseImage(base64WithoutPrefix);//setting here
        console.log(file);
        onActivateProgressBar(1); //sets value to 1 from 0 if image is uploaded
        console.log("after file", base64WithoutPrefix)
        dynamicImageName(base64WithoutPrefix); //passing the base64 string to another component for displaying it as a preview


    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }




    return (
        // 
        <>

            <label htmlFor='image-upload-input' className='image-upload-label h5 text-muted' style={{ fontWeight: '400', whiteSpace: 'nowrap' }}>
                {/* like placeholder: */}
                {baseImage ? image.name : "Upload JPG/PNG"}
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