import React, { useState } from 'react'
import MypageSide from './MypageSide'
import displayBig from '../../assets/img/mypage/display_big.png';
import displayMedium from '../../assets/img/mypage/display_medium.png';
import displaySmall from '../../assets/img/mypage/display_small.png';
import axios from 'axios'
import { useSelector } from 'react-redux';

const MypageDisplay = () => {

    const [displayImage, setDisplayImage] = useState(displayBig);
    const [selectedSize, setSelectedSize] = useState('large');
    const [isBuyOpen, setIsBuyOpen] = useState(false);
    const user = useSelector((state) => state.user)

    // 구매 문의 정보 

    const [coparation, setCoparation] = useState('');
    const [img, setimg] = useState('');
    const [link, setLink] = useState('');
    const [charge, setCharge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked); // 체크 상태를 토글
    };

    const changeImage = (image) => {
        setDisplayImage(image);
    };

    const toggleBuy = () => {
        setIsBuyOpen(!isBuyOpen);
    }

    // onSubmit

    const onSubmit = () => {
        if (coparation === '' || link === '' || charge === '' || phone === '' || email === '') {
            alert('빈칸 없이 내용을 채워주세요.')
            return
        }

        if (!(isChecked)) {
            alert("개인정보 수집 및 이용에 동의하지 않으신다면 폼을 제출할 수 없습니다.")
            return
        }

        let body = {
            user: user.uid,
            coparation: coparation,
            link: link,
            charge: charge,
            phone: phone,
            email: email,
        }

        axios.post('/api/advertisment/submit', body)
            .then((res) => {
                if (res.data.success) {
                    alert("광고 신청이 완료되었습니다.");
                    setIsBuyOpen(!isBuyOpen);
                    setCoparation('')
                    setLink('')
                    setCharge('')
                    setPhone('')
                    setEmail('')
                }
            })
    }

    return (
        <>
            <div className='mypage_Wrap'>
                <MypageSide />

                <div className='main'>
                    <div className="mypage_title">
                        <h3>디스플레이 광고</h3>
                    </div>
                    <div className='mypage_display'>
                        <p className='display_desc'>
                            ※ 제 3자의 권리(저작권, 초상권, 개인정보 등)와 관련된 광고 소개(이미지, 카피) 및 랜딩 페이지 콘텐츠는 해당 권리자에게
                            사전 동의, 이용 승낙을 받는 등 필요한 조치를 취한 것이여야 합니다.
                        </p>
                        <div className="display_list">
                            <div className="display_info">
                                <img src={displayImage} />
                                <ul>
                                    <li>※ 부적절한 내용으로 광고할 경우, 광고효과가 저하됨은 물론 이용자 피해 등에 따른 책임을 질 수 있습니다.</li>
                                    <li>※ add는 광고주의 광고를 검토하여, 문제가 발견되는 경우 언제든지 수정을 요청하거나 또는 광고의 노출을 중단할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="display_price">
                                <div className="display_week">
                                    <h4>1 WEEK</h4>
                                    <ul>
                                        <li
                                            className={selectedSize === 'large' ? 'active' : ''}
                                            onClick={() => {
                                                changeImage(displayBig);
                                                setSelectedSize('large');
                                            }}
                                        >
                                            대형
                                            <div className="price">
                                                <em>700,000P</em>
                                                <button onClick={toggleBuy}>구매 문의</button>
                                            </div>
                                        </li>
                                        <li
                                            className={selectedSize === 'medium' ? 'active' : ''}
                                            onClick={() => {
                                                changeImage(displayMedium);
                                                setSelectedSize('medium');
                                            }}
                                        >
                                            중형
                                            <div className="price">
                                                <em>490,000P</em>
                                                <button onClick={toggleBuy}>구매 문의</button>
                                            </div>
                                        </li>
                                        <li
                                            className={selectedSize === 'small' ? 'active' : ''}
                                            onClick={() => {
                                                changeImage(displaySmall);
                                                setSelectedSize('small');
                                            }}
                                        >
                                            소형
                                            <div className="price">
                                                <em>350,000P</em>
                                                <button onClick={toggleBuy}>구매 문의</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="display_week">
                                    <h4>2 WEEK</h4>
                                    <ul>
                                        <li
                                            className={selectedSize === '2large' ? 'active' : ''}
                                            onClick={() => {
                                                changeImage(displayBig);
                                                setSelectedSize('2large');
                                            }}
                                        >
                                            대형
                                            <div className="price">
                                                <em>1,400,000P</em>
                                                <button onClick={toggleBuy}>구매 문의</button>
                                            </div>
                                        </li>
                                        <li
                                            className={selectedSize === '2medium' ? 'active' : ''}
                                            onClick={() => {
                                                changeImage(displayMedium);
                                                setSelectedSize('2medium');
                                            }}
                                        >
                                            중형
                                            <div className="price">
                                                <em>980,000P</em>
                                                <button onClick={toggleBuy}>구매 문의</button>
                                            </div>
                                        </li>
                                        <li
                                            className={selectedSize === '2small' ? 'active' : ''}
                                            onClick={() => {
                                                changeImage(displaySmall);
                                                setSelectedSize('2small');
                                            }}
                                        >
                                            소형
                                            <div className="price">
                                                <em>700,000P</em>
                                                <button onClick={toggleBuy}>구매 문의</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isBuyOpen && (
                <div className="guide_popup buy_popup">
                    <div className="popup_wrap">
                        <div className="guide_cont">
                            <h4>구매 문의</h4>
                            <ul>
                                <li>
                                    <label htmlFor="">기업명</label>
                                    <input type="text" value={coparation} onChange={(e) => { setCoparation(e.currentTarget.value) }} placeholder='기업명을 입력해주세요' />
                                </li>
                                <li>
                                    <label htmlFor="">광고 소재</label>
                                    <input className='file_input' type="file" />
                                </li>
                                <li>
                                    <label htmlFor="">클릭URL</label>
                                    <input type="text" value={link} onChange={(e) => { setLink(e.currentTarget.value) }} placeholder='URL을 입력해주세요' />
                                </li>
                                <li>
                                    <label htmlFor="">담당자</label>
                                    <input type="text" value={charge} onChange={(e) => { setCharge(e.currentTarget.value) }} placeholder='담당자 이름을 입력해주세요' />
                                </li>
                                <li>
                                    <label htmlFor="">연락처</label>
                                    <input type="text" value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} placeholder='연락처을 입력해주세요' />
                                </li>
                                <li>
                                    <label htmlFor="">이메일</label>
                                    <input type="text" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} placeholder='이메일을 입력해주세요' />
                                </li>
                            </ul>
                            <div className='check_wrap'>
                                <label htmlFor='popcheck' className="checkCont">개인정보 수집 및 이용 동의
                                    <input id='popcheck' type="checkbox" name="radio" checked={isChecked} onChange={handleCheckboxChange} />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div className="pop_btn">
                                <button className='cancle_btn' onClick={toggleBuy}>취소</button>
                                <button className='charge_btn' onClick={() => { onSubmit() }}>문의하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default MypageDisplay