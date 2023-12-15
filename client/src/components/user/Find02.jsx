import React from 'react'

const Find02 = () => {
    return (
        <>
            <div id="find02__Wrap">
                <div className="find02__header">
                    <div>
                        <div></div>
                    </div>
                    <h1>비밀번호 찾기 완료</h1>
                    <p><span>정유진</span>님의 비밀번호는 <span>w****38!!</span> 입니다.<br />
                        로그인 후 에드플러스를 마음껏 활용하세요!</p>
                </div>
                <div className="find02_button_box">
                    <a href="./login" className='find__button'>로그인 하러가기</a>
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

export default Find02