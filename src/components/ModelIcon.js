import React from "react";
import { moon, sun } from "./constants";

const ModelIcon = ({ dark }) => (
  <div className="media-icon">
    {dark ? <img src={moon} /> : <img src={sun} />}
  </div>
);

export default ModelIcon;
