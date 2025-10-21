export default function Terms() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-title mb-8 text-center">
        Terms & Conditions
      </h1>

      {/* 🇮🇹 Italian Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-title mb-4">
          🇮🇹 Termini e Condizioni d’Uso – Royal Protocol UÜ
        </h2>
        <p className="mb-4">
          L’accesso e l’utilizzo del presente sito web implicano l’accettazione
          dei seguenti Termini e Condizioni:
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-4">
          <li>
            <strong>Proprietà dei contenuti –</strong> Tutti i testi, loghi,
            marchi e materiali presenti su questo sito sono di proprietà
            esclusiva di Royal Protocol UÜ e sono protetti dalle leggi sul
            diritto d’autore e sulla proprietà intellettuale.
          </li>
          <li>
            <strong>Uso consentito –</strong> L’utente si impegna a utilizzare
            il sito esclusivamente per scopi leciti e conformi alla normativa
            vigente. È vietato qualsiasi uso che possa danneggiare, compromettere
            o limitare il funzionamento del sito.
          </li>
          <li>
            <strong>Limitazione di responsabilità –</strong> Royal Protocol UÜ
            non è responsabile per eventuali danni diretti o indiretti derivanti
            dall’uso del sito o delle informazioni in esso contenute.
          </li>
          <li>
            <strong>Link esterni –</strong> Il sito può contenere link a siti di
            terze parti, sui quali Royal Protocol UÜ non esercita alcun controllo
            né assume responsabilità.
          </li>
          <li>
            <strong>Modifiche –</strong> Royal Protocol UÜ si riserva il diritto
            di modificare in qualsiasi momento i presenti Termini e Condizioni
            senza preavviso.
          </li>
          <li>
            <strong>Legge applicabile –</strong> I presenti Termini sono regolati
            dalla legge estone. Eventuali controversie saranno di competenza
            esclusiva del foro di Tallinn.
          </li>
        </ol>
        <p>
          Per qualsiasi comunicazione, scrivere a{" "}
          <a
            href="mailto:info@royalprotocol.org"
            className="text-royalred hover:underline"
          >
            info@royalprotocol.org
          </a>.
        </p>
      </div>

      <hr className="border-royalgold/30 mb-12" />

      {/* 🇬🇧 English Section */}
      <div>
        <h2 className="text-2xl font-title mb-4">
          🇬🇧 Terms and Conditions – Royal Protocol UÜ
        </h2>
        <p className="mb-4">
          Access to and use of this website implies acceptance of the following
          Terms and Conditions:
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-4">
          <li>
            <strong>Ownership of content –</strong> All texts, logos,
            trademarks, and materials on this website are the exclusive property
            of Royal Protocol UÜ and are protected by copyright and intellectual
            property laws.
          </li>
          <li>
            <strong>Permitted use –</strong> Users agree to use the site solely
            for lawful purposes and in compliance with applicable regulations.
            Any use that could damage, impair, or interfere with the site’s
            functionality is strictly prohibited.
          </li>
          <li>
            <strong>Limitation of liability –</strong> Royal Protocol UÜ shall
            not be liable for any direct or indirect damages resulting from the
            use of this website or the information contained herein.
          </li>
          <li>
            <strong>External links –</strong> This website may include links to
            third-party websites over which Royal Protocol UÜ has no control and
            assumes no responsibility.
          </li>
          <li>
            <strong>Changes –</strong> Royal Protocol UÜ reserves the right to
            modify these Terms and Conditions at any time without prior notice.
          </li>
          <li>
            <strong>Governing law –</strong> These Terms are governed by
            Estonian law. Any disputes shall be subject to the exclusive
            jurisdiction of the courts of Tallinn.
          </li>
        </ol>
        <p>
          For any inquiries, please contact{" "}
          <a
            href="mailto:info@royalprotocol.org"
            className="text-royalred hover:underline"
          >
            info@royalprotocol.org
          </a>.
        </p>
      </div>
    </div>
  );
}
