import React from 'react';
import Toolbar from "./components/Navigation/Toolbar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Skills from "./components/Pages/Skills/Skills";
import MyWork from "./components/Pages/MyWork/MyWork";
import Contact from "./components/Pages/Contact/Contact";

const App = () => {
    return (
        <div>
            <Toolbar />
            <Home />
            <About />
            <Skills />
            <MyWork />
            <Contact />
        </div>
    )
}

export default App;