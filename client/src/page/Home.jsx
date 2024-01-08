import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

import heartImg from '../assets/img/heart.png'
// import eyeImg from '../assets/img/eye.png'
import main_middle_ad from '../assets/img/main_middle_ad.jpg'
import main_un_ad1 from '../assets/img/Un_Ad_hywoman.png'
import main_un_ad2 from '../assets/img/Un_Ad_Sungshin.png'
import main_un_ad3 from '../assets/img/Un_Ad_Gangdong.png'
import main_un_ad4 from '../assets/img/Un_AD_sookmyung.png'
import main_map from '../assets/img/main_map.png'
import main_score from '../assets/img/main_score.png'
import main_comm from '../assets/img/main_comm.png'
import main_point from '../assets/img/main_point.png'

import { LuEye } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import axios from 'axios';
import moment from 'moment';


const Home = () => {
    const [postList, setPostList] = useState([])
    const [Today, setToday] = useState(0)
    const [Top, setTop] = useState([])

    // 추천 게시글
    const getPost = () => {
        axios.post('/api/home/post')
            .then((res) => {
                setPostList([...res.data.postList]);
                console.log(postList)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // 오늘 올라온 게시글
    const TodayPost = () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

        let body = {
            createdAt: formattedDate,
        }

        axios.post('/api/home/today', body)
            .then((res) => {
                setToday(res.data.todayList.length)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // 명예의 전당 글 
    const TopPost = () => {
        axios.post('/api/home/top')
            .then((res) => {
                setTop([...res.data.topList]);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        getPost();
        TodayPost();
        TopPost();
    }, []);

    const SetTime = (a) => {
        return moment(a).format("YYYY MMM Do");
    }

    return (
        <main id="main" role='main'>
            <div id="slider" role='slider' aria-valuenow="0">
                <Swiper
                    slidesPerView={'auto'}
                    pagination={{
                        clickable: true,
                    }}
                    loop={'true'}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 4000 }}
                    className="slider__Wrap"
                >
                    <SwiperSlide>
                        <div className="slider s1">
                            <div className="slider__text container">
                                <Link to="/" className='slider__btn'>ADD MAP</Link>
                                <h2 className='slider__title'>내가 원하는 대학교는?</h2>
                                <span className='slider__desc'>전국 대학교 위치와 정보를 한눈에 확인할 수 있습니다.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider s2">
                            <div className="slider__text container">
                                <Link to="/" className='slider__btn'>ADD MAP</Link>
                                <h2 className='slider__title'>내가 원하는 대학교는?</h2>
                                <span className='slider__desc'>전국 대학교 위치와 정보를 한눈에 확인할 수 있습니다.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider s3">
                            <div className="slider__text container">
                                <Link to="/" className='slider__btn'>ADD MAP</Link>
                                <h2 className='slider__title'>내가 원하는 대학교는?</h2>
                                <span className='slider__desc'>전국 대학교 위치와 정보를 한눈에 확인할 수 있습니다.</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div id='maine__data' className="container">
                <div id="main__left">
                    <div className="main__comm__best">
                        <h3 className='main__comm__title'>ADD <span>추천 게시글</span></h3>
                        {postList.map((post, key) => {
                            return (<div className="main__comm" key={key}>
                                <div className="main__comm__info">
                                    <div className="comm__like">
                                        <div className="emoz">😍</div>
                                        <div className="like__button">
                                        </div>
                                    </div>
                                    <div className="comm__header">
                                        <div className="category">
                                            <span className='cate_1'>{post.cate}</span>
                                        </div>
                                        <h4 className="comm__title"><Link to={`/commdetail/${post.postNum}`}>{post.title}</Link></h4>
                                    </div>
                                    <div className="comm__info">
                                        <span>
                                            {post.content}
                                        </span>
                                    </div>
                                    <div className="comm__nickname">
                                        <span>{post.author.userCate}</span>
                                    </div>
                                </div>
                                <div className="main__comm__view">
                                    <div className="comm__left">
                                        <div className="comm__view">
                                            <LuEye />
                                            <span>{post.veiwNum}</span>
                                        </div>
                                        <div className="comm__like__view">
                                            <FaRegHeart />
                                            <span>{post.likeNum}</span>
                                        </div>
                                    </div>
                                    <div className="comm__right">
                                        <div className="comm__date">
                                            <span>{SetTime(post.createdAt)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                    </div>
                    <div className="main__ad">
                        <a href="/"><img src={main_middle_ad} alt="중간 광고" /></a>
                    </div>
                    <div className="main__Un__ad">
                        <div className="un__ad">
                            <Link href="/"><img src={main_un_ad1} alt="대학교 광고" /></Link>
                        </div>
                        <div className="un__ad">
                            <Link href="/"><img src={main_un_ad2} alt="대학교 광고" /></Link>
                        </div>
                        <div className="un__ad">
                            <Link href="/"><img src={main_un_ad3} alt="대학교 광고" /></Link>
                        </div>
                        <div className="un__ad">
                            <Link href="/"><img src={main_un_ad4} alt="대학교 광고" /></Link>
                        </div>
                    </div>
                    <div className="main__menu__link">
                        <div className="menu__link">
                            <Link to="/">
                                <h4>add map</h4>
                                <span>우리 집 주변에는 어떤 대학이 있을까?</span>
                                <img src={main_map} alt="ADD MAP Link" />
                            </Link>
                        </div>
                        <div className="menu__link">
                            <Link to="/">
                                <h4>add score</h4>
                                <span>나 대학 갈 수 있을까?</span>
                                <img src={main_score} alt="ADD SCORE Link" />
                            </Link>
                        </div>
                        <div className="menu__link">
                            <Link to="/">
                                <h4>add comm</h4>
                                <span>다른 사람들은 어떻게 살까?</span>
                                <img src={main_comm} alt="ADD COMM Link" />
                            </Link>
                        </div>
                        <div className="menu__link">
                            <Link to="/">
                                <h4>add point</h4>
                                <span>내가 직접 광고를 걸 수 있다고?</span>
                                <img src={main_point} alt="ADD POINT Link" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="main__right">
                    <div className="main__today">
                        <h3>ADD <span>TODAY</span></h3>
                        <div className="today__box">
                            <span className='today__box__left'>오늘 올라온 글</span>
                            <span className='today__box__right'>{Today}</span>
                        </div>
                        <Link to="/comm" className='comm__link'>게시글 보러가기 &gt;</Link>
                    </div>

                    <div className="comm__HOF">
                        <h3 className='comm__HOF__title'>ADD <span>명예의 전당</span></h3>
                        {Top.map((top, key) => {
                            return (
                                <div className="comm__HOF__box" key={key}>
                                    <div className="main__comm__info">
                                        <div className="comm__HOF__header">
                                            <div className="comm__HOF__emoz">😍</div>
                                            <div className="comm__HOF__cate">
                                                <span className='cate_3'>{top.cate}</span>
                                            </div>
                                            <h4 className="comm__HOF__title"><Link to={`/commdetail/${top.postNum}`}>{top.title}</Link></h4>
                                        </div>
                                        <div className="comm__HOF__info">
                                            <span>
                                                {top.content}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="main__HOF__view">
                                        <div className="HOF__left">
                                            <div className="HOF__view">
                                                <LuEye />
                                                <span>{top.veiwNum}</span>
                                            </div>
                                            <div className="HOF__like__view">
                                                <FaRegHeart />
                                                <span>{top.likeNum}</span>
                                            </div>
                                        </div>
                                        <div className="HOF__right">
                                            <div className="HOF__nickname">
                                                <span>{top.author.userCate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </main >
    )
}

export default Home
