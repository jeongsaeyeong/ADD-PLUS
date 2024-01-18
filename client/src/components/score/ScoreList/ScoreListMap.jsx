import React from 'react'
import ScoreDelete from './ScoreDelete'

const ScoreListMap = ({ scoreList, user, getScore, setUniMsg }) => {
    return (
        <>
            {
                scoreList.map((list, key) => (
                    <tr className='score_mobile_list' key={key}>
                        <th className='no'>{key + 1}</th>
                        <th>
                            <div className=''>
                                <p>{list.big}</p>
                            </div>
                        </th>
                        <th>
                            <div className=''>
                                <p>{list.middle}</p>
                            </div>
                        </th>
                        <th>
                            <div className=''>
                                {list.small}
                            </div>
                        </th>
                        <th className='width100'>
                            <div>
                                <input type='text' placeholder='개정년도' />
                            </div>
                        </th>
                        <th className='width100 m_w50'>
                            <div>
                                {list.count}
                            </div>
                        </th>
                        <th className='width100 m_w50'>
                            <div>
                                {list.score}
                            </div>
                        </th>
                        <ScoreDelete list={list} user={user} getScore={getScore} setUniMsg={setUniMsg} />
                    </tr>
                ))
            }
        </>
    )
}

export default ScoreListMap