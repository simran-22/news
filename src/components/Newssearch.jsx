import { useState } from "react";
import { ImCross } from "react-icons/im";
import { redirect } from "react-router-dom";

const Newssearch = ({ visible, setVisible }) => {
  const [input, setInput] = useState("");
  const changehandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  const searchHandler = () => {
    window.location.href = "/topic/" + input;
    // return redirect("/topic/" + input);
  };

  return (
    <div className="text-center w-full flex justify-center relative">
      <div className=" w-full max-w-5xl mx-auto fixed flex justify-center items-center bg-red-100/95 p-16  ">
        <input
          onChange={changehandler}
          type="text"
          placeholder="Type here..."
          className="border p-2 w-3/4 outline-none  "
          value={input}
        />{" "}
        <button onClick={searchHandler} className="bg-red-500 py-2 px-4">
          SEARCH
        </button>
        <div className="absolute right-10">
          {/* <ImCross onClick={showhandler} /> */}
          <ImCross onClick={handleClose} />
        </div>
      </div>
    </div>
  );
};

export default Newssearch;
