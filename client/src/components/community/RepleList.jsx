import React, { useState } from 'react'
import profile from '../../assets/img/default_profile.svg'
import comment from '../../assets/img/icon_comment.svg'
import heart from '../../assets/img/icon_heart.svg'
import time from '../../assets/img/icon_time.svg'
import siren from '../../assets/img/icon_siren.svg'

const RepleList = () => {

    const [active, setActive] = useState(false);
    const [report, setReport] = useState(false);

    const showbutton = () => {
        setActive(!active)
    }

    const CommReport = (e) => {
        e.preventDefault();

        setReport(!report)
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
                                <a href="/comm">목록</a>
                            </li>
                            <li className='modify'>
                                <a href="/">수정</a>
                            </li>
                        </ul>
                        <button
                            onClick={(e) => { CommReport(e) }}
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
        </>
    )
}

export default RepleList