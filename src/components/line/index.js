import React from "react";

const line = {
  width: '1px',
  height: "100%",
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%)",
  background: 'rgba(255,255,255,.05)',
};
const Line = () => {
  return <div style={line} />;
};

export default Line;
