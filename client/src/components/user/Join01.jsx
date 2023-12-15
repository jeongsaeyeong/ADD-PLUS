import React from 'react'

const Join01 = () => {
    return (
        <>
            <div id="join01__Wrap">
                <div className="join01__header">
                    <h1>회원가입</h1>
                    <p><span>직업/신분</span>을 선택해주세요!</p>
                </div>
                <div className="join01__main">
                    <div className="join01__card">
                        <h3>수험생</h3>
                        <div className='card card__01'></div>
                    </div>
                    <div className="join01__card ">
                        <h3>대학생</h3>
                        <div className='card card__02'></div>
                    </div>
                    <div className="join01__card ">
                        <h3>선생님</h3>
                        <div className='card card__03'></div>
                    </div>
                    <div className="join01__card ">
                        <h3>학부모</h3>
                        <div className='card card__04'></div>
                    </div>
                </div>
                <div className="join01_button_box">
                    <a href="./join02" className='join__button'>계속(1/3)</a>
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