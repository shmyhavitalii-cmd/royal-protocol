import InfoForm from "../components/InfoForm";

export default function RoyalProtocol() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen px-6 md:px-20 py-16 font-body leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-title mb-8 text-center">
        Royal Protocol
      </h1>

      <p className="text-lg max-w-3xl mx-auto mb-12 text-center">
        Il <strong>Royal Protocol</strong> è un punto di riferimento per lo studio e
        la divulgazione delle norme nobiliari, genealogiche e cavalleresche.
        Promuove la conservazione e la valorizzazione delle tradizioni
        araldiche e cavalleresche attraverso la ricerca, la documentazione e la
        consulenza storica.
      </p>

      {/* 🔹 Add the form section */}
      <div className="max-w-2xl mx-auto bg-royalblue/50 border border-royalgold/40 rounded-2xl p-8 shadow-lg">
        
        <InfoForm />
      </div>
    </div>
  );
}
