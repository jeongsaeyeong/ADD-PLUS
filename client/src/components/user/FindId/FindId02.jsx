import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FindId02 = () => {
    const [userInfo, setUserInfo] = useState([]);

    let params = useParams();
    console.log(params.userEmail)

    useEffect(() => {
        let body = {
            userEmail: params.userEmail
        }

        axios.post("/api/user/findiduser", body)
            .then((res) => {
                setUserInfo([res.data.info.displayName, res.data.info.userId])
            })
            .catch((err) => {
                console.log(err);
            })
    }, [params])

    return (
        <>
            <div id="find02__Wrap">
                <div className="find02__header">
                    <div>
                        <div></div>
                    </div>
                    <h1>아이디 찾기 완료</h1>
                    <p><span>{userInfo[0]}</span>님의 아이디는 <span>{userInfo[1]}</span> 입니다.<br />
                        로그인 후 에드플러스를 마음껏 활용하세요!</p>
                </div>
                <div className="find02_button_box">
                    <a href="./Login" className='find__button'>로그인 하러가기</a>
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

export default FindId02