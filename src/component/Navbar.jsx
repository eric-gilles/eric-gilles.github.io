import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function NavBar() {
    const { pathname } = useLocation();
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("en");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en";
        setLanguage(newLanguage);
    };

    const navLinks = {
        routes: [
            { id: "1", name: "Home", path: "/" },
            { id: "2", name: "Projects", path: "/projects" },
        ],
        to: [
            { id: "1", name: "Home", to: "Home" },
            { id: "2", name: "About Me", to: "About_Me" },
            { id: "3", name: "Skills", to: "Skills" },
            { id: "4", name: "Projects", to: "Projects" },
            { id: "5", name: "Contact", to: "Contact" },
        ]
    };

    return (
        <Navbar bg={theme} expand="lg">
            <Container>
                <Navbar.Brand href="/">My Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {navLinks.routes.map(route => (
                            <Nav.Link key={route.id} as={Link} to={route.path} className={pathname === route.path ? "active" : ""}>{route.name}</Nav.Link>
                        ))}
                    </Nav>
                    <Nav>
                        {navLinks.to.map(link => (
                            <Nav.Link key={link.id} as={LinkScroll} to={link.to} smooth={true} duration={500}>{link.name}</Nav.Link>
                        ))}
                        <Button variant="outline-light" onClick={toggleTheme}>{theme === "light" ? "Dark Theme" : "Light Theme"}</Button>
                        <Button variant="outline-light" onClick={toggleLanguage}>{language === "en" ? "Switch to French" : "Switch to English"}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
