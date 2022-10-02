import React from "react";
import loader from "../images/loader.gif";

function Loader() {
  return (
    <div>
      <img style={{ paddingTop: "10vh" }} src={loader} alt="image not found" />
    </div>
  );
}

export default Loader;
