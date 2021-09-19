import React from "react";
import Common from "./Common";
import about from "./image/About.jpg";

const About = () =>{
    return(
        <>
        <Common
        name = "Welcome to About page"
        visit = "/Contact"
        btname = "Contact Now"
        imgsrc= {about}
        />
        </>
    );
}
export default About;