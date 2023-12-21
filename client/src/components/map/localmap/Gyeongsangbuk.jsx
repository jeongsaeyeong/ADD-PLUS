import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'
import 경북 from '../../../assets/img/map/경북.png'

const Gyeongsangbuk = () => {
    const [activeUn, SetActiveUn] = useState("동양대");

    const handleClick = (UnName) => {
        SetActiveUn(UnName);
    };

    return (
        <div className='local__map__Wrap'>
            <div className="local__map">
                <img src={경북} alt="지도" />

                {[
                    '동양대',
                    '경북대(상주캠)',
                    '국립안동대',
                    '김천대',
                    '경운대',
                    '국립금오공대',
                    '대구예술대',
                    '육군3관학교',
                    '포스텍',
                    '한동대',
                    '경주대',
                    '동국대(경주캠)',
                    '위덕대',
                    '경일대',
                    '대구가톨릭대',
                    '대구대',
                    '대구한의대',
                    '대신대',
                    '영남대',
                    '영남신학대',
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

export default Gyeongsangbuk
