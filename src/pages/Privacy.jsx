export default function Privacy() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-title mb-8 text-center">
        Privacy Disclaimer (IT / EN)
      </h1>

      {/* 🇮🇹 Italian Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-title mb-4">🇮🇹 Informativa Privacy – Royal Protocol UÜ</h2>
        <p className="mb-4">
          Ai sensi del Regolamento UE 2016/679 (GDPR), ti informiamo che i dati
          personali forniti tramite il presente sito saranno trattati da{" "}
          <strong>Royal Protocol UÜ</strong>, con sede legale a Tallinn,
          Estonia, esclusivamente per finalità informative, promozionali e di
          contatto relative ai servizi e ai progetti di Royal Protocol.
        </p>
        <p className="mb-4">
          I dati saranno conservati in modo sicuro e non saranno ceduti a terzi
          senza il tuo esplicito consenso. In qualunque momento potrai esercitare
          i diritti previsti dagli artt. 15–22 del GDPR (accesso, rettifica,
          cancellazione, opposizione, limitazione e portabilità) scrivendo a{" "}
          <a
            href="mailto:info@royalprotocol.org"
            className="text-royalred hover:underline"
          >
            info@royalprotocol.org
          </a>.
        </p>
        <p>
          Il conferimento dei dati è facoltativo, ma necessario per poter ricevere
          informazioni o aggiornamenti sui progetti Royal Protocol.
        </p>
      </div>

      <hr className="border-royalgold/30 mb-12" />

      {/* 🇬🇧 English Section */}
      <div>
        <h2 className="text-2xl font-title mb-4">🇬🇧 Privacy Disclaimer – Royal Protocol UÜ</h2>
        <p className="mb-4">
          In accordance with EU Regulation 2016/679 (GDPR), we inform you that
          the personal data provided through this website will be processed by{" "}
          <strong>Royal Protocol UÜ</strong>, registered in Tallinn, Estonia,
          exclusively for informational, promotional, and contact purposes
          related to Royal Protocol’s services and projects.
        </p>
        <p className="mb-4">
          Your data will be stored securely and will not be shared with third
          parties without your explicit consent. You may exercise your rights
          under Articles 15–22 of the GDPR (access, rectification, deletion,
          objection, restriction, and portability) at any time by contacting{" "}
          <a
            href="mailto:info@royalprotocol.org"
            className="text-royalred hover:underline"
          >
            info@royalprotocol.org
          </a>.
        </p>
        <p>
          Providing your data is voluntary, but necessary to receive information
          or updates about Royal Protocol projects.
        </p>
      </div>
    </div>
  );
}
