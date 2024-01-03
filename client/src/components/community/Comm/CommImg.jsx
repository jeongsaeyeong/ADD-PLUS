import axios from 'axios';
import React from 'react'

const CommImg = (props) => {

    const FileUpload = (e) => {
        const formData = new FormData();
        formData.append("file", (e.target.files[0]));

        axios
            .post("/api/post/image/upload", formData)
            .then((response) => {
                console.log(response);
                props.setImage(response.data.filePath);
            })
    }

    return (
        <>
            <input
                type="file"
                className='file'
                accept='image/*'
                onChange={(e) => FileUpload(e)}
            />
        </>
    )
}

export default CommImg