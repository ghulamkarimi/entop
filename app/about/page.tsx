"use client"
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const Page = () => {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { amount: 0.2 });
  const textRef = useRef(null);
  const textInView = useInView(textRef, { amount: 0.2 });

  return (
    <div className="container mx-auto px-4">
      {/* Header-Bild mit Animation */}
      <img
        ref={imgRef}
        className="w-full max-h-[600px] object-cover opacity-85 rounded-lg shadow-lg"
        src="/grup.jpg"
        alt="Gruppenbild"
      />

      {/* Titel und Untertitel mit Animation */}
      <div className="flex flex-col items-center justify-center gap-4 mt-10 text-center">
        <h1
          className="text-5xl font-bold text-[#013766] border-b-4 border-yellow-300 pb-2"
       
          ref={textRef}
        >
          ENTOP
        </h1>
        <p
          className="text-xl text-gray-700 max-w-2xl border-b-4 pb-2 border-yellow-300"
      
          ref={textRef}
        >
          Wir sind ein engagiertes Team, das Sicherheit und Vertrauen schafft.
        </p>
      </div>

      {/* Hauptcontainer mit Animation */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto my-16 gap-12 items-center ">
        {/* Linke Seite: Bilder mit Grid-Layout */}
        <motion.div
          ref={imgRef}
          className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: imgInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src="/about1.jpg"
            alt="entop 1"
            className="w-full h-68 object-cover rounded-lg shadow-md row-span-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: imgInView ? 1 : 0, x: imgInView ? 0 : -100 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="/about2.jpg"
            alt="entop 2"
            className="w-full h-32 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: imgInView ? 1 : 0, x: imgInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src="/about.jpg"
            alt="entop 3"
            className="w-full h-32 object-cover rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: imgInView ? 1 : 0, x: imgInView ? 0 : -100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.img
            src="/about3.jpg"
            alt="entop 4"
            className="w-full h-52 object-cover rounded-lg shadow-md col-span-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: imgInView ? 1 : 0, x: imgInView ? 0 : 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Rechte Seite: Text mit Animation */}
        <motion.div
          ref={textRef}
          className="w-full lg:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: textInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl font-bold text-[#013766]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            Wir sind:
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            ENTOP Sicherheit ist ein Sicherheitsdienstleister, der sich auf die
            Bereiche Objektschutz, Veranstaltungsschutz, Personenschutz,
            Empfangsdienste und Sicherheitsberatung spezialisiert hat. Wir
            bieten Ihnen individuelle Sicherheitskonzepte, die exakt auf Ihre
            Bedürfnisse zugeschnitten sind.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unsere Mitarbeiter sind bestens ausgebildet und verfügen über
            langjährige Erfahrung im Sicherheitsbereich. Wir arbeiten mit
            modernster Technik und setzen auf eine vertrauensvolle
            Zusammenarbeit mit unseren Kunden.
          </motion.p>

          {/* Eigenschaften mit Icons */}
          <div className="grid grid-cols-2 gap-2 text-gray-700 font-semibold">
            {[
              "Fachkundig",
              "Zuverlässig",
              "Verlässlich",
              "Reaktionsschnell",
              "Entschlossen",
              "Belastbar",
            ].map((property, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{
                  opacity: textInView ? 1 : 0,
                  x: textInView ? 0 : index % 2 === 0 ? -100 : 100,
                }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Check className="text-green-600 bg-yellow-300 rounded-full p-0.5" />{" "}
                {property}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
