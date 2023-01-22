import React from "react";

import HeaderMenu from "./header/header.js";
import Main from './main/main.js';
// import About from './about/About'
import Skills from './skills/Skills.js'
import Portafolio from './portafolio/Portafolio.js'
// import Blog from './blog/Blog'
import Footer from "./footer/footer.js";
import Network from "./network/Network.js";


const App = () => {
  return (
    <>
      <HeaderMenu />
			<Main/>
			<Portafolio />
	    <Skills/>
			<Network/>
			<Footer />
    </>
  );
};

export default App;
