import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CommImg from './CommImg';

const CommWrite = ({ setCate }) => {
    const [selectCate, setSeletCate] = useState('일반게시판')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState("");
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    const cateChange = (e) => {
        const selectValue = e.target.value;
        setSeletCate(selectValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (title === "" || content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            cate: selectCate,
            title: title,
            content: content,
            uid: user.uid,
            img: image
        }

        axios.post("/api/post/write", body)
            .then((res) => {
                if (res.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/comm");
                } else {
                    alert("글 작성이 실패하였습니다.");
                }
            })
    }

    return (
        <>
            <div className="comm__Wrap">
                <div className="comm__write">
                    <div className="wirte__header">
                        <h2>커뮤니티 글 작성</h2>
                    </div>
                    <div className="write__box">
                        <div className="cate">
                            <select name="category" id="cate" value={selectCate} onChange={cateChange}>
                                <option value="일반게시판">일반게시판</option>
                                <option value="입시결과게시판">입시결과 게시판</option>
                                <option value="대학생게시판">대학생 게시판</option>
                                <option value="수험생게시판">수험생 게시판</option>
                                <option value="홍보게시판">홍보 게시판</option>
                                <option value="학부모게시판">학부모 게시판</option>
                                <option value="교사게시판">교사 게시판</option>
                                <option value="정보게시판">정보 게시판</option>
                            </select>
                        </div>
                        <div className="input">
                            <label htmlFor="title"></label>
                            <input
                                type="text"
                                placeholder='제목을 입력하세요'
                                className='title'
                                value={title}
                                onChange={(e) => setTitle(e.currentTarget.value)}
                            />
                            <label htmlFor="content"></label>
                            <textarea
                                placeholder='쾌적한 ADD 커뮤니티 사용을 위해 아래 규칙을 지켜주세요.

                                1. 존중과 예의
                                모든 회원은 서로를 존중하고 예의를 갖춰야 합니다.
                                타 회원에 대한 비방, 모욕, 욕설은 삼가주세요.

                                2. 컨텐츠의 적절한 주제 유지
                                게시글 및 댓글은 각 게시판과 관련된 주제에 초점을 맞춰야 합니다.
                                타 주제에 대한 게시물은 적절한 곳에 작성해 주세요.

                                3. 욕설 및 비속어 금지
                                욕설, 비속어, 혐오적인 표현은 삼가해 주세요.
                                다양한 의견을 존중하며 토론하세요.'
                                value={content}
                                onChange={(e) => setContent(e.currentTarget.value)}
                            ></textarea>
                            <CommImg setImage={setImage} />
                        </div>
                        <div className='button'>
                            <ul>
                                <li><a href="/comm">취소</a></li>
                            </ul>
                            <button
                                onClick={(e) => { onSubmit(e) }}
                            >등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommWrite