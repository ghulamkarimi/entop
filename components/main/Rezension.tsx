"use client";
import {
  MessageCircle,
  Zap,
  ShieldCheck,
  AlarmClock,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const reviews = [
    {
    description:
      "Mit langjähriger Erfahrung in der Branche verfügen unsere Sicherheitsexperten über das nötige Know-how, um effektive Sicherheitslösungen zu bieten.",
    service: "Erfahrung und Fachkenntnisse",
    icon: Briefcase,
  },
  {
    description:
      "Unser Kundenservice bietet eine stets freundliche und professionelle Kommunikation. Wir legen großen Wert darauf, unseren Kunden zuzuhören und ihre Bedürfnisse schnell und effizient zu erfüllen.",
    service: "Kundenservice und Kommunikation",
    icon: MessageCircle,
  },
  {
    description:
      "Die Abwicklung unserer Dienstleistungen erfolgt schnell und zuverlässig. Wir garantieren eine zügige Bearbeitung Ihrer Anfragen und bieten stets Lösungen, die genau auf Ihre Anforderungen abgestimmt sind.",
    service: "Effizienz und schnelle Abwicklung",
    icon: Zap,
  },
  {
    description:
      "Mit unseren Sicherheitsdiensten gewährleisten wir einen hohen Standard der Betreuung. Unsere Sicherheitsmaßnahmen sind effektiv und garantieren Sicherheit und Schutz für alle Beteiligten.",
    service: "Sicherheitsdienstleistungen und Betreuung",
    icon: ShieldCheck,
  },
  {
    description:
      "Unsere Reaktionszeiten sind bemerkenswert schnell. In Notfällen sind wir innerhalb kürzester Zeit vor Ort, um Ihnen schnell und effizient zu helfen.",
    service: "Reaktionszeiten und professionelle Betreuung",
    icon: AlarmClock,
  },
  
];

const Rezension = () => {
  const navigate = useRouter();

  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h2 className="font-bold text-lg uppercase mb-2">Ihr Vorteil mit uns</h2>
      <h1 className="text-4xl font-extrabold">
        <span className="mb-4">Warum Sie sich bei</span> <br />
        <span className="border-b-4 border-yellow-300 pb-4 mb-4">
          uns gut betreut fühlen werden
        </span>
      </h1>

      <div className="mt-12 grid gap-8 text-[14px] lg:grid-cols-3">
        {/* Drei Karten oben */}
        <div className="lg:col-span-3 grid lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, index) => {
            const Icon = review.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <Icon size={32} className="text-yellow-500" />
                </div>
                <div className="text-base text-gray-500 italic mb-4">
                  <strong>{review.service}</strong>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.description}</p>
                <button
                  onClick={() => navigate.push("/service")}
                  className="rounded-md p-2 mt-6 bg-amber-400"
                >
                  Mehr erfahren
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Zwei Karten unten */}
        <div className="lg:col-span-3 grid lg:grid-cols-2 gap-8">
          {reviews.slice(3, 5).map((review, index) => {
            const Icon = review.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <Icon size={32} className="text-yellow-500" />
                </div>
                <div className="text-base text-gray-500 italic mb-4">
                  <strong>{review.service}</strong>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.description}</p>
                <button
                  onClick={() => navigate.push("/service")}
                  className="rounded-md p-2 mt-6 bg-amber-400"
                >
                  Mehr erfahren
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rezension;
