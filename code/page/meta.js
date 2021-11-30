import React from "react";
import { images } from "../../assets/js/consts";
import { handleUrl } from '../utils'

const MetaTags = ({ _relativeURL, _ID }) => {
  const generateLink = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <React.Fragment>
      {<link
        href={generateLink(images.favIcon)}
        rel="shortcut icon"
        type="image/x-icon"
      />}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta name="description" content="We need a description" />
      <meta name="title" content='Cantina Royale' />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cantina Royale" />
      <meta property="og:description" content="" />
      <meta property="og:url" content='https://cantinaroyale.io' />
      <meta property="og:image" content={generateLink(images.social)} />
      <meta property="og:image:secure_url" content={generateLink(images.social)} />
      <meta property="og:site_name" content="Cantina Royale" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image" content={generateLink(images.social)} />
    </React.Fragment>
  );
};

export default MetaTags;
