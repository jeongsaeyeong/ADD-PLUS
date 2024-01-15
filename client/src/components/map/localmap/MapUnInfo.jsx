import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'

const MapUnInfo = () => {
    const [activeUn, SetActiveUn] = useState("덕성여자대");

    return (
        <div className='local__map__Wrap'>
            <div className="UnInfo__Wrap">
                <div className="UnDetaile">
                    <div className="UnDetailInfo">
                        <h2 className="UnName">1순위<br />{activeUn}</h2>
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
            <div className="UnInfo__Wrap">
                <div className="UnDetaile">
                    <div className="UnDetailInfo">
                        <h2 className="UnName">2순위<br />{activeUn}</h2>
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
            <div className="UnInfo__Wrap">
                <div className="UnDetaile">
                    <div className="UnDetailInfo">
                        <h2 className="UnName">3순위<br />{activeUn}</h2>
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
            <div className="UnInfo__Wrap">
                <div className="UnDetaile">
                    <div className="UnDetailInfo">
                        <h2 className="UnName">4순위<br />{activeUn}</h2>
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

export default MapUnInfo