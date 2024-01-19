import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MoigosaWrap from './MoigosaWrap';
import MoigosaCont from './MoigosaCont';
import MoigosaListArea from './MoigosaListArea';
import MoigosaInputArea from './MogiosaInput/MogiosaInputArea';

const MoigosaArea = ({ user }) => {

    const [year, setYear] = useState()
    const [grade, setGrade] = useState('1학년 6월');

    const GradeChange = (e) => {
        setGrade(e);
    };

    useEffect(() => {
        getScore();
    }, [grade]);

    // 내가 학기당 입력한 성적 불러오기 
    const [scoreList, setScoreList] = useState([])

    const getScore = () => {
        let body = {
            uid: user.uid,
            grade: grade,
        }

        axios.post("/api/moiscore/get", body)
            .then((res) => {
                if (res.data.success) {
                    setScoreList([...res.data.list]);
                } else {
                    alert("성적 불러오기에 실패하였습니다.");
                }
            })
    }

    useEffect(() => {
        getScore();
    }, [user.uid]);

    return (
        <tr>
            <td>모의고사</td>
            <th>
                <MoigosaWrap GradeChange={GradeChange} grade={grade} />
                <MoigosaCont setYear={setYear} grade={grade} />

                <table className="score_list">
                    <MoigosaListArea scoreList={scoreList} user={user} getScore={getScore} />
                    <MoigosaInputArea getScore={getScore} user={user} grade={grade} />
                </table>

                <button className='scorePlus_btn'>추가하기 +</button>
            </th>
        </tr>
    )
}

export default MoigosaArea