import React from "react";

const MetaTags = ({ _relativeURL, _ID }) => {
  return (
    <React.Fragment>
      {/* <link
        href={handleUrl(images.common.favicon, _relativeURL, _ID)}
        rel="shortcut icon"
        type="image/x-icon"
      /> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta name="description" content="" />
      {/* <meta name="title" content={title} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      {/* <meta property="og:url" content={url} /> */}
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
