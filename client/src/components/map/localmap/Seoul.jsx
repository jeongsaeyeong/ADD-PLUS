import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'
import 서울 from '../../../assets/img/map/서울.png'

const Seoul = () => {
    const [activeUn, SetActiveUn] = useState("덕성여자대");

    const handleClick = (UnName) => {
        SetActiveUn(UnName);
    };
    return (
        <div className='local__map__Wrap'>
            <div className="local__map">
                <img src={서울} alt="지도" />

                {[
                    '덕성여자대',
                    '한신대(서울캠)',
                    '성신여자대(운정캠)',
                    '한국성서대',
                    '광운대',
                    '삼육대',
                    '서울과학기술대',
                    '서울여자대',
                    '육군사관학교',
                    '서경대',
                    '국민대',
                    '동덕여자대',
                    '한국예술종합학교(석관캠)',
                    '성신여자대',
                    '한성대',
                    '고려대',
                    '한국외국어대',
                    '경희대',
                    '서울시립대',
                    '상명대',
                    '성균관대',
                    '가톨릭대(성심)',
                    '한국방송통신대',
                    '서울기독대',
                    '명지대',
                    '감리교신학대',
                    '연세대',
                    '추계예술대',
                    '경기대(서울캠)',
                    '이화여자대',
                    '동국대',
                    '한양대',
                    '세종대',
                    '장로회신학대',
                    '건국대',
                    '홍익대',
                    '서강대',
                    '숙명여자대',
                    'KC대',
                    '중앙대',
                    '숭실대',
                    '총신대',
                    '가톨릭대(성의)',
                    '서울교대',
                    '한국예술종합학교(서초캠)',
                    '한국체육대',
                    '성공회대',
                    '서울한영대',
                    '서울대',

                ].map((UnName) => (



                    <span onClick={() => handleClick(UnName)}
                        key={UnName}
                        className={activeUn === UnName ? `UnPlace activeUn ${UnName}` : `UnPlace ${UnName}`}>
                        {UnName}
                    </span>

                ))}

            </div>
            <div className="UnInfo__Wrap">
                <div className="UnDetaile">
                    <div className="UnDetailInfo">
                        <h2 className="UnName">{activeUn}</h2>
                        <span className="UnAdress">주소<p>서울특별시 강부구 도봉로 76가길 55</p></span>
                        <span className="UnSystem">학제<p>4년제</p></span>
                        <span className="Unfound">설립<p>사립대</p></span>
                        <span className="Uncampus">캠퍼스<p>돈암수정, 미아운정그린</p></span>
                    </div>
                    <div className="UnDetailimg">
                        <img src={성신여자대학교} alt="성신여자대학교" />
                    </div>
                </div>
                <div className="UnGoal">
                    <div className="UnGoalmender">
                        <h3>목표 대학 선택 회원수</h3>
                        <span>1259 <p>명</p></span>
                    </div>
                    <div className="department">
                        <Link to="/department">학과정보 +</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seoul
