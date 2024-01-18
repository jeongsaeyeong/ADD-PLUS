import React from 'react'

const ScoreCheckCont = ({ setCheckCont, checkCont }) => {
    return (
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
    )
}

export default ScoreCheckCont