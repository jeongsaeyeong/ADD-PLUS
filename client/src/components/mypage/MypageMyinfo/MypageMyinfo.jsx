import React, { useEffect, useState } from 'react'
import MypageSide from '../MypageSide'
import { useSelector } from 'react-redux'
import MypageMyinfoPassword from './MypageMyinfoPassword'
import MypageMyinfoMain from './MypageMyinfoMain'

const MypageMyinfo = () => {
    const [isPwdOpen, setIsPwdOpen] = useState(true);
    const user = useSelector((state) => state.user)

    return (
        <>
            <div className='mypage_Wrap'>
                <MypageSide />
                <MypageMyinfoMain user={user} isPwdOpen={isPwdOpen} />
            </div>

            <MypageMyinfoPassword user={user} setIsPwdOpen={setIsPwdOpen} isPwdOpen={isPwdOpen} />
        </>
    )
}

export default MypageMyinfo