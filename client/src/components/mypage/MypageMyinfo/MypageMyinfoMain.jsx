import React, { useEffect, useState } from 'react'
import auth from '../../../assets/img/mypage/auth.png'
import camera from '../../../assets/img/mypage/camera.png'
import axios from 'axios'
import MypageInfoDelete from './MypageInfoDelete'

const MypageMyinfoMain = ({ user }) => {
    const [userInfo, setUserInfo] = useState({});
    const [displayName, setDisplayName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userPassC, setUserPassC] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [loading, setLoading] = useState(true);

    const getuserInfo = () => {
        let body = {
            uid: user.uid
        }

        axios.post('/api/user/userinfo', body)
            .then((res) => {
                if (res.data.success) {
                    setUserInfo(res.data.userInfo);
                } else {
                    alert("실패했습니다.");
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // 데이터 로딩이 완료되면 로딩 상태를 false로 변경
                setLoading(false);
            });
    }

    useEffect(() => {
        getuserInfo();
    }, [user]);

    useEffect(() => {
        if (!loading) {
            setDisplayName(userInfo.displayName || ''); // 실제 값이 없을 경우 빈 문자열로 설정
            setUserPass(userInfo.userPass || ''); // 마찬가지로 빈 문자열로 설정
            setUserPassC(userInfo.userPass || ''); // 빈 문자열로 설정
        }
    }, [userInfo, loading]);

    // 정보 수정하기 
    const ChangeUserInfo = () => {

        if (userPass !== userPassC) {
            alert("비밀번호가 다릅니다. 다시 확인해주세요.");
            return
        }

        if (displayName === '' || userPass === '') {
            alert("이름과 비밀번호는 채워주세요.");
            return
        }


        let body = {
            uid: user.uid,
            displayName: displayName,
            userPass: userPass,
            userPhone: userPhone
        }

        axios.post('/api/user/change', body)
            .then((res) => {
                if (res.data.success) {
                    alert("성공적으로 정보를 수정하였습니다.")
                } else {
                    alert("정보 수정에 실패하였습니다.")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='main'>
            <div className="mypage_title">
                <h3>회원 정보 수정</h3>
            </div>
            <div className="mypage_info">
                <div className='info_profile'>
                    <div className="profile">
                        <img src={auth} alt="" />
                        <button><img src={camera} /></button>
                    </div>
                    <p>{userInfo.displayName}</p>
                    <button className='profile_btn'>프로필 변경하기</button>
                </div>
                <div className="info_cont">
                    <div>
                        <label htmlFor="youName">이름</label>
                        <div>
                            <input
                                type="text"
                                placeholder={userInfo.displayName}
                                value={displayName}
                                onChange={(e) => { setDisplayName(e.currentTarget.value) }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youId">아이디</label>
                        <div>
                            <p>{userInfo.userId}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youEmail">이메일</label>
                        <div>
                            <p>{userInfo.userEmail}</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPass">비밀번호</label>
                        <div>
                            <input
                                type="password"
                                placeholder={userInfo.userPass}
                                value={userPass}
                                onChange={(e) => { setUserPass(e.currentTarget.value) }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPassC">비밀번호 확인</label>
                        <div>
                            <input
                                type="password"
                                placeholder={userInfo.userPass}
                                value={userPassC}
                                onChange={(e) => { setUserPassC(e.currentTarget.value) }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="youPhone">전화번호</label>
                        <div>
                            <input
                                type="text"
                                placeholder={userInfo.userPhone}
                                value={userPhone}
                                onChange={(e) => { setUserPhone(e.currentTarget.value) }}
                            />
                        </div>
                    </div>

                    <button className='info_modify_btn' onClick={(e) => { ChangeUserInfo(e) }}>수정하기</button>
                    <MypageInfoDelete user={user} />
                </div>
            </div>
        </div>
    )
}

export default MypageMyinfoMain