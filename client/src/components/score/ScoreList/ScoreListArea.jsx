import React from 'react'
import ScoreListTitle from './ScoreListTitle'
import ScoreListMap from './ScoreListMap'

const ScoreListArea = ({ scoreList, user, getScore, setUniMsg }) => {
    return (
        <>
            <ScoreListTitle />
            <ScoreListMap scoreList={scoreList} user={user} getScore={getScore} setUniMsg={setUniMsg} />
        </>

    )
}

export default ScoreListArea