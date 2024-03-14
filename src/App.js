import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./component/ToTop";
import NavBar from "./component/Navbar";
import './App.css';

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
    return (
        <HashRouter>
                <ScrollToTop />
                <Element name={"Home"} id="home" >
                    <NavBar/>
                </Element>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/All-Projects" element={<AllProjects />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
        </HashRouter>
    );
}
