import React from "react";
import { pageImages } from "../../assets/js/consts";
import { handleUrl } from "../utils";
import MetaTags from "./meta";



const Page = ({ title, _relativeURL, _ID, main }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <MetaTags _relativeURL={_relativeURL} _ID={_ID} />

        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.6/jquery.fullPage.css"
        ></link>

        <link
          rel="stylesheet"
          href={handleUrl(`/assets/css/index.css`, _relativeURL, _ID)}
        />
      </head>
      <body>
        <div className="page-loader">Loading...</div>
        <div className="main">{main}</div>
        <div id="content" className="content">
          <div
            id="slider"
            data-images={JSON.stringify(pageImages)}
          ></div>
        </div>




        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
        <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.6/jquery.fullPage.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src={handleUrl('/assets/js/webgl/UnityLoader.js', _relativeURL, _ID)}></script>
        <script
          src={handleUrl("/assets/js/transition/sketch.js", _relativeURL, _ID)}
        />
        <script
          src={handleUrl("/assets/js/transition/demo.js", _relativeURL, _ID)}
        />
        <script type='module' src={handleUrl('/assets/js/index.js', _relativeURL, _ID)}></script>

      </body>
    </html>
  );
};

export default Page;
