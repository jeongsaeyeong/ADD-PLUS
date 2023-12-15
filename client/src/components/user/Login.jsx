import React from 'react'

const Login = () => {
    return (
        <>
            <div id="login__Wrap">
                <div className="login__header">
                    <h1>로그인</h1>
                    <p>로그인 후 <span>에드플러스</span>를 마음껏 활용하세요!</p>
                </div>
                <div className="login__main">
                    <div className="login__input_box">
                        <div>
                            <label htmlFor="youId">아이디</label>
                            <input type="text" placeholder='이메일을 입력해주세요.' />
                        </div>
                        <div>
                            <label htmlFor="youPass">비밀번호</label>
                            <input type="password" placeholder='비밀번호를 입력해주세요.' />
                        </div>
                    </div>
                    <div className="login_button_box">
                        <a href="./login" className='login__button'>로그인</a>
                        <div>
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
                <div className="login__under">
                    <div className='first'>
                        <p>애드플러스가 처음이신가요?</p>
                        <a href="/join01">가입하기</a>
                    </div>
                    <div className="author">
                        <p>또는 SNS로 시작하기</p>
                        <div className='google'></div>
                        <div className='kakao'></div>
                        <div className='naver'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login