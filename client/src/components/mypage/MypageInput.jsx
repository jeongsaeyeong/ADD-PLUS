import React, { useEffect, useState } from 'react'
import MypageSide from './MypageSide'
import { useSelector } from 'react-redux'
import axios from 'axios'
import ScoreListArea from '../score/ScoreList/ScoreListArea'
import ScoreInputArea from '../score/ScoreInput/ScoreInputArea'
import ScoreWrap from '../score/ScoreWrap/ScoreWrap'
import ScoreCont from '../score/ScoreWrap/ScoreCont'
import MoigosaArea from './Moigosa/MoigosaArea'

const MypageInput = () => {
    const user = useSelector((state) => state.user)

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

    return (
        <>
            <div className='score__Wrap mypage_Wrap'>
                <MypageSide />

                <div className='main'>
                    <div className="score_title">
                        <h3>성적 입력하기</h3>
                    </div>
                    <div className="score_cont">
                        <table>
                            <tr>
                                <td>학기별</td>
                                <th>
                                    <ScoreWrap GradeChange={GradeChange} grade={grade} />
                                    <ScoreCont setYear={setYear} grade={grade} />

                                    <table className="score_list">
                                        <ScoreListArea scoreList={scoreList} user={user} getScore={getScore} />
                                        <ScoreInputArea getALlScore={getALlScore} getScore={getScore} user={user} grade={grade} />
                                    </table>

                                    <button className='scorePlus_btn'>추가하기 +</button>
                                </th>
                            </tr>
                            <MoigosaArea user={user} />
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MypageInput