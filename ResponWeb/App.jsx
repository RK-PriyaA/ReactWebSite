import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Nav from "./Nav";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";

const App = () =>{
    return(
        <>
        <Nav/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
        </Switch>
        <Footer/>
        </>
    );
}
export default App;