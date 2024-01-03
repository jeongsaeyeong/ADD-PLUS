import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'

const CommReport = ({ none, onNoneChange }) => {

    const user = useSelector((state) => state.user)
    let params = useParams();

    const [selected, setSelected] = useState('광고');

    const RadioChange = (event) => {
        setSelected(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            cate: 'post',
            postNum: params.postNum,
            reason: selected,
            uid: user.uid
        }

        axios.post("/api/report/post", body)
            .then((res) => {
                if (res.data.success) {
                    alert("신고 완료되었습니다.");
                    onNoneChange(!(none))
                } else {
                    alert("신고 실패하였습니다.");
                }
            })
    }

    return (
        <>
            <div className={none ? 'report__Wrap' : "report__Wrap none"}>
                <div className="report">
                    <div className="header">
                        <h2>신고하기</h2>
                        <p><span>*</span>허위신고일 경우, 신고자의 서비스 활동이 제한될 수 있으니 신중하게 신고해주세요.</p>
                    </div>
                    <div className="box">
                        <h3>신고사유</h3>
                        <div>
                            <input
                                type="radio"
                                value='광고'
                                checked={selected === '광고'}
                                onChange={RadioChange}
                            />
                            <p>광고/음란성 댓글</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value='욕설'
                                checked={selected === '욕설'}
                                onChange={RadioChange}
                            />
                            <p>욕설/반말/부적절한 언어</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value='분란'
                                checked={selected === '분란'}
                                onChange={RadioChange}
                            />
                            <p>회원 분란 유도</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value='비방'
                                checked={selected === '비방'}
                                onChange={RadioChange}
                            />
                            <p>회원 비방</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value='정치'
                                checked={selected === '정치'}
                                onChange={RadioChange}
                            />
                            <p>지나친 정치/종교 논쟁</p>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value='도배'
                                checked={selected === '도배'}
                                onChange={RadioChange}
                            />
                            <p>도배성 댓글</p>
                        </div>
                    </div>
                    <div className="button">
                        <ul>
                            <li onClick={() => { onNoneChange(!(none)) }}>취소</li>
                        </ul>
                        <button
                            onClick={(e) => { onSubmit(e) }}
                        >
                            확인
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CommReport