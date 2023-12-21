import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'
import 충남 from '../../../assets/img/map/충남.png'

const Chungcheongnam = () => {
    const [activeUn, SetActiveUn] = useState("세한대(당진캠)");

    const handleClick = (UnName) => {
        SetActiveUn(UnName);
    };

    return (
        <div className='local__map__Wrap'>
            <div className="local__map">
                <img src={충남} alt="지도" />
                {[
                    '세한대(당진캠)',
                    '한서대',
                    '고신대(천안캠)',
                    '국립공주대(천안캠)',
                    '나사렛대',
                    '남서울대',
                    '단국대(천안캠)',
                    '백석대',
                    '상명대(천안캠)',
                    '한국기술교육대',
                    '호서대(천안캠)',
                    '선문대',
                    '순천향대',
                    '유원대(아산캠)',
                    '호서대',
                    '국립공주대(예산캠)',
                    '청운대',
                    '대전가톨릭대',
                    '고려대(세종캠)',
                    '홍익대(조치원캠)',
                    '공주교대',
                    '국립공주대',
                    '한국전통문화대',
                    '건양대',
                    '금강대',
                    '중부대',
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

export default Chungcheongnam
