import React, { useEffect, useState } from 'react';
import profile from '../../../assets/img/default_profile.svg';
import time from '../../../assets/img/icon_time.svg';
import siren from '../../../assets/img/icon_siren.svg';
import axios from 'axios';
import moment from 'moment';
import "moment/locale/ko";
import CommButton from '../Comm/CommButton';
import RepleReport from './RepleReport';
import RepleModify from './RepleModify';

const RepleList = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [none, setNone] = useState(false);
    const [modifynone, setModifynone] = useState(false);
    const [repleList, setRepleList] = useState([]);
    const [editFlag, setEditFlag] = useState(false);
    const [reple, setReple] = useState([]);
    const [repleId, setRepleId] = useState('')


    const NoneChange = (newNone) => {
        setNone(newNone);
    };

    const ModifyNoneChange = (newNone) => {
        setModifynone(newNone);
    };

    const toggleBox = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        let body = {
            postId: props.postId
        };
        axios.post("/api/reple/getreple", body)
            .then((res) => {
                if (res.data.success) {
                    setRepleList([...res.data.repleList]);
                    setActiveIndex(null);
                }
            });
    }, [props.postId]);

    // 수정
    const HandleModify = (key) => {
        setModifynone(true)
        setReple(repleList[key].reple)
        console.log(reple)
    }

    // 삭제
    const HandleDelete = (key) => {

        console.log(repleList[key]._id)
        if (window.confirm("정말로 삭제합니까?")) {
            let body = {
                repleId: repleList[key]._id,
                postId: repleList[key].postId
            }
            axios
                .post("/api/reple/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("댓글이 삭제되었습니다.")
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    console.log(err)
                    alert("댓글 삭제 니다.")
                })
        }
    }

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY MMM Do, hh:mm") + "(수정됨)";
        } else {
            return moment(b).format("YYYY MMM Do, hh:mm");
        }
    };

    return (
        <>
            <div className="comment__Wrap">
                <CommButton postInfo={props.postInfo} params={props.params} />
                {repleList.map((reple, key) => {
                    return (
                        <div className={`comment__body ${key % 2 === 0 ? '' : 'white'}`} key={key}>
                            <div className="top">
                                <div className='profile__box'>
                                    <img src={profile} alt="profile" />
                                    <p>{reple.author.userCate}</p>
                                </div>
                                <div className="box" onClick={() => toggleBox(key)}>
                                    <div className="button">
                                        <div className={`last_box ${activeIndex === key ? '' : 'none'}`}>
                                            <button
                                                className={`report ${activeIndex === key ? '' : 'none'}`}
                                                onClick={() => { setNone(!(none)) }}
                                            >
                                                <img src={siren} alt="siren" />신고
                                            </button>
                                            <button
                                                className={`delete ${activeIndex === key ? '' : 'none'}`}
                                                onClick={() => HandleDelete(key)}
                                            >삭제하기</button>
                                            <button
                                                className={`modify ${activeIndex === key ? '' : 'none'}`}
                                                onClick={() => { HandleModify(key); setEditFlag(true); setRepleId(reple._id) }}
                                            >수정하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <p className='text'>
                                    {reple.reple}
                                </p>
                                <div>
                                    <img src={time} alt="time" />
                                    <p>{SetTime(reple.createdAt, reple.updatedAt)}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <RepleModify reple={reple} none={modifynone} onNoneChange={ModifyNoneChange} editFlag={editFlag} repleId={repleId} postId={props.postId} />
            <RepleReport none={none} onNoneChange={NoneChange} />
        </>
    );
};

export default RepleList;
