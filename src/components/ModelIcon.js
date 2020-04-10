import React from "react";

import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";

const ModelIcon = ({ dark }) => (
  <div className="media-icon">
    {dark ? <img src={moon} /> : <img src={sun} />}
  </div>
);

export default ModelIcon;
