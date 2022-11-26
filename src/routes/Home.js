import React from "react";
import './Home.css'
import Imgs from '../assests/cube.png'

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <h1 className="main-content">
            Emerging Web3 Ventures <br/>Turst Our Smart Contract <br/>Audits & Diligence Services
          </h1>
          <p className="sub-content">
            QuillAudits, Making web3 a safer place
          </p>
          <div className="btn_control">
            <button className="btn__0">Request Free Quote</button>
            <button className="btn__1">Explore Services</button>
          </div>
        </div>
      <div>
        <img className="img" src={Imgs} alt='' />
      </div>
        
      </div>
    </>
  );
}

export default Home;


