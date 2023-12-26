import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Join03 = () => {
    let params = useParams();

    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')
    const [userNick, setUserNick] = useState('')
    const [userPass, setUserPass] = useState('')
    const [userPassC, setUserPassC] = useState('')
    const [userPhone, setUserPhone] = useState('')

    return (
        <>
            <div id="join03__Wrap">
                <div className="join03__header">
                    <h1>회원가입</h1>
                    <p>회원가입 후 <span>에드플러스</span>를 마음껏 활용하세요!</p>
                </div>

                <div className="join03__main">
                    <div>
                        <label htmlFor="youName">이름</label>
                        <div>
                            <input
                                type="text"
                                placeholder='이름을 입력해주세요.'
                                value={username}
                                onChange={(e) => {
                                    setUsername(e);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youId">아이디</label>
                        <div className='button'>
                            <input
                                type="text"
                                placeholder='아이디를 입력해주세요.'
                                value={userId}
                                onChange={(e) => {
                                    setUserId(e);
                                }}
                            />
                            <button>중복검사</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youNick">닉네임</label>
                        <div className='button'>
                            <input
                                type="text"
                                placeholder='닉네임을 입력해주세요.'
                                value={userNick}
                                onChange={(e) => {
                                    setUserNick(e);
                                }}
                            />
                            <button>중복검사</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPass">비밀번호</label>
                        <div>
                            <input
                                type="password"
                                placeholder='비밀번호를 입력해주세요.'
                                value={userPass}
                                onChange={(e) => {
                                    setUserPass(e);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPassC">비밀번호 확인</label>
                        <div>
                            <input
                                type="password"
                                laceholder='비밀번호를 재입력해주세요.'
                                value={userPassC}
                                onChange={(e) => {
                                    setUserPassC(e);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPhone">전화번호</label>
                        <div>
                            <input
                                type="text"
                                placeholder='전화번호를 입력해주세요.'
                                value={userPhone}
                                onChange={(e) => {
                                    setUserPhone(e);
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="join03_button_box">
                    <a href="./join04" className='join__button'>계속(3/3)</a>
                    <div>
                        <div className="join03__right">
                            <ul>
                                <li>이미 계정이 있으신가요? <a href="/login">로그인</a></li>
                            </ul>
                        </div>
                        <div className="join03__left">
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

export default Join03