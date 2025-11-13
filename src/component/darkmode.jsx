import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode"); // On récupère le choix de l'utilisateur qui se situe dans le "LocalStorage"
    return saved ? JSON.parse(saved) : false; // Si on a un choix enregistré, on le récupère, sinon le site est mis en mode light par défaut
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Ajoute "dark" dans l'html
    } else {
      document.documentElement.classList.remove("dark"); // Enlève "dark" dans l'html
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode)); // Save le choix de l'utilisateur
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return { darkMode, toggleDarkMode };
};