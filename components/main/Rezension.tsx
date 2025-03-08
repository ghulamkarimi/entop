
"use client";
import { Star, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Johanna Müller",
    description:
      "Ein wirklich erstklassiger Service! Das Team war sehr freundlich und professionell. Ich habe mich jederzeit gut aufgehoben gefühlt und werde den Service definitiv weiterempfehlen.",
  },
  {
    name: "Daniel Schmidt",
    description:
      "Schnelle Abwicklung und top Kundenservice. Ich war beeindruckt von der Effizienz und der Aufmerksamkeit des Teams. Sehr zuverlässig und definitiv eine Empfehlung wert!",
  },
  {
    name: "Elena Fischer",
    description:
      "Hervorragende Betreuung und sehr sichere Abläufe. Ich habe mich rundum wohl und sicher gefühlt. Vielen Dank für diesen tollen Service!",
  },
  {
    name: "Marco Lehmann",
    description:
      "Freundliches Personal, schnelle Reaktionszeiten und ein professionelles Umfeld. Es ist beruhigend zu wissen, dass man hier in guten Händen ist.",
  },
  {
    name: "Sophia Weber",
    description:
      "Exzellenter Service mit einem hohen Maß an Professionalität! Die Kommunikation war super, und alles lief reibungslos. Sehr empfehlenswert!",
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
              <div className="flex justify-center gap-1 text-yellow-500 my-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                  ))}
              </div>
              <p className="font-bold text-gray-900">{review.name}</p>
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
              <div className="flex justify-center gap-1 text-yellow-500 my-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" stroke="none" />
                  ))}
              </div>
              <p className="font-bold text-gray-900">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rezension;
