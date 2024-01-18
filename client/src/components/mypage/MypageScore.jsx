import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import axios from "axios";
import MypageSide from './MypageSide'
import MypageAll from './MypageAll'
import MypageGrade from './MypageGrade'
import MypageTest from './MypageTest'
import up_score from '../../assets/img/mypage/up_score.png'
import all_score from '../../assets/img/mypage/all_score.png'
import down_score from '../../assets/img/mypage/down_score.png'
import week_score from '../../assets/img/mypage/week_score.png'
import now_score from '../../assets/img/mypage/now_score.png'

const MypageScore = () => {

    const user = useSelector((state) => state.user);

    const [Scoreavg, setScoreavg] = useState('')
    const [scoreData, setScoreData] = useState([])
    const [isDataReady, setIsDataReady] = useState(false);
    const [sumAvg, setSumAvg] = useState(0)

    const getAndGroupe = () => {
        let body = {
            uid: user.uid,
        };

        axios.post("/api/score/getall", body)
            .then((res) => {
                if (res.data.success) {
                    const scores = res.data.list;
                    const groupedByGrade = scores.reduce((acc, currentScore) => {
                        const { grade, ...rest } = currentScore;
                        if (!acc[grade]) {
                            acc[grade] = [rest];
                        } else {
                            acc[grade].push(rest);
                        }
                        return acc;
                    }, {});

                    AvgScore(groupedByGrade);
                    setIsDataReady(true);
                } else {
                    alert("성적 불러오기에 실패하였습니다.");
                }
            });
    };

    useEffect(() => {
        getAndGroupe();
    }, [user]);

    const AvgScore = (groupedByGrade) => {
        const averageScores = {};

        for (const grade in groupedByGrade) {
            const scoresArray = groupedByGrade[grade];
            const scores = scoresArray.map(scoreData => scoreData.score);
            const sum = scores.reduce((acc, score) => acc + score, 0);
            const average = sum / scores.length;

            averageScores[grade] = average;
        }

        setScoreavg(averageScores);
        const scoresOnlyArray = Object.values(averageScores);
        setScoreData(scoresOnlyArray);
    }

    useEffect(() => {
        const sum = scoreData.reduce((acc, value) => acc + value, 0);
        const average = sum / scoreData.length;
        const formattedAverage = average.toFixed(2);
        setSumAvg(formattedAverage);

    }, [Scoreavg, scoreData]);

    return (
        <>
            <div className='mypage_Wrap'>
                <MypageSide />

                <div className='main main_color'>
                    <div className='mypage_score'>
                        <div className='mypage_all_score'>
                            <div className='all_score_title'>
                                <h3>전체 평균 등급</h3>
                                <em className='score_level'>{sumAvg}</em>
                                <p>등급 상증중! 조금만 더 화이팅! <img src={up_score} /></p>
                            </div>
                            <div className='all_score_icon'>
                                <img src={all_score} />
                            </div>
                        </div>
                        <div className='mypage_grade_score'>
                            <div className='grade_score_title'>
                                <h3>학년 평균 등급</h3>
                                <em className='score_level'>5.25</em>
                                <p>등급 하락중! 다시 힘내봐요. <img src={down_score} /></p>
                            </div>
                            <div className='grade_score_icon'>
                                <img src={week_score} />
                            </div>
                        </div>
                        <div className='mypage_now_score'>
                            <div className='now_score_title'>
                                <h3>현재 등급</h3>
                                <em className='score_level'>5.25</em>
                                <p>최근에 입력한 등급 점수입니다.</p>
                            </div>
                            <div className='now_score_icon'>
                                <img src={now_score} />
                            </div>
                        </div>
                    </div>

                    <div className='mypage_chart'>
                        <div className='mypage_grade'>
                            <h4>전체 학년 평균</h4>
                            <MypageTest />
                        </div>
                        <div className='mypage_grade'>
                            <h4>모의고사 평균</h4>
                            <MypageGrade />
                        </div>
                    </div>

                    <div className="mypage_chart_all">
                        <div className="mypage_all">
                            <h4>전체 평균 등급</h4>
                            <MypageAll scoreData={scoreData} isDataReady={isDataReady} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypageScore