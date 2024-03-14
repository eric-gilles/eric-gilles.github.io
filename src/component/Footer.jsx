import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        {/* Ajoutez d'autres informations de pied de page si nécessaire */}
      </div>
    </footer>
  );
};

export default Footer;
