import React, { useEffect, useState } from 'react'
import ScoreSide from './ScoreSide'
import { useSelector } from 'react-redux';
import axios from 'axios';
import ScoreListArea from './ScoreList/ScoreListArea';
import ScoreInputArea from './ScoreInput/ScoreInputArea';
import ScoreWrap from './ScoreWrap/ScoreWrap';
import ScoreCont from './ScoreWrap/ScoreCont';
import ScoreCheckCont from './SocreCheck/ScoreCheckCont';
import ScoreCheckSearch from './SocreCheck/ScoreCheckSearch';
import ScoreCheckDepart from './SocreCheck/ScoreCheckDepart';
import ScoreCheckType from './SocreCheck/ScoreCheckType';

const Score = () => {
    const user = useSelector((state) => state.user)

    // 대학 정보 불러오기 
    const [searchCollege, setSearchCollege] = useState('');
    const [checkCont, setCheckCont] = useState('입결 비교');
    const [selectedType, setSelectedType] = useState('학생부교과전형')
    const [selectedDepartment, setSelectedDepartment] = useState('심리학');
    const [collegeAvg, setCollegeAvg] = useState([])
    const [UniAvg, setUniAvg] = useState(0);
    const [UniMsg, setUniMsg] = useState('')

    const getUniversity = () => {
        if (checkCont === '') {
            alert("비교 유형을 체크해주세요.")
            return
        } else if (searchCollege === '') {
            alert("대학명을 입력해주세요.")
            return
        }

        let body = {
            university: searchCollege,
            checkCont: checkCont,
            department: selectedDepartment,
            type: selectedType
        };

        axios.post('/api/university/get', body)
            .then((res) => {
                if (res.data.success) {
                    const averages = res.data.university.map(data => data.average);
                    setCollegeAvg(averages);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (collegeAvg.length > 0) {
            UniversityeAverage();
        }
    }, [collegeAvg, getUniversity]);

    const UniversityeAverage = () => {
        if (collegeAvg.length === 0) {
            return;
        }
        const sum = collegeAvg.reduce((acc, score) => acc + score, 0);
        const avg = sum / collegeAvg.length;
        setUniAvg(avg);
    };

    useEffect(() => {
        Comparison();
    }, [UniversityeAverage]);

    const Comparison = () => {
        if (UniAvg != 0) {
            if (UniAvg > scoreAvg) {
                setUniMsg("하향")
            } else if (UniAvg === scoreAvg) {
                setUniMsg("적정")
            } else {
                setUniMsg("상향")
            }
        }
    };

    const UniversityScore = () => {
        getUniversity();
    };

    // 학생 정보 입력
    const [year, setYear] = useState()
    const [grade, setGrade] = useState('1학년 1학기');

    const GradeChange = (e) => {
        setGrade(e);
    };

    useEffect(() => {
        getScore();
    }, [grade]);

    // 내가 학기당 입력한 성적 불러오기 
    const [scoreList, setScoreList] = useState([])
    const [scoreArray, setScoreArray] = useState([])

    const getScore = () => {
        let body = {
            uid: user.uid,
            grade: grade,
        }

        axios.post("/api/score/get", body)
            .then((res) => {
                if (res.data.success) {
                    setScoreList([...res.data.list]);
                    const extractedScores = res.data.list.map(item => item.score);
                    setScoreArray(extractedScores);
                    calculateAverage();
                } else {
                    alert("성적 불러오기에 실패하였습니다.");
                }
            })
    }

    const getALlScore = () => {
        let body = {
            uid: user.uid,
        }

        axios.post("/api/score/getall", body)
            .then((res) => {
                if (res.data.success) {
                    const extractedScores = res.data.list.map(item => item.score);
                    setScoreArray(extractedScores);
                } else {
                    alert("성적 불러오기에 실패하였습니다.");
                }
            })
    }

    useEffect(() => {
        getScore();
    }, [user.uid]);

    useEffect(() => {
        getALlScore();
    }, [user.uid]);

    // 나의 성적의 평균 
    const [scoreAvg, setScoreAvg] = useState();

    useEffect(() => {
        calculateAverage();
        console.log('나의 평균', scoreAvg);
    }, [scoreArray]);

    const calculateAverage = () => {
        if (scoreArray.length === 0) {
            setScoreAvg(0);
            return;
        }
        const sum = scoreArray.reduce((acc, score) => acc + score, 0);
        setScoreAvg(sum / scoreArray.length);
    };

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
                                <ScoreCheckCont setCheckCont={setCheckCont} checkCont={checkCont} />
                            </tr>
                            <tr>
                                <td>대학</td>
                                <th className='width100'>
                                    <ScoreCheckSearch setSearchCollege={setSearchCollege} searchCollege={searchCollege} />
                                </th>
                            </tr>
                            <tr>
                                <td>학과</td>
                                <th>
                                    <div className="depart">
                                        <ScoreCheckDepart
                                            selectedDepartment={selectedDepartment}
                                            setSelectedDepartment={setSelectedDepartment}
                                        />
                                        <ScoreCheckType
                                            selectedType={selectedType}
                                            setSelectedType={setSelectedType}
                                        />
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <td>성적</td>
                                <th>
                                    <ScoreWrap GradeChange={GradeChange} grade={grade} />
                                    <ScoreCont setYear={setYear} grade={grade} />

                                    <table className="score_list">
                                        <ScoreListArea scoreList={scoreList} user={user} getScore={getScore} setUniMsg={setUniMsg} />
                                        <ScoreInputArea getALlScore={getALlScore} getScore={getScore} user={user} grade={grade} setUniMsg={setUniMsg} />
                                    </table>
                                </th>
                            </tr>
                        </table>

                        <div className='score_btn'>
                            <button
                                className="scoreResult_btn"
                                onClick={() => { UniversityScore() }}
                            >결과 보기</button>
                        </div>

                        {UniMsg === '' ? (
                            <div className="score_result_txt">
                                성적을 입력하여 결과를 확인하실 수 있습니다.
                            </div>
                        ) : (
                            <div className="score_result_txt">
                                회원님의 {searchCollege} 성적비교 결과는<br />
                                <span>{UniMsg}</span> 입니다.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Score