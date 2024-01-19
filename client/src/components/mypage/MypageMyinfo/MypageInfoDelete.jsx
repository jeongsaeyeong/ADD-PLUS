import axios from 'axios';
import React from 'react'
import firebase from '../../../firebase.js'
import { useNavigate } from 'react-router-dom';

const MypageInfoDelete = ({ user }) => {
    const navigate = useNavigate()
    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate("/");
    }

    const Ondelete = (e) => {
        e.preventDefault();
        const isConfirmed = window.confirm("정말로 탈퇴하시겠습니까?");

        if (isConfirmed) {
            let body = {
                uid: user.uid
            }

            axios.post('/api/user/delete', body)
                .then((res) => {
                    if (res.data.success) {
                        LogoutHandler();
                        navigate('/');
                    }
                })
                .catch((error) => {
                    console.error("탈퇴 중 오류 발생:", error);
                });
        }
    }

    return (
        <button className='info_out_btn' onClick={(e) => Ondelete(e)}>회원탈퇴</button>
    )
}

export default MypageInfoDelete