import React from 'react'

const MoigosaInputSma = ({ setSelectsmall, smallCategory }) => {
    return (
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
    )
}

export default MoigosaInputSma