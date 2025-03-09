import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const person = [
    {
      id: 1,
      name: "John Doe",
      title: [
        "Ansprechpartner in allen Fragen rund um Ihre Sicherheit",
        "Konzeption und Koordination",
        "Bewerbungsgespräche",
      ],
      image: "/person2.avif",
      phone: "+49 176 629 190 92",
      email: "entop.sicherheit@hotmail.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: [
        "Ansprechpartner in allen Fragen rund um Ihre Sicherheit",
        "Konzeption und Koordination",
        "Beratung und Verkauf",
      ],
      image: "/ghulam.png",
      phone: "+49 176 629 190 92",
      email: "entop.sicherheit@hotmail.com",
    },
    {
      id: 3,
      name: "Max Mustermann",
      title: [
        "Ansprechpartner in allen Fragen rund um Ihre Sicherheit",
        "Konzeption und Koordination",
        "Veranstaltungsplanung",
      ],
      image: "/person1.jpg",
      phone: "+49 176 629 190 92",
      email: "entop.sicherheit@hotmail.com",
    },
    {
      id: 4,
      name: "Erika Mustermann",
      title: [
        "Ansprechpartner in allen Fragen rund um Ihre Sicherheit",
        "Konzeption und Koordination",
        "Einsatzplanung",
        "Rechnungsstellung",
        "Angebotserstellung",
        "Beratung und Verkauf",
        "Bewerbungsgespräche",
        "Konzeption und Koordination"
      ],
      image: "/person.avif",
      phone: "+49 176 629 190 92",
      email: "entop.sicherheit@hotmail.com",
    },
  ];
  
  const Personal = () => {
    return (
      <div className="container mx-auto p-6">
        <p className="flex items-center text-lg font-bold justify-center border-b-2 border-yellow-300 py-2">
          Immer ein offenes Ohr für Sie
        </p>
        <h1 className="text-4xl font-bold text-center text-[#013766] mb-8 py-6">
          Ihre Ansprechpartner
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {person.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-4"
            >
              <img
                className="w-40 h-40 rounded-full lg:items-center object-cover border-2 border-[#013766]"
                src={p.image}
                alt={p.name}
              />
              <div className="text-start md:text-left">
                <h2 className="text-2xl font-semibold text-[#013766]">
                  {p.name}
                </h2>
                <ul className="text-gray-700 text-sm mt-2">
                  {p.title.map((t, index) => (
                    <li key={index} className="mt-1">
                      ✅ {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-col gap-1 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <Link
                      href={`tel:${p.phone}`}
                      className="flex items-center gap-2"
                    >
                      <Phone
                        size={20}
                        className="inline-block -mt-1 text-yellow-500 animate-pulse"
                      />
                      {p.phone}
                    </Link>
                  </span>

                  <span className="flex items-center gap-2">
                    <Link
                      href={`mailto:${p.email}`}
                      className="flex items-center gap-2"
                    >
                      <Mail
                        size={20}
                        className="inline-block -mt-1 text-yellow-500 animate-pulse"
                      />
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
  