import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const person = [
  {
    id: 1,
    name: "ENTOP Sicherheit",
    title: [
      "Ansprechpartner in allen Fragen rund um Ihre Sicherheit",
      "Konzeption und Koordination",
      "Beratung und Verkauf",
      "Angebotserstellung",
      "Bewerbungsgespräche",
      "Sicherheitsbeauftragter Einsatzplanung",
      "Administrative Aufgaben",
      "Rechnungsstellung"
    ],
    phone: "+49 176 629 190 92",
    email: "info@entop-sicherheit.com",
  },
];

const Personal = () => {
  return (
    <div className="container mx-auto p-10 mt-6 bg-gray-100 rounded-xl  max-w-5xl">
      <p className="flex items-center text-xl font-bold justify-center border-b-4 border-yellow-500 py-4 text-gray-900">
        Immer ein offenes Ohr für Sie
      </p>
      <h1 className="text-2xl font-bold text-center text-[#013766] mb-10 py-8">
      Individuelle Beratung für Ihre Sicherheitsfragen.
      </h1>
      <div className="flex flex-col gap-8">
        {person.map((p) => (
          <div
            key={p.id}
            className="p-8 flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-start md:text-left">
              <h2 className="text-2xl  font-semibold text-[#013766]">
                {p.name}
              </h2>
              <ul className="text-gray-700 text-[14px] md:text-lg mt-4 space-y-2">
                {p.title.map((t, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-yellow-500 text-2xl">✔</span> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 text-lg text-gray-700">
                <span className="flex items-center gap-3">
                  <Link href={`tel:${p.phone}`} className="flex items-center gap-3 hover:text-[#013766] transition-colors">
                    <Phone size={28} className="text-yellow-500 animate-pulse" />
                    {p.phone}
                  </Link>
                </span>
                <span className="flex items-center gap-3">
                  <Link href={`mailto:${p.email}`} className="flex items-center gap-3 hover:text-[#013766] transition-colors">
                    <Mail size={28} className="text-yellow-500 animate-pulse" />
                    {p.email}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personal;
