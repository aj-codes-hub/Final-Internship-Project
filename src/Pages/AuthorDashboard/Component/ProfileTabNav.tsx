import React, { useState } from 'react'

interface ProfileNavProps {
    ActivedTab:(value: string) => void
}

const ProfileTabNav:React.FC<ProfileNavProps> = ({ActivedTab}) => {

const buttonArray = [
    {name:"Publications"},
    {name:"Dashboard"},
    {name:"MoodBoards"},
    {name:"Appreciations"},
    {name:"Insights"},
    {name:"Draft"},
];

const [isActive, setIsActive] = useState<string>("Publications")


  return (
    <div className='w-full border-b border-[#444E65] mt-[86px] max-w-[1170px] mx-auto text-[16px] flex justify-between'>
       {buttonArray.map((item, index) => (
          <button onClick={()=> {
                    setIsActive(item.name)
                    ActivedTab(item.name)
                   }}
                  key={index}
                  className={`w-[160px] py-[8px] cursor-pointer 
                            ${isActive === item.name 
                              ? "border-b-[2px] text-[#FEB705]" 
                              : "hover:text-[#b7b3a9] hover:border-b-[2px]"}`
                              }>
                {item.name}
        </button>
       ))}
    </div>
  )
}

export default ProfileTabNav