import Hero from "../components/Hero";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Sezione testo aggiuntiva (opzionale) */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-serif mb-4 text-royalgold">
          Tradizione e Autorevolezza
        </h2>
        <p className="text-base md:text-lg text-royalgold/90 leading-relaxed">
          Royal Protocol è un punto di riferimento per lo studio e la divulgazione 
          delle norme nobiliari, genealogiche e cavalleresche.  
          Unisce l’autenticità della storia alla visione moderna di un protocollo 
          aperto, inclusivo e scientificamente fondato.
        </p>
        <Link
        to="/info"
        style={{marginTop: "30px"}}
            className="inline-block bg-royalgold text-royalblue font-semibold px-6 py-3 rounded-full hover:bg-royalred hover:text-white transition-all duration-300 shadow-md"
        >
            Prenota ora il tuo Certificato
      </Link>

      </section>
    </div>
  );
}
