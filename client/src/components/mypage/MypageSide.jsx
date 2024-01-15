import React from 'react'

const MypageSide = () => {
    return (
        <>
            <div className="nav">
                <h2>MYPAGE</h2>
                <ul>
                    <li className='active'>
                        <a href="/mypage">성적 관리</a>
                    </li>
                    <li>
                        <a href="/mypageInput">성적 입력</a>
                    </li>
                    <li>
                        <a href="/mypageActive">나의 활동</a>
                    </li>
                    <li>
                        <a href="/mypageCollege">대학교 인증</a>
                    </li>
                    <li>
                        <a href="/mypagePoint">포인트</a>
                        <ul>
                            <li><a href="/mypagePoint">포인트 관리</a></li>
                            <li><a href="/mypageDisplay">광고 걸기</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/mypageMyinfo">회원 정보 수정</a>
                    </li>
                    <li>
                        <a href="/mypageTarget">목표 대학 관리</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MypageSide