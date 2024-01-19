import React from 'react'
import MoigosaDelete from './MoigosaDelete'

const MoigosaListMap = ({ scoreList, user, getScore }) => {
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
                        <th>
                            <div className=''>
                                {list.small}
                            </div>
                        </th>
                        <th className='width100 m_w50'>
                            <div>
                                {list.score}
                            </div>
                        </th>
                        <MoigosaDelete list={list} user={user} getScore={getScore} />
                    </tr>
                ))
            }
        </>
    )
}

export default MoigosaListMap