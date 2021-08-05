import React from "react";
import { Link } from "@material-ui/core";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand">Agenda Personal</h1>
        <Link
          title="https://thirsty-engelbart-f32329.netlify.app/"
          href="https://thirsty-engelbart-f32329.netlify.app/"
          to="https://thirsty-engelbart-f32329.netlify.app/"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al Portafolio
        </Link>
      </div>
    </nav>
  );
};

export default Header;
