import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

import Join01 from './components/user/Join/Join01.jsx'
import Join02 from './components/user/Join/Join02.jsx'
import Join03 from './components/user/Join/Join03.jsx'
import Join04 from './components/user/Join/Join04.jsx'

import Login from './components/user/Login.jsx'

import Find from './components/user/FIndPass/Find.jsx'
import Find02 from './components/user/FIndPass/Find02.jsx'
import Find03 from './components/user/FIndPass/Find03.jsx'

import FindId from './components/user/FindId/FindId.jsx'
import FindId02 from './components/user/FindId/FindId02.jsx'
import FindId03 from './components/user/FindId/FindId03.jsx'

import Comm from './components/community/Comm/Comm.jsx'
import CommWrite from './components/community/Comm/CommWrite.jsx'

import Header from './components/layout/Header.jsx'
import Home from './page/Home.jsx'
import CommModify from './components/community/Comm/CommModify.jsx'

import Score from './components/score/Score.jsx'

import CommArea from './components/community/Comm/CommArea.jsx'
import MypageInput from './components/mypage/MypageInput.jsx'
import MypageScore from './components/mypage/MypageScore.jsx'
import MypageActive from './components/mypage/MypageActive.jsx'
import MypageCollege from './components/mypage/MypageCollege.jsx'
import MypagePoint from './components/mypage/MypagePoint.jsx'
import MypageDisplay from './components/mypage/MypageDisplay.jsx'
import MypageMyinfo from './components/mypage/MypageMyinfo/MypageMyinfo.jsx'
import MypageTarget from './components/mypage/MypageTarget.jsx'


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser())
      }
    })
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/comm' element={<Comm />}></Route>
        <Route path='/commwrite' element={<CommWrite />}></Route>
        <Route path='/commdetail/:postNum' element={<CommArea />}></Route>
        <Route path='/commmodify/:postNum' element={<CommModify />}></Route>

        <Route path='/join01' element={<Join01 />}></Route>
        <Route path='/join02/:cate' element={<Join02 />}></Route>
        <Route path='/join03/:cate' element={<Join03 />}></Route>
        <Route path='/join04' element={<Join04 />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/find02/:userId' element={<Find02 />}></Route>
        <Route path='/find03' element={<Find03 />}></Route>

        <Route path='/findId' element={<FindId />}></Route>
        <Route path='/findId02/:userEmail' element={<FindId02 />}></Route>
        <Route path='/findId03' element={<FindId03 />}></Route>

        <Route path='/score' element={<Score />}></Route>

        <Route path='/mypage' element={<MypageScore />}></Route>
        <Route path='/mypageInput' element={<MypageInput />}></Route>
        <Route path='/mypageActive' element={<MypageActive />}></Route>
        <Route path='/mypageCollege' element={<MypageCollege />}></Route>
        <Route path='/mypagePoint' element={<MypagePoint />}></Route>
        <Route path='/mypageDisplay' element={<MypageDisplay />}></Route>
        <Route path='/mypageMyinfo' element={<MypageMyinfo />}></Route>
        <Route path='/mypageTarget' element={<MypageTarget />}></Route>

      </Routes>
    </>
  )
}

export default App