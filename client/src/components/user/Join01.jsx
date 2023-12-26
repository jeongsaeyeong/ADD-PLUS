import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Join01 = () => {
    const [jobcate, setJobcate] = useState('')

    return (
        <>
            <div id="join01__Wrap">
                <div className="join01__header">
                    <h1>회원가입</h1>
                    <p><span>직업/신분</span>을 선택해주세요!</p>
                </div>
                <div className="join01__main">
                    <div className={`join01__card ${jobcate === '수험생' ? 'active' : ''}`}>
                        <h3>수험생</h3>
                        <div
                            className='card card__01'
                            onClick={() => { setJobcate('수험생'); }}
                        ></div>
                    </div>
                    <div className={`join01__card ${jobcate === '대학생' ? 'active' : ''}`}>
                        <h3>대학생</h3>
                        <div className='card card__02'
                            onClick={() => { setJobcate('대학생') }}
                        ></div>
                    </div>
                    <div className={`join01__card ${jobcate === '선생님' ? 'active' : ''}`}>
                        <h3>선생님</h3>
                        <div className='card card__03'
                            onClick={() => { setJobcate('선생님') }}
                        ></div>
                    </div>
                    <div className={`join01__card ${jobcate === '학부모' ? 'active' : ''}`}>
                        <h3>학부모</h3>
                        <div className='card card__04'
                            onClick={() => { setJobcate('학부모') }}
                        ></div>
                    </div>
                </div>
                <div className="join01_button_box">
                    <Link to={`/join02/${jobcate}`} className='join__button'>계속(1/3)</Link>
                    <div>
                        <div className="join01__right">
                            <ul>
                                <li>이미 계정이 있으신가요? <a href="/login">로그인</a></li>
                            </ul>
                        </div>
                        <div className="join01__left">
                            <ul>
                                <li>
                                    <a href="/">아이디 찾기</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="/find">비밀번호 찾기</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join01