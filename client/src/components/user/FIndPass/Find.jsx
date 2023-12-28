import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Find = () => {
    const [userId, setUserId] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const navigate = useNavigate();

    const FindPass = (e) => {
        e.preventDefault()
        if (!(userId && userEmail)) {
            return alert("항목을 모두 기입해주세요.")
        }

        let body = {
            userId: userId,
            userEmail: userEmail,
        }

        axios.post("/api/user/findpass", body)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    alert("비밀번호를 찾았습니다.")
                    navigate(`/find02/${userId}`)
                }
            })
            .catch((err) => {
                console.log(err);
                navigate('/find03')
            })
    }

    return (
        <>
            <div id="find__Wrap">
                <div className="find__header">
                    <h1>비밀번호 찾기</h1>
                    <p>아이디와 이메일을 입력하시면,<br />
                        비밀번호를 찾을 수 있습니다.</p>
                </div>
                <div className="find__main">
                    <div className="find__input_box">
                        <div>
                            <label htmlFor="youId">아이디</label>
                            <input
                                type="text"
                                placeholder='아이디를 입력해주세요.'
                                value={userId}
                                onChange={(e) => { setUserId(e.currentTarget.value) }}
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
                            onClick={(e) => { FindPass(e) }}
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

export default Find