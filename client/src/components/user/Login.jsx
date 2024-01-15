import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import firebase from '../../firebase'

const Login = () => {
    const [userId, setUserId] = useState("");
    const [userPass, setuserPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        if (!(userId && userPass)) {
            return alert("이메일 또는 비밀번호를 채워주세요!")
        }

        let body = {
            userId: userId,
            userPass: userPass
        }

        axios.post("/api/user/login", body)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    alert("로그인을 완료했습니다.")
                    firebase.auth().signInWithEmailAndPassword(res.data.result.userEmail, res.data.result.userPass);
                    navigate('/')
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMsg("이메일과 비밀번호를 다시 한번 확인해주세요!")
            })
    }

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("")
        }, 5000)
    }, [errorMsg]);

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
                            <input
                                type="text"
                                placeholder='이메일을 입력해주세요.'
                                id='youId'
                                value={userId}
                                onChange={(e) => { setUserId(e.currentTarget.value) }}
                            />
                        </div>
                        <div>
                            <label htmlFor="youPass">비밀번호</label>
                            <input
                                type="password"
                                placeholder='비밀번호를 입력해주세요.'
                                id='password'
                                value={userPass}
                                onChange={(e) => { setuserPass(e.currentTarget.value) }}
                            />
                        </div>
                        <div className='errorMsg'>
                            {errorMsg !== "" && <p>{errorMsg}</p>}
                        </div>
                    </div>
                    <div className="login_button_box">
                        <button
                            href="./login"
                            className='login__button'
                            onClick={(e) => { onLogin(e) }}
                        >로그인</button>
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