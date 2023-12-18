import React from 'react'
import CommSide from './CommSide'
import Fire from '../../assets/img/icon_fire.svg'
import Eye from '../../assets/img/icon_eye_empty.svg'
import comment from '../../assets/img/icon_comment.svg'
import time from '../../assets/img/icon_time.svg'
import heart from '../../assets/img/icon_heart.svg'

const CommDetail = () => {
    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
                <div className="comm__detail">
                    <div className="detail__header">
                        <img src={Fire} alt="fire" />
                        <h2>Hot 게시판</h2>
                    </div>
                    <div className="detail__box">
                        <div className="header">
                            <h3>마케팅 초기 영업 메시지 작성기 (마케팅 DM)</h3>
                            <p>익명</p>
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
                </div>
            </div>
        </>
    )
}

export default CommDetail