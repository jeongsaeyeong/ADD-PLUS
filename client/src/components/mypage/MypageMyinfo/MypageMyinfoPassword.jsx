import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MypageMyinfoPassword = ({ user, isPwdOpen, setIsPwdOpen }) => {
    const [checkPassword, setCheckPassword] = useState('')

    const navigate = useNavigate()
    const handleCancel = () => {
        navigate('/mypage')
    };

    const CheckPass = () => {
        if (checkPassword === '') {
            alert('비밀번호를 입력해주세요!')
            return
        }

        let body = {
            userPass: checkPassword,
            uid: user.uid
        }

        axios.post('/api/user/checkpass', body)
            .then((res) => {
                if (res.data.success) {
                    setIsPwdOpen(false)
                } else {
                    alert("실패")
                }
            })
            .catch((err) => {
                alert("비밀번호를 확인해주세요.")
            })
    }

    return (
        <>
            {isPwdOpen && (
                <div className="guide_popup">
                    <div className="popup_wrap">
                        <div className="guide_cont">
                            <h4>회원 정보 수정</h4>
                            <p className='pw_pop_desc'>회원 정보 수정을 위해 비밀번호를 입력해주세요.</p>
                            <input
                                className='pw_input'
                                type="password"
                                placeholder='비밀번호를 입력해주세요'
                                value={checkPassword}
                                onChange={(e) => setCheckPassword(e.currentTarget.value)}
                            />
                            <div className="pop_btn pw_btn">
                                <button className='cancle_btn' onClick={handleCancel}>취소</button>
                                <button className='charge_btn' onClick={() => { CheckPass() }}>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MypageMyinfoPassword