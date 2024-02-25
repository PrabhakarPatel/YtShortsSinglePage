import React, { useRef, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import "../styles/video.css";
const Video = () => {
  const [toggleButton, setToogleButton] = useState(false);
  const playPause = useRef(null);

  const handleChange = () => {
    const playPauseBTn = playPause.current;
    if (playPauseBTn.paused) {
      playPauseBTn.play();
      setToogleButton(true);
    } else {
      playPauseBTn.pause();
      setToogleButton(false);
    }
  };
  const upHandleChange = () => {
    window.scrollTo(0, -900);
  };
  const downHandleChange = () => {
    window.scrollTo(0, 900);
  };
  return (
    <>
      <main className="video">
        <div>
          <video ref={playPause}>
            <source
              src={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              type="video/mp4"
            />
          </video>
          <button onClick={handleChange}>
            {toggleButton ? (
              <CiPlay1 size={20} className="playbutton" />
            ) : (
              <CiPause1 size={20} className="playbutton" />
            )}
          </button>

          <div className="heading">
            <img
              src={
                "https://media.licdn.com/dms/image/D5603AQEYX3oqy3CfBA/profile-displayphoto-shrink_400_400/0/1705384329300?e=1714608000&v=beta&t=KmoNl2M06n9vgy4dI7myUQPGIe2itepAzW4mt72yBaM"
              }
              alt=""
            />
            <h1
              style={{
                color: "#271f1e",
                fontSize: "18px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              Video Name
            </h1>
            <button>Subscribe</button>
          </div>
        </div>

        <button onClick={upHandleChange} className="upArrow">
          <FaArrowUp size={20} />
        </button>
        <button onClick={downHandleChange} className="downArrow">
          <FaArrowDown size={20} />
        </button>
        <aside className="icons__display">
          <AiOutlineLike />
          <AiOutlineDislike />
          <MdOutlineInsertComment />
          <IoMdShareAlt />
          <PiDotsThreeOutlineVerticalFill />
          <img
            src={
              "https://media.licdn.com/dms/image/D5603AQEYX3oqy3CfBA/profile-displayphoto-shrink_400_400/0/1705384329300?e=1714608000&v=beta&t=KmoNl2M06n9vgy4dI7myUQPGIe2itepAzW4mt72yBaM"
            }
            alt=""
          />
        </aside>
      </main>
    </>
  );
};

export default Video;
