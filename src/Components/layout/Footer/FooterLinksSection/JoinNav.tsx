import React from 'react'

const JoinNav:React.FC = () => {
const navLinks = [
    {
      link: "#",
     name: "About",
    },
    {
      link: "#",
     name: "Be an author",
    },
     {
      link: "#",
     name: "StageCoins",
    },
    {
      link: "#",
     name: "Suggest Features",
    },
];

  return (
    <div className='gap-2 flex flex-col
                    md:gap-2 
                    lg:gap-3 
                    xl:gap-4 
                    2xl:gap-6
    '>

           <h1 className='font-semibold text-[15px]
                                        md:text-[16px]
                                        lg:text-[19px]
                                        xl:text-[22px]
                                        2xl:text-[25px]
           
           '>
            join
           </h1>
            
       <ul  className='flex flex-col gap-2 font-thin py-3 text-[11px] 
                                      md:gap-3             md:text-[11px]
                                      lg:gap-4             lg:text-[13px]
                                      xl:gap-5             xl:text-[15px]
                                      2xl:gap-6            2xl:text-[20px]
        
        '>

            {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                {item.name}
              </a>
            </li>
             ))}

        </ul>

        </div>
  )
}

export default JoinNav