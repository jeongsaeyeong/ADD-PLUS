import React, { useState } from 'react'
import MypageSide from './MypageSide'
import auth from '../../assets/img/mypage/auth.png'
import camera from '../../assets/img/mypage/camera.png'

const MypageMyinfo = () => {

    const [isPwdOpen, setIsPwdOpen] = useState(true);

    // const togglePwd = () => {
    //     setIsPwdOpen(!isPwdOpen);
    // };

    const handleCancel = () => {
        setIsPwdOpen(false);
    };

    return (
        <>
            <div className='mypage_Wrap'>
                <MypageSide />
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
                            <p>정유진</p>
                            <button className='profile_btn'>프로필 변경하기</button>
                        </div>
                        <div className="info_cont">
                            <div>
                                <label htmlFor="youName">이름</label>
                                <div>
                                    <input type="text" placeholder='이름을 입력해주세요.' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="youId">아이디</label>
                                <div>
                                    <input type="text" placeholder='아이디를 입력해주세요.' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="youEmail">이메일</label>
                                <div>
                                    <input type="email" placeholder='이메일을 입력해주세요.' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="youPass">비밀번호</label>
                                <div>
                                    <input type="password" placeholder='비밀번호를 입력해주세요.' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="youPassC">비밀번호 확인</label>
                                <div>
                                    <input type="password" placeholder='비밀번호를 재입력해주세요.' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="youPhone">전화번호</label>
                                <div>
                                    <input type="text" placeholder='전화번호를 입력해주세요.' />
                                </div>
                            </div>

                            <button className='info_modify_btn'>수정하기</button>
                            <button className='info_out_btn'>회원탈퇴</button>
                        </div>
                    </div>
                </div>
            </div>

            {isPwdOpen && (
                <div className="guide_popup">
                    <div className="popup_wrap">
                        <div className="guide_cont">
                            <h4>회원 정보 수정</h4>
                            <p className='pw_pop_desc'>회원 정보 수정을 위해 비밀번호를 입력해주세요.</p>
                            <input className='pw_input' type="password" placeholder='비밀번호를 입력해주세요' />
                            <div className="pop_btn pw_btn">
                                <button className='cancle_btn' onClick={handleCancel}>취소</button>
                                <button className='charge_btn'>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MypageMyinfo