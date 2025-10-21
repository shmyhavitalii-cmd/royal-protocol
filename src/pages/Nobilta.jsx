export default function Nobilta() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-title border-b-2 border-royalgold inline-block pb-2">
          Nobiltà
        </h1>
      </header>

      <section className="space-y-8">
        <p>
          Sezione dedicata ai titoli nobiliari, ai diritti storici e alla loro interpretazione nel contesto contemporaneo.
        </p>

        <div>
          <h2 className="text-2xl font-title mb-3">Titoli e successioni</h2>
          <p>
            In questa sezione vengono illustrate le tipologie di titoli nobiliari, le regole di successione storiche e le modalità attraverso cui sono stati riconosciuti nel Regno d'Italia. Vengono inoltre trattati i casi di successioni internazionali e i criteri per la loro registrazione nel Royal Protocol.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-title mb-3">Documentazione richiesta</h2>
          <p>
            Per la registrazione e la verifica dei titoli sono richiesti atti notarili, certificati di stato civile, atti di riconoscimento storici e, quando disponibili, registrazioni ufficiali come il Libro araldico.
          </p>
        </div>
      </section>
    </div>
  );
}
