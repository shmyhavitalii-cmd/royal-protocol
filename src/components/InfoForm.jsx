import { useState } from "react";
import emailjs from "emailjs-com";

export default function InfoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    interessi: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData.interessi)

    // ✅ First email: to info@royalprotocol.org (internal notification)
    emailjs
      .send(
        "service_kthwcc9",
        "template_oiws26a", // first template ID
        {
          name: formData.nome,
          surname: formData.cognome,
          email: formData.email,
         
        },
        "5-raIfVk-QAmGDSuq"
      )
      .then(() => {
        emailjs
      .send(
        "service_kthwcc9",
        "template_zp1koin", // first template ID
        {
          name: formData.nome,
          surname: formData.cognome,
          email: "shmyhavitalii@gmail.com",
          interest: formData.interessi
        },
        "5-raIfVk-QAmGDSuq"
      ).then(()=> {
        setFormData({ nome: "", cognome: "", email: "" })
        setStatus("✅ La tua richiesta è stata inviata con successo!");
      }
      )
      .catch((err) => {
        console.error("Errore:", err);
        setStatus("❌ Si è verificato un errore. Riprova.");
      })
      })
      .catch((err)=> {
        console.error("Errore:", err);

      })
  };

  return (
    <div className="bg-[#0b1d3a]/60 text-royalgold p-8 rounded-2xl shadow-lg max-w-lg mx-auto">
      <h2 className="text-3xl font-title mb-6 text-center border-b border-royalgold/50 pb-2">
        Richiedi il Certificato
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white/10 text-royalgold border border-royalgold/30 focus:outline-none focus:ring-2 focus:ring-royalred"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Cognome</label>
          <input
            type="text"
            name="cognome"
            value={formData.cognome}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white/10 text-royalgold border border-royalgold/30 focus:outline-none focus:ring-2 focus:ring-royalred"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-white/10 text-royalgold border border-royalgold/30 focus:outline-none focus:ring-2 focus:ring-royalred"
          />
        </div>
        <div>
        <label className="block mb-3 text-royalgold font-semibold">
          Sono interessato a:
        </label>

        <div className="space-y-3 text-royalgold">
          {[
            "Titoli e successioni",
            "Ricerche genealogiche",
            "Ordini Cavallereschi",
            "Famiglie elencate nel Libro araldico dei titolati stranieri",
          ].map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="interessi"
                value={option}
                checked={option===formData.interessi}
                onChange={handleChange}
                className="h-5 w-5 accent-royalgold rounded focus:ring-royalgold focus:ring-2"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
        <button
          type="submit"
          className="w-full mt-4 bg-royalgold text-royalblue font-semibold py-2 rounded-full hover:bg-royalred hover:text-white transition-all duration-300"
        >
          Invia Richiesta
        </button>
      </form>

      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </div>
  );
}
