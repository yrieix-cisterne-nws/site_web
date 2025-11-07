import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation(); // Permet de récupérer un changement d'url

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);  // Quand on détecte un changement d'url, on est remis en haut de la page

};