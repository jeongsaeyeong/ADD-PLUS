import React from 'react'

const Join04 = () => {
    return (
        <>
            <div id="join04__Wrap">
                <div className="join04__header">
                    <div>
                        <div></div>
                    </div>
                    <h1>회원가입 완료</h1>
                    <p><span>정유진</span>님, 가입을 축하합니다.<br />
                        로그인 후 에드플러스를 마음껏 활용하세요!</p>
                </div>
                <div className="join04_button_box">
                    <a href="./login" className='join__button'>로그인 하러가기</a>
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
        </>
    )
}

export default Join04