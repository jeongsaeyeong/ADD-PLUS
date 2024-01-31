import React, { useState } from 'react'
import comment from '../../../assets/img/icon_comment.svg'
import heart from '../../../assets/img/icon_heart.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CommReport from './CommReport';
import { useSelector } from 'react-redux';

const CommButton = (props) => {
    const user = useSelector((state) => state.user)

    let params = useParams();
    let navigate = useNavigate();
    const [none, setNone] = useState(false);

    const handleNoneChange = (newNone) => {
        setNone(newNone);
    };

    const DeleteHandler = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            let body = {
                postNum: params.postNum,
                uid: user.uid
            }
            axios
                .post('/api/post/delete', body)
                .then((res) => {
                    if (res.data.success) {
                        alert('게시글이 삭제되었습니다.')
                        navigate('/comm')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('게시글 삭제가 실패했습니다.')
                })
        }
    }

    return (
        <>
            <div className="comment__header">
                <div className='info'>
                    <img src={comment} alt="comment" />
                    <p>{props.postInfo.repleNum}</p>
                    <img src={heart} alt="heart" />
                    <p>{props.postInfo.likeNum}</p>
                </div>
                <div className="button">
                    <ul>
                        <li className='list'>
                            <a href="/comm ">목록</a>
                        </li>
                        <li className='modify'>
                            <Link to={`/commmodify/${params.postNum}`}>수정</Link>
                        </li>
                    </ul>
                    <button
                        className='delete'
                        onClick={(e) => DeleteHandler(e)}
                    >삭제</button>
                    <button
                        onClick={() => { setNone(!(none)) }}
                    >신고</button>
                </div>
            </div>
            <CommReport none={none} onNoneChange={handleNoneChange} />
        </>
    )
}

export default CommButton