import React, { useState, useEffect } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener;
  }, []);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      {" "}
      <h1>window</h1>
      <h2>size:{size} PX</h2>
    </div>
  );
};
const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

export default ShowHide;
