import React from "react";
import Common from "./Common";
import img1 from "./image/Home.png";

const Home = () =>{
    return(
        <>
          <Common
          name = "Growyour business with"
          visit = "/service"
          btname = "Get Started"
          imgsrc= {img1}
          />
        </>
    );
}
export default Home;