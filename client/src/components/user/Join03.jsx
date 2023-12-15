import React from 'react'

const Join03 = () => {
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
                            <input type="text" placeholder='이름을 입력해주세요.' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youId">아이디</label>
                        <div className='button'>
                            <input type="text" placeholder='이메일을 입력해주세요.' />
                            <button>중복검사</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youNick">닉네임</label>
                        <div className='button'>
                            <input type="text" placeholder='닉네임을 입력해주세요.' />
                            <button>중복검사</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPass">비밀번호</label>
                        <div>
                            <input type="password" placeholder='비밀번호를 입력해주세요.' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPassC">비밀번호 확인</label>
                        <div>
                            <input type="password" placeholder='비밀번호를 재입력해주세요.' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPhone">전화번호</label>
                        <div>
                            <input type="text" placeholder='전화번호를 입력해주세요.' />
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