import React from 'react'
import CommSide from './CommSide'

const CommWrite = () => {
    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
                <div className="comm__write">
                    <div className="wirte__header">
                        <h2>커뮤니티 글 작성</h2>
                    </div>
                    <div className="write__box">
                        <div className="cate">
                            <select name="category" id="cate">
                                <option value="일반게시판">일반게시판</option>
                                <option value="입시결과게시판">입시결과 게시판</option>
                                <option value="대학생게시판">대학생 게시판</option>
                                <option value="수험생게시판">수험생 게시판</option>
                                <option value="홍보게시판">홍보 게시판</option>
                                <option value="학부모게시판">학부모 게시판</option>
                                <option value="교사게시판">교사 게시판</option>
                                <option value="정보게시판">정보 게시판</option>
                            </select>
                            {/* <img src={arrow} alt="arrow" className='img' /> */}
                        </div>
                        <div className="input">
                            <label htmlFor="title"></label>
                            <input type="text" placeholder='제목을 입력하세요' className='title' />
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
                            ></textarea>
                            <input type="file" className='file' />
                        </div>
                        <div className='button'>
                            <ul>
                                <li><a href="/comm">취소</a></li>
                            </ul>
                            <button>등록</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommWrite