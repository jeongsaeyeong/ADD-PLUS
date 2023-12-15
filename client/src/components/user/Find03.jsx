import React from 'react'

const Find03 = () => {
    return (
        <>
            <div id="find03__Wrap">
                <div className="find03__header">
                    <div>
                        <div></div>
                    </div>
                    <h1>비밀번호 찾기 실패</h1>
                    <p>일치하는 아이디 혹은 연락처 정보가 없습니다.<br />
                        다시 한번 확인해주세요!</p>
                </div>
                <div className="find03_button_box">
                    <a href="./find" className='join__button'>비밀번호 다시 찾기</a>
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

export default Find03