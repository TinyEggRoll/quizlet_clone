import TopNavBar from './TopNavBar'
import StudySets from './ViewOptions/StudySets'
import LogIn from './LogIn'

import { useState } from 'react';
import DashboardPageHeader from './DashboardPageHeader';
import CreateNewSet from './CreateNewSet';
import SingleStudySet from './SingleStudySet';

const MainPage = () => {
    const [userInfo, setUserInfo] = useState();

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const userFoundHandler = (data) => {
        setUserInfo(data);
        console.log("User has been set!");
        console.log(userInfo);
        setUserLoggedIn(true);
    }

    return (
        <>
            {/* {userLoggedIn ? <div> <TopNavBar userInfo={userInfo} /> <StudySets /> </div> : <LogIn userFoundHandler={userFoundHandler} />} */}
            {/* <LogIn userFoundHandler={userFoundHandler} /> */}
            <TopNavBar />
            {/* <DashboardPageHeader /> */}
            {/* <CreateNewSet /> */}
            <SingleStudySet />
        </>
    )
}

export default MainPage
