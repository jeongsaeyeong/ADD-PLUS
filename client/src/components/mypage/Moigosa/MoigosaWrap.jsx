import React from 'react'

const MoigosaWrap = ({ GradeChange, grade }) => {
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
                        6월<button className={grade === '1학년 6월' ? 'active' : ''} onClick={() => { GradeChange('1학년 6월'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        9월<button className={grade === '1학년 9월' ? 'active' : ''} onClick={() => { GradeChange('1학년 9월'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        6월<button className={grade === '2학년 6월' ? 'active' : ''} onClick={() => { GradeChange('2학년 6월'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        9월<button className={grade === '2학년 9월' ? 'active' : ''} onClick={() => { GradeChange('2학년 9월'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        6월<button className={grade === '3학년 6월' ? 'active' : ''} onClick={() => { GradeChange('3학년 6월'); }}>입력</button>
                    </div>
                </th>
                <th>
                    <div>
                        9월<button className={grade === '3학년 9월' ? 'active' : ''} onClick={() => { GradeChange('3학년 9월'); }}>입력</button>
                    </div>
                </th>
            </tr>
        </table>
    )
}

export default MoigosaWrap