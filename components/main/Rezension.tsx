"use client";
import { Star, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    description:
      "Unser Kundenservice bietet eine stets freundliche und professionelle Kommunikation. Wir legen großen Wert darauf, unseren Kunden zuzuhören und ihre Bedürfnisse schnell und effizient zu erfüllen.",
    service: "Kundenservice und Kommunikation",
  },
  {
    description:
      "Die Abwicklung unserer Dienstleistungen erfolgt schnell und zuverlässig. Wir garantieren eine zügige Bearbeitung Ihrer Anfragen und bieten stets Lösungen, die genau auf Ihre Anforderungen abgestimmt sind.",
    service: "Effizienz und schnelle Abwicklung",
  },
  {
    description:
      "Mit unseren Sicherheitsdiensten gewährleisten wir einen hohen Standard der Betreuung. Unsere Sicherheitsmaßnahmen sind effektiv und garantieren Sicherheit und Schutz für alle Beteiligten.",
    service: "Sicherheitsdienstleistungen und Betreuung",
  },
  {
    description:
      "Unsere Reaktionszeiten sind bemerkenswert schnell. In Notfällen sind wir innerhalb kürzester Zeit vor Ort, um Ihnen schnell und effizient zu helfen.",
    service: "Reaktionszeiten und professionelle Betreuung",
  },
  {
    description:
      "Unsere Kommunikation ist klar und transparent. Wir garantieren einen reibungslosen Ablauf aller Dienstleistungsschritte und informieren unsere Kunden immer rechtzeitig über den Status ihrer Anfragen.",
    service: "Kommunikation und Professionalität",
  },
];

const Rezension = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center ">
      <h2 className="font-bold text-lg uppercase mb-2">Rezensionen</h2>
      <h1 className="text-4xl font-extrabold">
        <span>Was unsere Kunden</span> <br />
        <span className="border-b-4 border-yellow-300 pb-4 mb-4">über uns sagen</span>
      </h1>

      <div className="mt-12 grid gap-8 text-[14px] lg:grid-cols-3">
        {/* Drei Bewertungen oben */}
        <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <UserCircle size={64} className="text-yellow-300" />
              </div>
              <p className="text-gray-600 leading-relaxed">{review.description}</p>
              <p className="text-sm text-gray-500 italic mt-2">Bewertete Leistung: <strong>{review.service}</strong></p>
              <div className="flex justify-center gap-1 text-yellow-500 my-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zwei Bewertungen unten */}
        <div className="lg:col-span-3 grid lg:grid-cols-2 gap-8">
          {reviews.slice(3, 5).map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.3 }}
            >
              <div className="flex justify-center mb-4">
                <UserCircle size={64} className="text-yellow-300" />
              </div>
              <p className="text-gray-600 leading-relaxed">{review.description}</p>
              <p className="text-sm text-gray-500 italic mt-2">Bewertete Leistung: <strong>{review.service}</strong></p>
              <div className="flex justify-center gap-1 text-yellow-500 my-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rezension;
