// import React from "react";
import toi from "../assets/images/toi.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "India",
  },
  {
    title: "City",
  },
  {
    title: "Videos",
  },
  {
    title: "World",
  },
  {
    title: "Business",
  },
  {
    title: "Tech",
  },
  {
    title: "Cricket",
  },
  {
    title: "Sports",
  },
  {
    title: "Entertaiment",
  },
  {
    title: "Auto",
  },
  {
    title: "WebSeries",
  },

  {
    title: "Education",
  },
  {
    title: "Photos",
  },
];
const NewsMenu = ({ setVisible, setShow }) => {
  const searchHandler = () => {
    setVisible(true);
  };
  const showhandler = () => {
    setShow(true);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between  py-2 bg-gray-100 border-gray-800 border-b-2">
        <a className="sQ1Qx" aria-label="toi-plus">
          <img src={toi} alt="" />{" "}
        </a>
        <ul className="flex justify-self-start gap-4 items-center ">
          {menuItems.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/topic/${item.title}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center	gap-4 items-center mr-4">
          <li>
            <a href="#">
              {" "}
              <CiSearch onClick={searchHandler} />
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <FaBars onClick={showhandler} />{" "}
            </a>
          </li>
        </ul>
      </div>
      {/* ///// */}

      <div className="flex justify-between py-3 bg-gray-100 border-gray-300 border-b-[1px] ">
        <ul className="flex justify-self-start text-xs gap-6 items-center">
          <li>
            <a href="#">IN THE NEWS</a>
          </li>
          <li>
            <a href="#">T20 WORLD CUP POINTS TABLE</a>
          </li>
          <li>
            <a href="#">KANCHANJUNGHA EXPRESS ACCIDENT</a>
          </li>
          <li>
            <a href="#">T20 WORLD CUP SCHEDULE</a>
          </li>
          <li>
            <a href="#">SPEAKING TREE</a>
          </li>
          <li>
            <a href="#">REAL ESTATE</a>
          </li>
          <li>
            <a href="#">TOI DIALOGUES</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewsMenu;
