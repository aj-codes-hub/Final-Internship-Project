import React, { useState } from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isActive, setIsActive] = useState<string>("Home");

  const navLink = [
    { id: 1, name: "Home" },
    { id: 2, name: "Explore" },
    { id: 3, name: "Genres" },
    { id: 4, name: "Top Authors" },
    { id: 5, name: "Translate" },
  ];

  return (
    <div>
      <ul className={`flex sm:gap-7 md:gap-6 lg:gap-[30px] capitalize ${className}`}>
        {navLink.map((link) => (
         <li
            key={link.id}
            onClick={() => setIsActive(link.name)}
            className={`relative group cursor-pointer sm:text-[34px] md:text-[12px] xl:text-[18px]
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
