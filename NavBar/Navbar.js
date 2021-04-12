import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";

const Navbar=()=>{
    return(
        <>
         <ReactNavbar

        color="rgb(25, 25, 25)"
        logo=""
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/vijaygupta18/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/vijayguptaa18/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "",
            icon: ["fab", "twitter"],
          },
        ]}
      />
        </>
    );
}

export default Navbar;