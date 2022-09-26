import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const item =  links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>))

  return <nav>{item}</nav>;
  
}

export default NavBar;
