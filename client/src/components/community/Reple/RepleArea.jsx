import React from 'react'
import RepleList from './RepleList'
import RepleWrite from './RepleWrite'

const RepleArea = (props) => {
    return (
        <>
            <RepleList postInfo={props.postInfo} postId={props.postId} />
            <RepleWrite postId={props.postId} />
        </>
    )
}

export default RepleArea