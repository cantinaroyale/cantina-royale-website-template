import React from "react";
import Indicator from "../../common/Indicator";
import { handleUrl } from "../../utils";
import Cantina from "./Cantina";
import Main from "./Main";
import Species from "./Species";
import Variations from "./Variations";
import Pve from './Pve'
import Pvp from './Pvp'

import Navbar from "../../Navbar";



const Home = ({ _relativeURL, _ID }) => {
  const generateLink = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };
  return (
    <div className="home">
       <Navbar />
      <section className="overlay" />
      <div className="sections" id="fullpage">
        <Main generateLink={generateLink} />
        <Cantina generateLink={generateLink} />
        <Species />
        <Variations />
        <Pve />
        <Pvp />
      </div>
      <Indicator />
      
    </div>
  );
};

export default Home;
