import React from "react";
import Background from "../component/Background";
import AboutMe from "../component/AboutMe";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import ToTop from "../component/ToTop";
import Footer from "../component/Footer";

export default function Home() {
    return (
        <div>
            <Background />
            <main>
                <AboutMe />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <ToTop />
            <Footer />
        </div>
    );
}
