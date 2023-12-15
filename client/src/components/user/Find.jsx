import React from 'react'

const Find = () => {
    return (
        <>
            <div id="find__Wrap">
                <div className="find__header">
                    <h1>비밀번호 찾기</h1>
                    <p>아이디와 연락처를 입력하시면,<br />
                        비밀번호를 찾을 수 있습니다.</p>
                </div>
                <div className="find__main">
                    <div className="find__input_box">
                        <div>
                            <label htmlFor="youId">아이디</label>
                            <input type="text" placeholder='이메일을 입력해주세요.' />
                        </div>
                        <div>
                            <label htmlFor="youPhone">전화번호</label>
                            <input type="text" placeholder='전화번호를 입력해주세요.' />
                        </div>
                    </div>
                    <div className="find_button_box">
                        <a href="./find02" className='find__button'>비밀번호 찾기</a>
                        <div>
                            <ul>
                                <li>
                                    <a href="/">아이디 찾기</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find