import React from 'react'
import MoigosaListTitle from './MoigosaListTitle'
import MoigosaListMap from './MoigosaListMap'

const MoigosaListArea = ({ scoreList, user, getScore }) => {
    return (
        <>
            <MoigosaListTitle />
            <MoigosaListMap scoreList={scoreList} user={user} getScore={getScore} />
        </>
    )
}

export default MoigosaListArea