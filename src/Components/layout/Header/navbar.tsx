import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isActive, setIsActive] = useState<string>("Home");
  const location = useLocation();
  const navigate = useNavigate();



  const navLink = [
    { id: 1, name: "Home", path:'/'},
    { id: 2, name: "Explore", path:'explore' },
    { id: 3, name: "Genres", path:'genres' },
    { id: 4, name: "Top Authors", path:'top-Authors' },
    { id: 5, name: "Translate", path:'translate' },
  ];


  const handleNavigatedPage = (itemName:string , itemPath:string) => {
   
    setIsActive(itemName);
    
    navigate(itemPath);

  }

 React.useEffect(()=>{
   
  const currentPath = location.pathname;
  const currentItem = navLink.find(item => item.path === currentPath);

  if(currentItem){
    setIsActive(currentItem.name);
  }
  
 },[location.pathname])

  return (
    <div>
      <ul className={`flex sm:gap-7 md:gap-6 lg:gap-[30px] capitalize ${className}`}>
        {navLink.map((link) => (
         <li
            key={link.id}
            onClick={() => handleNavigatedPage(link.name, link.path)}
            className={`relative group cursor-pointer sm:text-[34px] md:text-[34px] lg:text-[12px] xl:text-[18px]
                        transition-all font-extralight duration-300 hover:font-semibold ${
              isActive === link.name ? "font-semibold text-[#33D6FF]" : ""
            }`}
          >

            {link.name}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
