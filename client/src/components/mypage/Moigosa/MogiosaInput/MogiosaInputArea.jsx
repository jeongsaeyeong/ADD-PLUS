import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MoigosaInputBig from './MogiosaInputBig';
import MoigosaInputMid from './MogiosaInputMid';
import MoigosaInputSma from './MogiosaInputSma';

const MoigosaInputArea = ({ getScore, user, grade, }) => {
    const [bigCategory, setBigCategory] = useState('교과')
    const [middleCategory, setMiddleCategory] = useState('국어')
    const [smallCategory, setSmallCategory] = useState([]);
    const [selectsmall, setSelectsmall] = useState('고전')
    const [score, setScore] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();

        if (score === 0) {
            alert('빈칸을 모두 채워주세요.')
            return
        }

        let body = {
            uid: user.uid,
            grade: grade,
            big: bigCategory,
            middle: middleCategory,
            small: selectsmall,
            score: score
        }

        axios.post("/api/moiscore/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("등록되었습니다")
                    getScore();
                    setScore(0)
                } else {
                    alert("성적 등록이 실패하였습니다.");
                }
            })
    }

    const CategoryChange = () => {

        switch (middleCategory) {
            case "국어":
                setSmallCategory(['언어와매체', '화법과작문'])
                return

            case "수학":
                setSmallCategory(['기하와 벡터', '미적분', '확률과통계'])
                return

            case "영어":
                setSmallCategory(['영어'])
                return

            case "사회":
                setSmallCategory(['세계사', '동아시아사', '법과정치', '경제', '법과정치', '사회문화', '생활과윤리', '윤리와사상', '세계지리', '한국지리'])
                return

            case "과학":
                setSmallCategory(['물리학I', '물리학II', '생명과학I', '생명과학II', '지구과학I', '지구과학II', '화학I', '화학II'])
                return
        }
    };

    useEffect(() => {
        CategoryChange()
    }, [middleCategory])

    // 성적 입력한 거 비우기 
    const onBin = () => {
        setScore(0)
    }


    return (
        <tr className='score_mobile_list'>
            <th className='no'></th>
            <MoigosaInputBig setBigCategory={setBigCategory} />
            <MoigosaInputMid setMiddleCategory={setMiddleCategory} CategoryChange={CategoryChange} />
            <MoigosaInputSma setSelectsmall={setSelectsmall} smallCategory={smallCategory} />
            <th className='width100 m_w50'>
                <div>
                    <input type='text' placeholder='개정년도' />
                </div>
            </th>
            <th className='width100 m_w50'>
                <div>
                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='점수' value={score} onChange={(e) => { setScore(e.currentTarget.value) }} />
                </div>
            </th>
            <th className='width100 m_w50'>
                <button onClick={(e) => { onBin(e) }}>취소</button>
                <button onClick={(e) => { onSubmit(e) }}>저장</button>
            </th>
        </tr>
    )
}

export default MoigosaInputArea