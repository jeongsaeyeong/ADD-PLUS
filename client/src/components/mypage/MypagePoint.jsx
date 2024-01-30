import React, { useState } from 'react'
import MypageSide from './MypageSide'
import tabler_coins from '../../assets/img/mypage/tabler_coins.png'
import tabler_coins_1 from '../../assets/img/mypage/tabler_coins-1.png'
import tabler_coins_2 from '../../assets/img/mypage/tabler_coins-2.png'


const MypagePoint = () => {

    const [isGuideOpen, setIsGuideOpen] = useState(false);
    const [isChargeOpen, setIsChargeOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleGuide = () => {
        setIsGuideOpen(!isGuideOpen);
    };

    const toggleCharge = () => {
        setIsChargeOpen(!isChargeOpen);
    }

    const handleSpanClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className='score__Wrap mypage_Wrap'>
                <MypageSide />

                <div className='main'>
                    <div className='mypage_point'>
                        <div className="point_top_btn">
                            <button className='guide_btn' onClick={toggleGuide}>이용안내</button>
                            <button className='point_btn' onClick={toggleCharge}>충전하기</button>
                        </div>
                        <div className="point_payment">
                            <div className="point_total">
                                <img src={tabler_coins} />
                                <div className="point_tit">
                                    <h3>총 보유 포인트</h3>
                                    <em>2,541P</em>
                                </div>
                            </div>
                            <div className="point_account">
                                <img src={tabler_coins_1} />
                                <div className="point_tit">
                                    <h3>적립 포인트</h3>
                                    <em>2,541P</em>
                                </div>
                            </div>
                            <div className="point_charge">
                                <img src={tabler_coins_1} />
                                <div className="point_tit">
                                    <h3>충전 포인트</h3>
                                    <em>2,541P</em>
                                </div>
                            </div>
                            <div className="point_used">
                                <img src={tabler_coins_2} />
                                <div className="point_tit">
                                    <h3>사용 포인트</h3>
                                    <em>- 2,541P</em>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="score_title point_title">
                        <h3>이용 내역</h3>
                    </div>

                    <div className="point_list">
                        <table>
                            <tr>
                                <th style={{ width: '35%' }}>적립/사용 내용</th>
                                <th>일시</th>
                                <th>사용</th>
                                <th>적립</th>
                                <th>포인트 잔액</th>
                            </tr>
                            <tr>
                                <td><span className='account_tag'>적립</span>커뮤니티 댓글 5회 작성 완료</td>
                                <td>2023.12.14 13:44</td>
                                <td></td>
                                <td><span className='account_coin'>+ 100P</span></td>
                                <td className='total'>2,100P</td>
                            </tr>
                            <tr>
                                <td><span className='use_tag'>사용</span>커뮤니티 댓글 5회 작성 완료</td>
                                <td>2023.12.14 13:44</td>
                                <td><span className='use_coin'>- 100P</span></td>
                                <td></td>
                                <td className='total'>2,100P</td>
                            </tr>
                            <tr>
                                <td><span className='charge_tag'>충전</span>커뮤니티 댓글 5회 작성 완료</td>
                                <td>2023.12.14 13:44</td>
                                <td></td>
                                <td><span className='charge_coin'>+ 100P</span></td>
                                <td className='total'>2,100P</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            {isGuideOpen && (
                <div className="guide_popup">
                    <div className="popup_wrap">
                        <div className="guide_cont">
                            <h4>포인트 이용안내</h4>
                            <ul>
                                <li>적립된 포인트는 가용화(통상 1일)을 거쳐 사용 가능한 포인트(가용 포인트)로 전환됩니다.</li>
                                <li>온라인 쇼핑몰에서 포인트 받기로 다운받은 포인트는 즉시 가용 포인트로 전환 됩니다.</li>
                                <li>결제 시 포인트를 사용할 경우, 포인트 사용 금액을 제외한 지불 금액에 대해 포인트가 적립됩니다.</li>
                                <li>각 제휴 브랜드별로 포인트 적립/사용이 제외되는 일부 매장 및 상품이 있을 수 있습니다.</li>
                                <li>각 제휴 브랜드별로 1일 적립 횟수 제한이 있으니 브랜드 별 제한 내용을 확인하시기 바랍니다.</li>
                            </ul>
                            <button onClick={toggleGuide}>확인</button>
                        </div>
                    </div>
                </div>
            )}

            {isChargeOpen && (
                <div className="guide_popup charge_popup">
                    <div className="popup_wrap">
                        <div className="guide_cont">
                            <h4>포인트 충전하기</h4>
                            <div className='charge_pop_cont'>
                                <div className="charge_method">
                                    <h5>결제수단</h5>
                                    <div className="method_cont">
                                        <span className='active'>신용카드</span>
                                        <span>무통장 입금</span>
                                    </div>
                                </div>
                                <div className="charge_count">
                                    <h5>결제금액</h5>
                                    <div className="count_cont">
                                        {[5000, 10000, 20000, 50000].map((amount, index) => (
                                            <span
                                                key={index}
                                                className={index === activeIndex ? 'active' : ''}
                                                onClick={() => handleSpanClick(index)}
                                            >
                                                ₩ {amount}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="charge_result">
                                    <div className="charge_total">
                                        <h5>결제금액 (직접입력 가능)</h5>
                                        <input type="text" />
                                    </div>
                                    <div className="charge_total">
                                        <h5>충전 포인트</h5>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="charge_result">
                                    <div className="charge_total">
                                        <h5>입금자명</h5>
                                        <input type="text" />
                                    </div>
                                    <div className="charge_total">
                                        <h5>전화번호</h5>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="charge_email">
                                    <h5>이메일</h5>
                                    <input type="email" placeholder='이메일을 입력해주세요' />
                                </div>
                            </div>

                            <div className="mypage_college_radio charge_radio">
                                <label className="container">서비스 이용약관에 동의합니다. <a href="#">[전문보기]</a>
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">개인정보수집 및 이용정책에 동의합니다. <a href="#">[전문보기]</a>
                                    <input type="checkbox" name="radio" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="pop_btn">
                                <button className='cancle_btn' style={{ width: '48%' }} onClick={toggleCharge}>취소</button>
                                <button className='charge_btn' style={{ width: '48%' }}>결제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MypagePoint