import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'
import 경기 from '../../../assets/img/map/경기.png'

const Gyeonggi = () => {
    const [activeUn, SetActiveUn] = useState("동양대(북서울캠)");

    const handleClick = (UnName) => {
        SetActiveUn(UnName);
    };

    return (
        <div className='local__map__Wrap'>
            <div className="local__map">
                <img src={경기} alt="지도" />

                {[
                    '동양대(북서울캠)',
                    '대진대',
                    '차의과학대',
                    '안양대(강화캠)',
                    '인천가톨릭대',
                    '중앙승가대',
                    '중부대(고양캠)',
                    '한국항공대',
                    '신한대',
                    '가톨릭대',
                    '서울신학대',
                    '가천대',
                    '을지대',
                    '차의과학대(분당캠)',
                    '경인교대(경기캠)',
                    '성결대',
                    '안양대',
                    '한국공학대(구.한국산업기술대)',
                    '한세대',
                    '서울장신대',
                    '아세아연합신학대',
                    '국립한국교통대(의왕캠)',
                    '한양대(ERICA캠)',
                    '강남대',
                    '경찰대',
                    '경희대(국제캠)',
                    '단국대',
                    '루터대',
                    '명지대(자연캠)',
                    '용인대',
                    '칼빈대',
                    '한국외대(글로벌캠)',
                    '경기대',
                    '성균관대(자연과학캠)',
                    '아주대',
                    '수원가톨릭대',
                    '수원대',
                    '신경대',
                    '협성대',
                    '한신대',
                    '중앙대(안성캠)',
                    '한경대',
                    '평택대',
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

export default Gyeonggi
