import axios from 'axios'
import React from 'react'

const ScoreDelete = ({ list, user, getScore, setUniMsg }) => {

    const deleteScore = (e) => {
        e.preventDefault()

        const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
        if (!confirmDelete) {
            return; // 사용자가 취소하면 함수 종료
        }

        let body = {
            _id: list._id,
            uid: user.uid
        }

        axios.post('/api/score/delete', body)
            .then((res) => {
                if (res.data.success) {
                    alert("삭제에 성공하였습니다.")
                    getScore();
                    setUniMsg('')
                } else {
                    alert("삭제에 실패하였습니다.")
                }
            })
    }

    return (
        <th className='width100 m_delete'>
            <button onClick={(e) => { deleteScore(e) }}>삭제</button>
        </th>
    )
}

export default ScoreDelete