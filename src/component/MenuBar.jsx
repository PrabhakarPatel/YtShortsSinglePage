import React from "react";
import "../styles/menubar.css";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { GoStopwatch } from "react-icons/go";
import { FaFireAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMusicalNotes } from "react-icons/io";
import { RiMovieFill } from "react-icons/ri";
import { SiLivewire } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { LuHistory } from "react-icons/lu";
import { IoHelp } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
const MenuBar = () => {
  return (
    <>
      <main className="menuBar">
        <div className="menubar__Part1">
          <ul>
            <li>
              <IoHomeOutline size={20} style={{ marginRight: "10px" }} />
              Home
            </li>
            <li>
              <SiYoutubeshorts size={20} style={{ marginRight: "10px" }} />
              Shorts
            </li>
            <li>
              <MdOutlineSubscriptions
                size={20}
                style={{ marginRight: "10px" }}
              />
              Subsciption
            </li>
          </ul>
        </div>

        <div className="menubar__Part2">
          <ul>
            <li>
              <GrChannel size={20} style={{ marginRight: "10px" }} />
              Your channel
            </li>
            <li>
              <FaHistory size={20} style={{ marginRight: "10px" }} />
              History
            </li>
            <li>
              <MdOndemandVideo size={20} style={{ marginRight: "10px" }} />
              Your Videos
            </li>
            <li>
              <GoStopwatch size={20} style={{ marginRight: "10px" }} />
              Watch Later
            </li>
          </ul>
        </div>

        <div className="menubar__Part3">
          <ul>
            <li>
              <FaFireAlt size={20} style={{ marginRight: "10px" }} />
              Explore
            </li>
            <li>
              <MdOutlineShoppingCart
                size={20}
                style={{ marginRight: "10px" }}
              />
              Shopping
            </li>
            <li>
              <IoMdMusicalNotes size={20} style={{ marginRight: "10px" }} />
              Music
            </li>
            <li>
              <RiMovieFill size={20} style={{ marginRight: "10px" }} />
              Movie
            </li>
            <li>
              <SiLivewire size={20} style={{ marginRight: "10px" }} />
              Live
            </li>
          </ul>
        </div>

        <div className="menubar__Part4">
          <ul>
            <li>
              <IoSettings size={20} style={{ marginRight: "10px" }} />
              Setting
            </li>
            <li>
              <LuHistory size={20} style={{ marginRight: "10px" }} />
              Report History
            </li>
            <li>
              <IoHelp size={20} style={{ marginRight: "10px" }} />
              Help
            </li>
            <li>
              <MdOutlineFeedback size={20} style={{ marginRight: "10px" }} />
              Send FeedBack
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default MenuBar;
