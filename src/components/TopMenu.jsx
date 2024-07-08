import React from "react";
import { ImCross } from "react-icons/im";

const TopMenu = ({ show, setShow }) => {
  const showhandler = () => {
    setShow(false);
  };
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="max-w-5xl mx-auto absolute top-16 left-40 w-full ">
        <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 mx-auto p-6 bg-slate-200/95   h-[156px] ">
          <div className="absolute right-10 top-8">
            <div className="max-w-5xl mx-auto">
              {" "}
              <ImCross onClick={showhandler} />
            </div>
          </div>
          <ul className="text-center">
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
          </ul>
          <ul className="text-center">
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
          </ul>
          <ul className="text-center">
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
          </ul>
          <ul className="text-center">
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
            <li>dhsfghd </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
