import React from 'react'

const FindId03 = () => {
    return (
        <>
            <div id="find03__Wrap">
                <div className="find03__header">
                    <div>
                        <div></div>
                    </div>
                    <h1>아이디 찾기 실패</h1>
                    <p>일치하는 이름 혹은 이메일 정보가 없습니다.<br />
                        다시 한번 확인해주세요!</p>
                </div>
                <div className="find03_button_box">
                    <a href="./findId" className='join__button'>아이디 다시 찾기</a>
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

export default FindId03