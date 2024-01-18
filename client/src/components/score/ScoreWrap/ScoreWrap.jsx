import React from 'react'

const ScoreWrap = ({ GradeChange, grade }) => {
    return (
        <table className='score_wrap'>
            <tr>
                <td colSpan={2}>1학년</td>
                <td colSpan={2}>2학년</td>
                <td colSpan={2}>3학년</td>
            </tr>
            <tr>
                <th>
                    <div>
                        1학기<button className={grade === '1학년 1학기' ? 'active' : ''} onClick={() => { GradeChange('1학년 1학기'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        2학기<button className={grade === '1학년 2학기' ? 'active' : ''} onClick={() => { GradeChange('1학년 2학기'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        1학기<button className={grade === '2학년 1학기' ? 'active' : ''} onClick={() => { GradeChange('2학년 1학기'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        2학기<button className={grade === '2학년 2학기' ? 'active' : ''} onClick={() => { GradeChange('2학년 2학기'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        1학기<button className={grade === '3학년 1학기' ? 'active' : ''} onClick={() => { GradeChange('3학년 1학기'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        2학기<button className={grade === '3학년 2학기' ? 'active' : ''} onClick={() => { GradeChange('3학년 2학기'); }}>입력</button>
                    </div>
                </th>
            </tr>
        </table>
    )
}

export default ScoreWrap