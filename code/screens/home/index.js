import React from "react";
import Indicator from "../../common/Indicator";
import { handleUrl } from "../../utils";
import Cantina from "./Cantina";
import Main from "./Main";
import Species from "./Species";
import Variations from "./Variations";
import Pve from './Pve'
import Pvp from './Pvp'
import { Overlay, Video } from '../../common'
import Navbar from "../../Navbar";
import Scholarships from "./Scholarships";
import Overlays from "./Overlays";
import { images } from "../../../assets/js/consts";



const Home = ({ _relativeURL, _ID }) => {
  const generateLink = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };


  return (
    <div className="home">
      <Navbar />
      <Overlay src = {images.main.overlay}  />
      <Video id="main-video" className='full-screen-video' />
      
      <div className="sections" id="fullpage">
        <Main generateLink={generateLink} />
        <Cantina generateLink={generateLink} />
        <Species />
        <Variations />
        <Pve />
        <Pvp />
        <Scholarships />
      </div>
      <Indicator />

    </div>
  );
};

export default Home;
