import React from "react";
import { images } from "../../assets/js/consts";

const MetaTags = ({ _relativeURL, _ID }) => {
  const generateLink = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <React.Fragment>
      {/* <link
        href={generateLink(images.common.favicon)}
        rel="shortcut icon"
        type="image/x-icon"
      /> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta name="description" content="" />
      <meta name="title" content='' />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:url" content='' />
      <meta property="og:image" content="" />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:site_name" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image" content="" />
    </React.Fragment>
  );
};

export default MetaTags;
