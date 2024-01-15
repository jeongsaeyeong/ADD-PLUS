import React, { useEffect, useState } from 'react'
import ScoreSide from './ScoreSide'
import { LuSearch } from "react-icons/lu";
import { useSelector } from 'react-redux';
import axios from 'axios';

const Score = () => {
    const user = useSelector((state) => state.user)
    const [searchCollege, setSearchCollege] = useState();
    const [checkCont, setCheckCont] = useState();
    const [year, setYear] = useState()

    // 학생 정보 입력
    // 학기

    const [grade, setGrade] = useState('1학년 1학기');

    const [bigCategory, setBigCategory] = useState('교과')
    const [middleCategory, setMiddleCategory] = useState('국어')
    const [smallCategory, setSmallCategory] = useState([]);
    const [selectsmall, setSelectsmall] = useState('고전')
    const [objectCount, setObjectCount] = useState(0)
    const [score, setScore] = useState(0)

    const CategoryChange = (middle) => {
        setMiddleCategory(middle)

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
                } else {
                    alert("성적 등록이 실패하였습니다.");
                }
            })
    }

    useEffect(() => {
        CategoryChange()
    }, [middleCategory])

    useEffect(() => {
    }, [checkCont])

    // 내가 작성한 성적 불러오기 

    const [scoreList, setScoreList] = useState([])

    const getScore = () => {
        let body = {
            uid: user.uid,
            grade: grade,
        }

        axios.post("/api/score/get", body)
            .then((res) => {
                if (res.data.success) {
                    setScoreList([...res.data.list])
                } else {
                    alert("성적 불러오기에 실패하였습니다.");
                }
            })
    }

    useEffect(() => {
        getScore()
        console.log(scoreList)
    }, [])

    return (
        <>
            <div className="score__Wrap">
                <ScoreSide />
                <div className='main'>
                    <div className="score_title">
                        <h3>전체 성적 비교</h3>
                    </div>

                    <div className="score_cont">
                        <table>
                            <tr className='score01'>
                                <td>비교 유형</td>
                                <th>
                                    <div className='check_wrap'>
                                        <label htmlFor='ipgyl' className="checkCont">
                                            입결 비교
                                            <input
                                                id='ipgyl'
                                                type="radio"
                                                defaultChecked={checkCont === 'ipgyl'}
                                                name="radio"
                                                onChange={() => {
                                                    setCheckCont('ipgyl');
                                                }}
                                            />
                                            <span className="checkmark"></span>
                                        </label>

                                        <label htmlFor='suhum' className="checkCont">
                                            수험생 비교
                                            <input
                                                id='suhum'
                                                type="radio"
                                                defaultChecked={checkCont === 'suhum'}
                                                name="radio"
                                                onChange={() => {
                                                    setCheckCont('suhum');
                                                }}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>대학</td>
                                <th className='width100'>
                                    <div className="college_wrap">
                                        <input
                                            type="text"
                                            placeholder='대학명을 입력해주세요'
                                            value={searchCollege}
                                            onChange={(e) => { setSearchCollege(e.currentTarget.value) }}
                                        />
                                        <LuSearch />
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>학과</td>
                                <th>
                                    <div className="depart">
                                        <div className='depart_wrap'>
                                            <p className='depart_title'>학과 선택</p>
                                            <ul>
                                                <li className='active'>심리학</li>
                                                <li>사회학</li>
                                                <li>정치외교과</li>
                                                <li>국제학</li>
                                                <li>아동 가족학</li>
                                                <li>정치외교과</li>
                                                <li>유아교육과</li>
                                                <li>패션디자인과</li>
                                                <li>경제학과</li>
                                                <li>심리학</li>
                                                <li>사회학</li>
                                                <li>정치외교과</li>
                                                <li>국제학</li>
                                                <li>아동 가족학</li>
                                                <li>정치외교과</li>
                                                <li>유아교육과</li>
                                                <li>패션디자인과</li>
                                                <li>경제학과</li>
                                                <li>심리학</li>
                                                <li>사회학</li>
                                                <li>정치외교과</li>
                                                <li>국제학</li>
                                                <li>아동 가족학</li>
                                                <li>정치외교과</li>
                                                <li>유아교육과</li>
                                                <li>패션디자인과</li>
                                                <li>경제학과</li>
                                            </ul>
                                        </div>
                                        <div className='type_wrap'>
                                            <p className='depart_title'>전형 선택</p>
                                            <ul>
                                                <li>심리학</li>
                                                <li>사회학</li>
                                                <li>정치외교과</li>
                                                <li className='active'>국제학</li>
                                                <li>아동 가족학</li>
                                                <li>정치외교과</li>
                                                <li>유아교육과</li>
                                                <li>패션디자인과</li>
                                                <li>경제학과</li>
                                                <li>심리학</li>
                                                <li>사회학</li>
                                                <li>정치외교과</li>
                                                <li>국제학</li>
                                                <li>아동 가족학</li>
                                                <li>정치외교과</li>
                                                <li>유아교육과</li>
                                                <li>패션디자인과</li>
                                                <li>경제학과</li>
                                                <li>심리학</li>
                                                <li>사회학</li>
                                                <li>정치외교과</li>
                                                <li>국제학</li>
                                                <li>아동 가족학</li>
                                                <li>정치외교과</li>
                                                <li>유아교육과</li>
                                                <li>패션디자인과</li>
                                                <li>경제학과</li>
                                            </ul>
                                        </div>
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <td>성적</td>
                                <th>
                                    <table className='score_wrap'>
                                        <tr>
                                            <td colSpan={2}>1학년</td>
                                            <td colSpan={2}>2학년</td>
                                            <td colSpan={2}>3학년</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    1학기<button className={grade === '1학년 1학기' ? 'active' : ''} onClick={() => setGrade('1학년 1학기')}>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    2학기<button className={grade === '1학년 2학기' ? 'active' : ''} onClick={() => setGrade('1학년 2학기')}>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    1학기<button className={grade === '2학년 1학기' ? 'active' : ''} onClick={() => setGrade('2학년 1학기')}>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    2학기<button className={grade === '2학년 2학기' ? 'active' : ''} onClick={() => setGrade('2학년 2학기')}>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    1학기<button className={grade === '3학년 1학기' ? 'active' : ''} onClick={() => setGrade('3학년 1학기')}>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    2학기<button className={grade === '3학년 2학기' ? 'active' : ''} onClick={() => setGrade('3학년 2학기')}>입력</button>
                                                </div>
                                            </th>
                                        </tr>
                                    </table>

                                    <div className="score_cont">
                                        <p className="score_choice_title">{grade}</p>
                                        <div className="score_select">
                                            <select name="year" id="year">
                                                <option value="2024" onClick={() => { setYear('2024') }}>2024 학년도</option>
                                                <option value="2023" onClick={() => { setYear('2023') }}>2023 학년도</option>
                                                <option value="2022" onClick={() => { setYear('2022') }}>2022 학년도</option>
                                            </select>
                                        </div>
                                    </div>

                                    <table className="score_list">


                                        <tr>
                                            <td>번호</td>
                                            <td>교과종류 구분</td>
                                            <td>교과</td>
                                            <td colSpan="2">과목</td>
                                            <td>단위수</td>
                                            <td>석차등급</td>
                                            <td></td>
                                        </tr>

                                        {scoreList.map((list, key) => {
                                            <tr className='score_mobile_list' key={key}>
                                                <th className='no'>{key + 1}</th>
                                                <th>
                                                    <div className='score_select'>
                                                        <p>{list.big}</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className='score_select'>
                                                        <p>{list.middle}</p>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div className='score_select'>
                                                        {list.small}
                                                    </div>
                                                </th>
                                                <th className='width100'>
                                                    <div>
                                                        <input type='text' placeholder='년도' />
                                                    </div>
                                                </th>
                                                <th className='width100 m_w50'>
                                                    <div>
                                                        {list.count}
                                                    </div>
                                                </th>
                                                <th className='width100 m_w50'>
                                                    <div>
                                                        {list.score}
                                                    </div>
                                                </th>
                                            </tr>
                                        })}

                                        {/* <tr className='score_mobile_list'>
                                            <th className='no'>1</th>
                                            <th>
                                                <div className='score_select'>
                                                    <select name="big" id="big">
                                                        <option value="교과" onClick={() => { setBigCategory('교과') }}>교과</option>
                                                        <option value="비교과" onClick={() => { setBigCategory('비교과') }}>비교과</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='score_select'>
                                                    <select name="middle" id="middle" onChange={(e) => CategoryChange(e.target.value)}>
                                                        <option value="국어">국어</option>
                                                        <option value="수학">수학</option>
                                                        <option value="영어">영어</option>
                                                        <option value="사회">사회</option>
                                                        <option value="과학">과학</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='score_select'>
                                                    <select name="small" id="small" onChange={(e) => setSelectsmall(e.target.value)}>
                                                        {smallCategory.map((category, key) => (
                                                            <option key={key} value={category}>
                                                                {category}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </th>
                                            <th className='width100'>
                                                <div>
                                                    <input type='text' placeholder='년도' />
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
                                                <button>삭제</button>
                                                <button onClick={(e) => { onSubmit(e) }}>저장</button>
                                            </th>
                                        </tr> */}
                                    </table>

                                    <button className='scorePlus_btn'>추가하기 +</button>
                                </th>
                            </tr>
                        </table>

                        <div className='score_btn'>
                            <button className="scoreResult_btn">결과 보기</button>
                        </div>

                        <div className="score_result_txt">
                            회원님의 수험생 성적비교 결과는<br />
                            상위 <span>4%</span> 수준 입니다.
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Score