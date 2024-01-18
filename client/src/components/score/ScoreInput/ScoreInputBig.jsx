import React from 'react'

const ScoreInputBig = ({ setBigCategory }) => {
    return (
        <th>
            <div className='score_select'>
                <select name="big" id="big">
                    <option value="교과" onClick={() => { setBigCategory('교과') }}>교과</option>
                    <option value="비교과" onClick={() => { setBigCategory('비교과') }}>비교과</option>
                </select>
            </div>
        </th>
    )
}

export default ScoreInputBig