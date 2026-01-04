import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <p className="">
              © {currentYear} Yrieix. 
              <Link to="/mentions-legales" className=""> Tous droits réservés.</Link>
            </p>
          </div>
        </div>
      </footer>
  )}