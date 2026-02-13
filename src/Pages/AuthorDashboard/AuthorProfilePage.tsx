import React, { useEffect, useState } from 'react'
import Profile from './Component/Profile'
import ProfileTabNav from './Component/ProfileTabNav';
import Publications from './Component/Publications';
import CircleShadow from '../../Components/layout/CircleShadow';
import AuthorDashboard from './Component/AuthorDashboard/AuthorDashboard';


const AuthorProfilePage:React.FC = () =>  {

const [currentUser, setCurrentUser] = useState<any>('');

useEffect(()=>{
const userData = localStorage.getItem('currentUser');
    if(userData){
        setCurrentUser(JSON.parse(userData));
    }
},[]);

const [activeTab, setActiveTab] = useState<string>("Publications")


  return (
    <div className='max-w-[1920px] mx-auto mt-[172px] mb-[200px] relative overflow-hidden'>

      <CircleShadow blurClass='blur-[150px]' className="top-[516px] pointer-events-none -translate-y-1/2 left-[-100px] z-[200] bg-[radial-gradient(circle_at_center,#feb705,#FEB70580)]"/>

    <Profile CurrentUser={currentUser}/> 

    <ProfileTabNav ActivedTab={setActiveTab}/>
    
    {activeTab === "Publications" && <Publications/>}
    {activeTab === "Dashboard" && <AuthorDashboard/>}


    </div>
  )
}

export default AuthorProfilePage