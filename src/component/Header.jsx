import React from "react";
import { AiFillAudio } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import "../styles/header.css";
const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="header__left">
          <CiMenuBurger size={30} />

          <SiYoutubeshorts
            style={{ marginLeft: "15px" }}
            color="red"
            size={30}
          />
          <span>Shorts</span>
        </div>
        <div className="header__center">
          <input type="text" placeholder="Search" />
          <IoSearch className="IoSearch" size={25} color="white" />
          <AiFillAudio className="aiFill" size={30} color="white" />
        </div>
        <div className="header__right">
          <img
            src={
              "https://media.licdn.com/dms/image/D5603AQEYX3oqy3CfBA/profile-displayphoto-shrink_400_400/0/1705384329300?e=1714608000&v=beta&t=KmoNl2M06n9vgy4dI7myUQPGIe2itepAzW4mt72yBaM"
            }
            alt="Cover Image"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
