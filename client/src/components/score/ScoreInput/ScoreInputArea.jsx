import React, { useEffect, useState } from 'react'
import ScoreInputBig from './ScoreInputBig';
import ScoreInputMid from './ScoreInputMid';
import ScoreInputSma from './ScoreInputSma';
import axios from 'axios';

const ScoreInputArea = ({ getALlScore, getScore, user, grade, setUniMsg }) => {
    const [bigCategory, setBigCategory] = useState('교과')
    const [middleCategory, setMiddleCategory] = useState('국어')
    const [smallCategory, setSmallCategory] = useState([]);
    const [selectsmall, setSelectsmall] = useState('고전')
    const [objectCount, setObjectCount] = useState(0)
    const [score, setScore] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();

        if (objectCount === 0 || score === 0) {
            alert('빈칸을 모두 채워주세요.')
            return
        }


        let body = {
            uid: user.uid,
            grade: grade,
            big: bigCategory,
            middle: middleCategory,
            small: selectsmall,
            count: objectCount,
            score: score
        }

        axios.post("/api/score/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("등록되었습니다")
                    getScore();
                    getALlScore();
                    setObjectCount(0)
                    setScore(0)
                    setUniMsg('')
                } else {
                    alert("성적 등록이 실패하였습니다.");
                }
            })
    }

    const CategoryChange = () => {

        switch (middleCategory) {
            case "국어":
                setSmallCategory(['고전', '고전읽기', '국어', '독서', '독서와문법', '문법', '문학', '실용국어', '심화국어', '언어와매체', '화법과작문'])
                return

            case "수학":
                setSmallCategory(['기하', '미적분', '미적분I', '미적분II', '수학', '수학I', '수학II', '확률과통계'])
                return

            case "영어":
                setSmallCategory(['실용영어I', '실전영어', '심화영어II', '영미문학읽기', '영어', '영어I', '영어II', '영어독해와작문'])
                return

            case "사회":
                setSmallCategory(['경제', '고전과윤리', '공통사회', '동아시아사', '법과사회', '법과정치', '통합사회', '사회문화', '생활과윤리', '세계사', '세계지리', '윤리와사상', '정치와법', '한국지리'])
                return

            case "과학":
                setSmallCategory(['과학', '물리학I', '물리학II', '생명과학I', '생명과학II', '지구과학I', '지구과학II', '통합과학', '화학I', '화학II'])
                return
        }
    };

    useEffect(() => {
        CategoryChange()
    }, [middleCategory])

    // 성적 입력한 거 비우기 
    const onBin = () => {
        setObjectCount(0)
        setScore(0)
    }


    return (
        <tr className='score_mobile_list'>
            <th className='no'></th>
            <ScoreInputBig setBigCategory={setBigCategory} />
            <ScoreInputMid setMiddleCategory={setMiddleCategory} CategoryChange={CategoryChange} />
            <ScoreInputSma setSelectsmall={setSelectsmall} smallCategory={smallCategory} />
            <th className='width100'>
                <div>
                    <input type='text' placeholder='개정년도' />
                </div>
            </th>
            <th className='width100 m_w50'>
                <div>
                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='단위수' value={objectCount} onChange={(e) => { setObjectCount(e.currentTarget.value) }} />
                </div>
            </th>
            <th className='width100 m_w50'>
                <div>
                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='석차등급' value={score} onChange={(e) => { setScore(e.currentTarget.value) }} />
                </div>
            </th>
            <th className='width100 m_delete'>
                <button onClick={(e) => { onBin(e) }}>취소</button>
                <button onClick={(e) => { onSubmit(e) }}>저장</button>
            </th>
        </tr>
    )
}

export default ScoreInputArea