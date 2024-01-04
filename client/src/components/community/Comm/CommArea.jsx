import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommDetail from './CommDetail';

const CommArea = () => {
    const [postInfo, setPostInfo] = useState({});
    const [flag, setFlag] = useState(false);

    let params = useParams();

    useEffect(() => {
        let body = {
            postNum: params.postNum
        }

        axios.post('/api/post/detail', body)
            .then((res) => {
                setPostInfo(res.data.post);
                setFlag(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.postNum]);

    return (
        <>
            {flag ? (
                <>
                    <CommDetail postInfo={postInfo} postNum={params.postNum} />
                </>
            ) : (
                <div>
                    로딩중이지롱
                </div>
            )}
        </>
    )
}

export default CommArea