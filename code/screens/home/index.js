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
import { images } from "../../../assets/js/consts";
import Apes from "./Apes";
import Partners from "./Partners";



const Home = ({ _relativeURL, _ID }) => {
  const generateLink = (url) => {
    return handleUrl(url, _relativeURL, _ID);
  };


  return (
    <div className="home">
      <Navbar generateLink = {generateLink} />
      <Overlay src = {generateLink(images.main.overlay)}  />
      <Video id="main-video" className='full-screen-video' />
      
      <div className="sections" id="fullpage">
        <Main generateLink={generateLink} />
        <Cantina generateLink={generateLink} />
        <Species generateLink = {generateLink} />
        <Variations generateLink = {generateLink} />
        <Pve generateLink = {generateLink} />
        <Pvp generateLink = {generateLink} />
        <Scholarships generateLink = {generateLink} />
        <Apes generateLink = {generateLink} />
        <Partners generateLink = {generateLink} />
      </div>
      <Indicator generateLink=  {generateLink} />

    </div>
  );
};

export default Home;
