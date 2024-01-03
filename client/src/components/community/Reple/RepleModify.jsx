import axios from 'axios'
import React, { useState } from 'react'

const RepleModify = (props) => {
    const [reple, setReple] = useState(props.reple)

    const SubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            reple: reple,
            postId: props.postId,
            repleId: props.repleId
        }

        axios
            .post("/api/reple/edit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글 수정을 완료하였습니다.")
                } else {
                    alert("댓글 수정을 실패했씁니다.")
                }
                return window.location.reload()
            })
    }

    return (
        <>
            {props.editFlag ? (
                <div className={props.none ? 'report__Wrap' : "report__Wrap none"}>
                    <div className="report">
                        <div className="header">
                            <h2>수정하기</h2>
                        </div>
                        <div className="modify">
                            <p><span>*</span>수정할 내용을 입력해주세요!</p>
                            <label htmlFor="reple"></label>
                            <textarea
                                type="text"
                                value={reple}
                                onChange={(e) => { setReple(e.currentTarget.value) }}
                            />
                        </div>
                        <div className="button">
                            <ul>
                                <li onClick={() => { props.onNoneChange(!(props.none)) }}>취소</li>
                            </ul>
                            <button
                                onClick={(e) => {
                                    SubmitHandler(e)
                                }}>
                                수정
                            </button>
                        </div>
                    </div>
                </div>) : (
                <p>{props.reple.reple}</p>
            )}
        </>

    )
}

export default RepleModify