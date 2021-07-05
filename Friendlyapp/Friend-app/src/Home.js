// a component which we can access it with/without user login. By default we’ll open this component.


import React from 'react'
import Banner from "./components/Banner";
import bg1 from './Image/bg1.jpg'
import bg2 from './Image/bg2.jpg'
import bg3 from './Image/bg3.jpg'
import bg4 from './Image/bg4.jpg'
import bg5 from './Image/bg5.jpg'
import bg6 from './Image/bg6.jpg'




// The stracture of fullpage for Home.js

function Home() {
  return (
    <main>
    <div className="asdkl">
    <Banner css='banner1' />
    <img src={bg1} alt="bg1" className="bg1"/>
    <img src={bg2} alt="bg2" className="bg2"/>
    <img src={bg3} alt="bg3" className="bg3"/>
    <img src={bg4} alt="bg4" className="bg4"/>
    <img src={bg5} alt="bg4" className="bg5"/>
    <img src={bg6} alt="bg4" className="bg6"/>
    
    </div>
    </main>
  );
}


export default Home;
