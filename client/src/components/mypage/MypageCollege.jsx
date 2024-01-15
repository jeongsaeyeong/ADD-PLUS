import React from 'react'
import MypageSide from './MypageSide'

const MypageCollege = () => {
    return (
        <>
            <div className='score__Wrap mypage_Wrap'>
                <MypageSide />

                <div className='main'>
                    <div className="score_title">
                        <h3>대학교 인증</h3>
                    </div>
                    <div className="mypage_college_cont">
                        <h4>학교 인증 안내</h4>
                        <ul>
                            <li>학번, 웹메일 도용 등 올바르지 않은 경로를 통해 인증을 시도할 경우, 관련 법에 따라 법적 책임이 따를 수 있습니다.</li>
                            <li>아래 방법 중 하나를 선택하여 인증할 수 있습니다. 학교 포털 스크린을 이용한 포토샵으로 손쉽게 위조가 가능하기 때문에 인증 수단으로 사용하지 않습니다.</li>
                        </ul>
                        <h4>커뮤니티 이용규칙</h4>
                        <ul>
                            <li>인증 후 사용할 수 있는 에드플러스 커뮤니티 게시판, 대학생 커뮤니티의 게시물 일체를 내용 복사, 스크린샷 등을 통해 절대로 외부로 유출해서는 안 됩니다.</li>
                            <li>
                                정보통신망법에 의해 허가받지 않은 홍보물을 게시해서는 안됩니다.
                                <ul>
                                    <li>- 쇼핑몰, 오픈마켓, 소셜커머스-  등의 홍보</li>
                                    <li>- 광고가 있는 카페, 블로그, 커뮤니티, 앱의 추천, 홍보, 방문 유도 등</li>
                                    <li>- 어학원, 의료업체, 홍보업체 등의 홍보</li>
                                </ul>
                            </li>
                            <li>커뮤니티 이용규칙을 어길 시 접근 제한 또는 법적 조치가 취해질 수 있습니다. 자세한 사항은 커뮤니티 이용규칙을 참고해주시기 바랍니다.</li>
                        </ul>
                    </div>

                    <div className="mypage_college_radio">
                        <label className="container">재학증명서
                            <input type="radio" checked="checked" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">졸업증명서
                            <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="mypage_file">
                        <input type="file" />
                        <button>인증신청</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MypageCollege