"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
  // Unterschiedliche Refs für jedes Element
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: lineRef, inView: lineInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-20">
      {/* Sicherheitsdienst Frankfurt Text */}
      <motion.p
        ref={textRef}
        className="mb-10 text-[20px] font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: textInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        Sicherheitsdienst Frankfurt
      </motion.p>
      
      {/* Willkommen Text */}
      <motion.h1
        ref={textRef}
        className="flex flex-col items-center gap-2 justify-center text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <span>Herzlich Willkommen bei</span>
        <span>ENTOP Sicherheit</span>
      </motion.h1>

      {/* Horizontale Linie */}
      <motion.div
        ref={lineRef}
        className="w-72 flex justify-center items-center border border-b-4 border-yellow-300 mb-6"
        initial={{ width: 0 }}
        animate={{ width: lineInView ? "18rem" : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Beschreibung Text */}
      <motion.p
        ref={descriptionRef}
        className="text-center text-gray-800 text-lg px-4 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: descriptionInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        Ein herzliches Willkommen wünscht Ihnen das Team des ENTOP
        Sicherheitsdienstes, Ihr kompetenter Ansprechpartner in allen Fragen
        rund um Ihre Sicherheit.
      </motion.p>
    </div>
  );
};

export default Welcome;
