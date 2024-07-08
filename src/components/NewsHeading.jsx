import { useState } from "react";
import logoname from "../assets/images/logoname.png";
import NewsMenu from "./NewsMenu";
import Newssearch from "./Newssearch";
import TopMenu from "./TopMenu";

const NewsHeading = () => {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="max-w-5xl text-2xl mx-auto w-2/4 ">
        <a href="#">
          {" "}
          <img className="responsive-image" src={logoname} alt="Logo" />
        </a>
      </div>
      <Newssearch visible={visible} setVisible={setVisible} />
      <NewsMenu setVisible={setVisible} setShow={setShow} />
      <TopMenu show={show} setShow={setShow} />
    </>
  );
};

export default NewsHeading;
