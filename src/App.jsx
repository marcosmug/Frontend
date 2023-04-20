import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";

const App = () => {
    return (
    <div className="app">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    </div>
    );
};

export default App;