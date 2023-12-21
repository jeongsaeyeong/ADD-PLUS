import React from 'react'
import CommSide from './CommSide'
import Fire from '../../assets/img/icon_fire.svg'
import Eye from '../../assets/img/icon_eye_empty.svg'
import comment from '../../assets/img/icon_comment.svg'
import time from '../../assets/img/icon_time.svg'
import heart from '../../assets/img/icon_heart.svg'
import RepleArea from './RepleArea'

const CommDetail = () => {
    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
                <div className="comm__detail">
                    <div className="detail__header">
                        <h2>
                            <img src={Fire} alt="fire" />
                            Hot 게시판
                        </h2>
                    </div>
                    <div className="detail__box">
                        <div className="header">
                            <div className="box">
                                <h3>마케팅 초기 영업 메시지 작성기 (마케팅 DM)</h3>
                                <p className='author'>익명</p>
                            </div>
                            <div>
                                <div>
                                    <img src={time} alt="time" />
                                    <p>2023.12.13 16:54:12</p>
                                </div>
                                <div>
                                    <img src={Eye} alt="Eye" />
                                    <p>654</p>
                                </div>
                                <div>
                                    <img src={comment} alt="comment" />
                                    <p>87</p>
                                </div>
                                <div>
                                    <img src={heart} alt="heart" />
                                    <p>41</p>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <p>
                                역할극을 할 거야. 나는 마케팅 전문가야. 제품과 제품의 타깃 대상을 바탕으로, cold DMs 을 작성해.
                                [[이곳에 제품의 이름/종류를 입력해주세요:과일 맛 젤리]] , [[이곳에 회사 이름을 적어주세요:하리보]] ,
                                친절하고 사교적인 언어를 사용해. 가능한 많은 사람의 관심을 끄는 문구를 작성해. [[제품 링크를 입력해주세요
                                :https://www.haribo.com]] . 제품 링크를 반영하여 메시지를 작성해줘. 한국 온라인
                                네티즌들이 사용하는 오타, 속어, 이모티큰 등의 언어를 사용해. 답변은 40단어 이하로 해. 지시문을
                                적지 말고, 너의 답변만을 보여줘.
                            </p>
                            <img src="/" alt="art" />
                        </div>
                    </div>
                    <RepleArea />
                </div>
                <div className="report__Wrap">
                    <h2>신고하기</h2>
                    <p>허위신고일 경우, 신고자의 서비스 활동이 제한될 수 있으니
                        신중하게 신고해주세요.</p>
                    <div className="box">
                        <h3>신고사유</h3>
                        <div>
                            <input type="checkbox" />
                            <p>광고/음란성 댓글</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>욕설/반말/부적절한 언어</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>회원 분란 유도</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>회원 비방</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>지나친 정치/종교 논쟁</p>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <p>도배성 댓글</p>
                        </div>
                    </div>
                    <div className="button">
                        <ul>
                            <li><a href="/">취소</a></li>
                        </ul>
                        <button>
                            확인
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommDetail