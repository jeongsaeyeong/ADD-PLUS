import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import firebase from '../../../firebase';

const Join03 = () => {
    let params = useParams();
    let navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [userPassC, setUserPassC] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const [emailCheck, setEmailCheck] = useState(false);
    const [emailInfo, setEmailInfo] = useState("")

    const [IdCheck, setIdCheck] = useState(false);
    const [IdInfo, setIdInfo] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!(username && userId && userEmail && userPass && userPassC)) {
            return alert("필수 내용을 모두 기입해주세요.")
        }

        if (!userPass === userPassC) {
            return alert("비밀번호가 일치하지 않습니다.")
        }

        if (!emailCheck) {
            return alert("이메일 중복 검사를 해주세요")
        }

        if (!IdCheck) {
            return alert("아이디 중복 검사를 해주세요")
        }

        let createdUser = await firebase.auth().createUserWithEmailAndPassword(userEmail, userPass);

        await createdUser.user.updateProfile({
            displayName: username,
        });

        console.log(createdUser.user)

        let body = {
            displayName: createdUser.user.multiFactor.user.displayName,
            userId: userId,
            userEmail: createdUser.user.multiFactor.user.email,
            userPass: userPass,
            userPhone: userPhone,
            userCate: params.cate,
            uid: createdUser.user.multiFactor.user.uid
        }

        axios.post("/api/user/join", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("회원가입이 완료되었습니다.");
                    firebase.auth().signOut();
                    navigate("/join04");
                } else {
                    alert("회원가입이 실패하였습니다.");
                }
            })
    }

    const EmailCheckFunc = (e) => {
        e.preventDefault();
        if (!userEmail) {
            return alert("이메일을 입력해주세요!");
        }

        alert("중복검사")
        let body = {
            userEmail: userEmail,
        }

        axios.post("/api/user/emailcheck", body).then((res) => {
            if (res.data.success) {
                if (res.data.check) {
                    setEmailCheck(true);
                    setEmailInfo("사용 가능한 이메일입니다.");
                } else {
                    setEmailInfo("사용할 수 없는 이메일입니다.");
                }
            }
        })
    }

    const IdCheckFunc = (e) => {
        e.preventDefault();
        if (!userId) {
            return alert("아이디를 입력해주세요!");
        }
        let body = {
            userId: userId,
        }

        axios.post("/api/user/idcheck", body).then((res) => {
            if (res.data.success) {
                if (res.data.check) {
                    setIdCheck(true);
                    setIdInfo("사용 가능한 아이디입니다.");
                } else {
                    setIdInfo("사용할 수 없는 아이디입니다.");
                }
            }
        })
    }

    return (
        <>
            <div id="join03__Wrap">
                <div className="join03__header">
                    <h1>회원가입</h1>
                    <p>회원가입 후 <span>에드플러스</span>를 마음껏 활용하세요!</p>
                </div>

                <div className="join03__main">
                    <div>
                        <label htmlFor="youName">이름 <span>(필수)</span></label>
                        <div>
                            <input
                                type="text"
                                placeholder='이름을 입력해주세요.'
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youId">아이디<span>(필수)</span></label>
                        <div className='button'>
                            <input
                                type="text"
                                placeholder='아이디를 입력해주세요.'
                                value={userId}
                                onChange={(e) => {
                                    setUserId(e.currentTarget.value);
                                }}
                            />
                            <button
                                onClick={(e) => { IdCheckFunc(e) }}
                            >중복검사</button>
                            {IdInfo}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youNick">이메일<span>(필수)</span></label>
                        <div className='button'>
                            <input
                                type="text"
                                placeholder='이메일을 입력해주세요.'
                                value={userEmail}
                                onChange={(e) => {
                                    setUserEmail(e.currentTarget.value);
                                }}
                            />
                            <button
                                onClick={(e) => { EmailCheckFunc(e) }}
                            >중복검사</button>
                            {emailInfo}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPass">비밀번호<span>(필수)</span></label>
                        <div>
                            <input
                                type="password"
                                placeholder='비밀번호를 입력해주세요.'
                                value={userPass}
                                onChange={(e) => {
                                    setUserPass(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPassC">비밀번호 확인<span>(필수)</span></label>
                        <div>
                            <input
                                type="password"
                                placeholder='비밀번호를 재입력해주세요.'
                                value={userPassC}
                                onChange={(e) => {
                                    setUserPassC(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPhone">전화번호</label>
                        <div>
                            <input
                                type="text"
                                placeholder='전화번호를 입력해주세요.'
                                value={userPhone}
                                onChange={(e) => {
                                    setUserPhone(e.currentTarget.value);
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="join03_button_box">
                    <div
                        className='join__button'
                        onClick={(e) => onSubmit(e)}
                    >계속(3/3)</div>
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