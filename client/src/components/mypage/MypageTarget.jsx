import React, { useState } from 'react'
import MypageSide from './MypageSide'
import MapUnInfo from '../map/localmap/MapUnInfo'
import university from '../../assets/img/mypage/university.png'
import target_down from '../../assets/img/mypage/target_down.png'
import target_up from '../../assets/img/mypage/target_up.png'

const MypageTarget = () => {

    const [isTargetOpen, setIsTargetOpen] = useState(false);

    const toggleTarget = () => {
        setIsTargetOpen(!isTargetOpen);
    };



    return (
        <>
            <div className='mypage_Wrap'>
                <MypageSide />
                <div className='main'>
                    <div className="mypage_title">
                        <h3>목표 대학</h3>
                    </div>
                    <div className='mypage_target'>
                        <ul>
                            <li>편집 버튼을 눌러 나의 목표 대학의 순위를 변경하거나 삭제할 수 있습니다.</li>
                            <li>대학정보 버튼을 클릭하여 해당 대학정보 페이지로 바로 이동할 수 있습니다.</li>
                            <li>목표 대학은 최대 10개까지 설정 가능합니다.</li>
                        </ul>
                        <div className="map_target">
                            <MapUnInfo />
                        </div>
                        <div className="target_modify">
                            <button onClick={toggleTarget}>목표 대학 편집하기</button>
                        </div>
                    </div>
                </div>
            </div>

            {isTargetOpen && (
                <div className="guide_popup">
                    <div className="popup_wrap">
                        <div className="guide_cont">
                            <h4>목표 대학 편집하기</h4>
                            <p className='target_pop_desc'><img src={university} alt="" />목표대학은 10개까지 추가가 가능합니다.</p>
                            <div className='target_select'>
                                <div className="target_select_wrap">
                                    <div className="target_select_bg">
                                        <select name="" id="">
                                            <option value="">학제 선택</option>
                                            <option value="">학제 선택</option>
                                            <option value="">학제 선택</option>
                                            <option value="">학제 선택</option>
                                        </select>
                                    </div>
                                    <div className="target_select_bg">
                                        <select name="" id="">
                                            <option value="">대학(전체)</option>
                                            <option value="">대학(전체)</option>
                                            <option value="">대학(전체)</option>
                                            <option value="">대학(전체)</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="target_search">
                                    <button>추가</button>
                                </div>
                            </div>
                            <div className='univer_list'>
                                <div className="uni_list">
                                    <span className="ranking">1순위</span>
                                    <span className='name'>성신여자대학교</span>
                                    <div className="rank_modify_btn">
                                        <button className='up'><img src={target_up} alt="" /></button>
                                        <button className='down'><img src={target_down} alt="" /></button>
                                    </div>
                                    <div className="delete_btn">
                                        <button>삭제</button>
                                    </div>
                                </div>
                                <div className="uni_list">
                                    <span className="ranking">2순위</span>
                                    <span className='name'>성신여자대학교</span>
                                    <div className="rank_modify_btn">
                                        <button className='up'><img src={target_up} alt="" /></button>
                                        <button className='down'><img src={target_down} alt="" /></button>
                                    </div>
                                    <div className="delete_btn">
                                        <button>삭제</button>
                                    </div>
                                </div>
                                <div className="uni_list">
                                    <span className="ranking">3순위</span>
                                    <span className='name'>성신여자대학교</span>
                                    <div className="rank_modify_btn">
                                        <button className='up'><img src={target_up} alt="" /></button>
                                        <button className='down'><img src={target_down} alt="" /></button>
                                    </div>
                                    <div className="delete_btn">
                                        <button>삭제</button>
                                    </div>
                                </div>
                            </div>

                            <div className="pop_btn pw_btn">
                                <button className='cancle_btn' onClick={toggleTarget}>취소</button>
                                <button className='charge_btn'>저장</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MypageTarget