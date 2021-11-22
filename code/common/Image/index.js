import React from "react";

const Image = ({ customClassName = "", src }) => {
  const className = `${customClassName} img`;
  return (
    <figure className={className}>
      <img src={src} />
    </figure>
  );
};

export default Image;
