export default function Genealogia() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-title border-b-2 border-royalgold inline-block pb-2">
          Genealogia
        </h1>
      </header>

      <section className="space-y-8">
        <p>
          Studio e rappresentazione delle linee genealogiche e dei legami tra le grandi famiglie nobili europee.
        </p>

        <div>
          <h2 className="text-2xl font-title mb-3">Ricerche genealogiche</h2>
          <p>
            Royal Protocol svolge ricerche storiche e genealogiche approfondite, dalla ricostruzione dell’albero genealogico fino all’analisi documentale delle fonti. Forniamo prospetti che collegano il capostipite al richiedente con tutti i riferimenti utili.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-title mb-3">Output e documentazione</h2>
          <p>
            L’output comprende alberi genealogici, note storiche, riferimenti documentali, certificati e, quando del caso, la proposta grafica dello stemma collegato alla famiglia.
          </p>
        </div>
      </section>
    </div>
  );
}
