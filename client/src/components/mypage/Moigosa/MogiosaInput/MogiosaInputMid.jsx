import React from 'react'

const MoigosaInputMid = ({ setMiddleCategory, CategoryChange }) => {
    return (
        <th>
            <div className='score_select'>
                <select name="middle" id="middle" onChange={(e) => { setMiddleCategory(e.target.value); CategoryChange() }}>
                    <option value="국어">국어</option>
                    <option value="수학">수학</option>
                    <option value="영어">영어</option>
                    <option value="사회">사회</option>
                    <option value="과학">과학</option>
                </select>
            </div>
        </th>
    )
}

export default MoigosaInputMid