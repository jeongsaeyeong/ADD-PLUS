import React, { useState } from 'react'
import profile from '../../assets/img/default_profile.svg'
import comment from '../../assets/img/icon_comment.svg'
import heart from '../../assets/img/icon_heart.svg'
import time from '../../assets/img/icon_time.svg'
import siren from '../../assets/img/icon_siren.svg'

const RepleList = () => {
    const [active, setActive] = useState(false);
    const [none, setNone] = useState('none');

    const showbutton = () => {
        setActive(!active)
    }

    return (
        <>
            <div className="comment__Wrap">
                <div className="comment__header">
                    <div className='info'>
                        <img src={comment} alt="comment" />
                        <p>87</p>
                        <img src={heart} alt="heart" />
                        <p>41</p>
                    </div>
                    <div className="button">
                        <ul>
                            <li className='list'>
                                <a href="/comm ">목록</a>
                            </li>
                            <li className='modify'>
                                <a href="/commmodify">수정</a>
                            </li>
                        </ul>
                        <button
                            onClick={() => { setNone('show') }}
                        >신고하기</button>
                    </div>
                </div>
                <div className="comment__body">
                    <div className="top">
                        <div className='profile__box'>
                            <img src={profile} alt="profile" />
                            <p>익명</p>
                        </div>
                        <div className="box" onClick={showbutton}>
                            <div className="button">
                                <div className={`last_box ${active ? '' : 'none'}`}>
                                    <button
                                        className={`report ${active ? '' : 'none'}`}
                                        onClick={() => setNone('block')}
                                    >
                                        <img src={siren} alt="siren" />신고</button>
                                    <button className={`delete ${active ? '' : 'none'}`}>삭제하기</button>
                                    <button className={`modify ${active ? '' : 'none'}`}>수정하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p className='text'>
                            뭔 쌉소리임;; 집에 가서 발닦고 잠이나 자라
                        </p>
                        <div>
                            <img src={time} alt="time" />
                            <p>2023.12.13 16:54:12</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={none === 'none' ? 'report__Wrap none' : "report__Wrap"}>
                <div className="report">
                    <div className="header">
                        <h2>신고하기</h2>
                        <p><span>*</span>허위신고일 경우, 신고자의 서비스 활동이 제한될 수 있으니 신중하게 신고해주세요.</p>
                    </div>
                    <div className="box">
                        <h3>신고사유</h3>
                        <div>
                            <input type="checkbox" />
                            <p>광고/음란성 댓글</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>욕설/반말/부적절한 언어</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>회원 분란 유도</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>회원 비방</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>지나친 정치/종교 논쟁</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>도배성 댓글</p>
                        </div>
                    </div>
                    <div className="button">
                        <ul>
                            <li onClick={() => { setNone('none') }}>취소</li>
                        </ul>
                        <button>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RepleList