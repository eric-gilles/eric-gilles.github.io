import React, { useState, useEffect } from "react";

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ajoute un écouteur d'événements de défilement
    window.addEventListener("scroll", toggleVisibility);
    // Supprime l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    // Affiche le bouton de retour en haut s'il a dépassé un certain seuil de défilement
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Fait défiler la page vers le haut lorsque le bouton est cliqué
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="to-top" style={{ display: isVisible ? "block" : "none" }}>
      <button onClick={scrollToTop}>Back to Top</button>
    </div>
  );
};

export default ToTop;
