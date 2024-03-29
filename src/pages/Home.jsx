import React from "react";
import CustomNavbar from "../component/CustomNavbar";
import HeroComponent from "../component/HeroComponent";

export default function Home() {
    return (
        <div>
            <CustomNavbar currentPage="home" /> 
            <HeroComponent />
        </div>
    );
}
