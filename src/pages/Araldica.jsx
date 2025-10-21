export default function Araldica() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-title border-b-2 border-royalgold inline-block pb-2">
          Araldica
        </h1>
      </header>

      <section className="space-y-8">
        <p>
          L’araldica è lo studio dei blasoni, cioè degli stemmi, detti anche armi o scudi. È la disciplina che individua, descrive e cataloga i simboli grafici utilizzati per identificare persone, famiglie o istituzioni.
        </p>

        <div>
          <h2 className="text-2xl font-title mb-3">Funzione e repertorio</h2>
          <p>
            Royal Protocol mette a disposizione un repertorio organizzato scientificamente degli stemmi e dei loro elementi, accompagnato da descrizioni araldiche tecniche (blasonature) e da valutazioni di diritto d'uso. Gli esperti forniscono analisi accurate e disegni cromatici conformi al diritto d'uso riconosciuto.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-title mb-3">Servizi dell’esperto araldico</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Valutazione del diritto d'uso dello stemma.</li>
            <li>Disegno a colori dello stemma.</li>
            <li>Descrizione araldica tecnica (blasonatura).</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
