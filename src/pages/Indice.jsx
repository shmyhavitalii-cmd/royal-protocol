import { Link } from "react-router-dom";

export default function Indice() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-royalgold/90">
            <strong>Royal Protocol</strong> è un punto di riferimento per lo
            studio e la divulgazione delle norme nobiliari, genealogiche e
            cavalleresche. In questa sezione puoi consultare una panoramica
            completa dei temi principali trattati all’interno del progetto.
          </p>
        </div>

        {/* Section: Storia */}
        <section>
          <h2 className="text-2xl font-title mb-2">Storia</h2>
          <p className="mb-3">
            Evoluzione storica della nobiltà nella Penisola Italiana.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/storia"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>

        {/* Section: Leggi */}
        <section>
          <h2 className="text-2xl font-title mb-2">Leggi</h2>
          <p className="mb-3">
            Panoramica del diritto nobiliare attraverso le leggi del Regno
            d’Italia. Le norme araldiche in accordo alle leggi del Regno
            d’Italia, e le attuali norme araldiche nella Repubblica Italiana.
            Gli uffici araldici di Stato nel mondo. Le genealogie e le norme
            giuridiche ad esse riferite. Gli ordini cavallereschi autorizzati
            nella Repubblica Italiana in accordo alla legge 3 marzo 1951 n. 178,
            e gli ordini cavallereschi inseriti nell’International Commission for
            Orders of Chivalry. Tutte le norme giuridiche sono interpretate alla
            luce del diritto vigente nella Repubblica Italiana e alle
            disposizioni dei Paesi dell’Unione Europea.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/leggi"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>

        {/* Section: Araldica */}
        <section>
          <h2 className="text-2xl font-title mb-2">Araldica</h2>
          <p className="mb-3">
            L’araldica è lo studio dei blasoni, cioè degli stemmi, detti anche
            armi o scudi. È la disciplina che individua, descrive e cataloga i
            simboli grafici utilizzati per identificare persone, famiglie o
            enti.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/araldica"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>

        {/* Section: Nobiltà */}
        <section>
          <h2 className="text-2xl font-title mb-2">Nobiltà</h2>
          <p className="mb-3">
            Nobiltà e titoli nobiliari, i loro diritti storici nel Regno
            d’Italia, e l’attualizzazione in accordo alle leggi dei Paesi
            dell’Unione Europea.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/nobilta"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>

        {/* Section: Esteri */}
        <section>
          <h2 className="text-2xl font-title mb-2">Esteri</h2>
          <p className="mb-3">
            Nel Regno d’Italia si tutelavano le famiglie italiane in possesso di
            titoli nobiliari, araldici ed onori esteri e famiglie estere in
            possesso di titoli nobiliari, araldici ed onori italiani, in accordo
            alle leggi dei Paesi dell’Unione Europea si provvede alla loro
            attualizzazione.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/esteri"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>

        {/* Section: Genealogia */}
        <section>
          <h2 className="text-2xl font-title mb-2">Genealogia</h2>
          <p className="mb-3">
            Studio e rappresentazione di linee genealogiche di famiglie nobili,
            famiglie storiche, famiglie e discendenti di italiani che hanno
            riassunto la cittadinanza italiana.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/genealogia"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>

        {/* Section: Ordini Cavallereschi */}
        <section>
          <h2 className="text-2xl font-title mb-2">Ordini Cavallereschi</h2>
          <p className="mb-3">
            Repertorio degli ordini cavallereschi, la loro storia, i simboli e i
            criteri di registrazione ed appartenenza.
          </p>
          <a
            href="https://royal-protocol.se-ih.org/ordini-cavallereschi"
            className="text-royalred hover:underline font-semibold"
          >
            Vai alla sezione →
          </a>
        </section>
      </div>
    </div>
  );
}
