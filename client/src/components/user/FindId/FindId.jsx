import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FindId = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const navigate = useNavigate();

    const FindId = (e) => {
        e.preventDefault()
        if (!(userName && userEmail)) {
            return alert("항목을 모두 기입해주세요.")
        }

        let body = {
            displayname: userName,
            userEmail: userEmail,
        }

        axios.post("/api/user/findid", body)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    alert("아이디를 찾았습니다.")
                    navigate(`/findid02/${userEmail}`)
                }
            })
            .catch((err) => {
                console.log(err);
                navigate('/findid03')
            })
    }

    return (
        <>
            <div id="find__Wrap">
                <div className="find__header">
                    <h1>아이디 찾기</h1>
                    <p>이름과 이메일을 입력하시면,<br />
                        아이디를 찾을 수 있습니다.</p>
                </div>
                <div className="find__main">
                    <div className="find__input_box">
                        <div>
                            <label htmlFor="youId">이름</label>
                            <input
                                type="text"
                                placeholder='이름을 입력해주세요.'
                                value={userName}
                                onChange={(e) => { setUserName(e.currentTarget.value) }}
                            />
                        </div>
                        <div>
                            <label htmlFor="youEmail">이메일</label>
                            <input
                                type="text"
                                placeholder='이메일을 입력해주세요.'
                                value={userEmail}
                                onChange={(e) => { setUserEmail(e.currentTarget.value) }}
                            />
                        </div>
                    </div>
                    <div className="find_button_box">
                        <button
                            className='find__button'
                            onClick={(e) => { FindId(e) }}
                        >비밀번호 찾기</button>
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

export default FindId