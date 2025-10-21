import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-royalblue text-royalgold py-8 text-center text-sm flex flex-col items-center gap-3 md:gap-2">
      <div className="flex flex-wrap justify-center gap-6 mb-2">
        <Link to="/privacy" className="hover:text-royalred transition-colors duration-300 underline-offset-4 hover:underline">
          Privacy Policy
        </Link>

        <Link to="/terms" className="hover:text-royalred transition-colors duration-300 underline-offset-4 hover:underline">
            Termini e Condizioni
        </Link>

      </div>

      <p className="text-royalgold/80">
        © 2025 Royal Protocol — Tutti i diritti riservati
      </p>
    </footer>
  );
}
