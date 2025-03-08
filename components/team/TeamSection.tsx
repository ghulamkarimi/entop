"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Objektschutz und Baustellenbewachung",
    role: "Unser Sicherheitspersonal überwacht und schützt Ihr Gebäude oder Ihre Baustelle rund um die Uhr. Wir sorgen dafür, dass keine unbefugten Personen Zutritt erhalten und dass Ihr Eigentum sicher ist.",
    image: "/about.jpg",
  },
  {
    name: "Event-Sicherheit und Veranstaltungsschutz",
    role: "Wir sorgen für die Sicherheit Ihrer Gäste und Mitarbeiter bei Veranstaltungen aller Art. Unser Sicherheitspersonal ist geschult und erfahren im Umgang mit Menschenmengen und sorgt dafür, dass Ihre Veranstaltung reibungslos abläuft.",
    image: "/about1.jpg",
  },
  {
    name: "Personenschutz und Begleitschutz",
    role: "Unser Personenschutzteam sorgt dafür, dass Sie sich sicher fühlen, egal wo Sie sind. Wir begleiten Sie zu Terminen, Veranstaltungen oder auf Reisen und schützen Sie vor möglichen Gefahren.",
    image: "/about2.jpg",
  },
  {
    name: "Brandschutz und Pförtnerdienste",
    role: "Unser Brandschutzteam sorgt dafür, dass Ihr Gebäude im Brandfall schnell evakuiert wird und dass Ihre Mitarbeiter und Gäste sicher sind. Unsere Pförtnerdienste übernehmen die Kontrolle des Zutritts zu Ihrem Gebäude und sorgen dafür, dass nur autorisierte Personen eintreten.",
    image: "/about3.jpg",
  },
  {
    name: "Empfangsdienste und Haudhüter",
    role: "Unsere Empfangsdienste sorgen für einen professionellen Empfang Ihrer Gäste und Mitarbeiter. Unsere Sicherheitsberatung hilft Ihnen dabei, Sicherheitslücken in Ihrem Unternehmen zu identifizieren und zu schließen.",
    image: "/about.jpg",
  },
  {
    name: "Ordnertätigkeiten und Dormen-Service",
    role: "Unsere Ordnertätigkeiten sorgen für einen reibungslosen Ablauf bei Veranstaltungen und sorgen dafür, dass sich Ihre Gäste sicher fühlen. Unser Dormen-Service übernimmt die Bewachung und den Schutz von Wohnanlagen und sorgt dafür, dass Ihre Bewohner sicher sind.",
    image: "/about1.jpg",
  },
  {
    name: "Lade- und Kaufhausdetektive",
    role: "Unsere Lade- und Kaufhausdetektive sorgen dafür, dass Ihre Waren und Ihr Eigentum vor Diebstahl geschützt sind. Wir überwachen Ihr Geschäft und greifen bei Diebstählen sofort ein, um Schaden von Ihrem Unternehmen abzuwenden.",
    image: "/about2.jpg",
  },
];

const TeamSection = () => {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Unser Sicherheitsteam bei{" "}
          <span className="bg-[#013766] px-2 py-1 rounded-lg text-yellow-300">
            ENTOP
          </span>
        </h2>
        <p className="text-lg mb-12 border-b-4 border-yellow-300 max-w-3xl mx-auto pb-4">
          Mit langjähriger Erfahrung bieten wir Ihnen umfassende
          Sicherheitslösungen für jedes Event und jedes Gebäude.
        </p>
        <div className="grid md:grid-cols-1 gap-6 bg-gray-200 p-4 rounded-lg">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member, index }: { member: any; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? 100 : -100) }}
      transition={{ duration: 0.3}}
      className={`flex flex-col md:flex-row items-center p- rounded-2xl transition-all bg-gray-100 pt-10 ${
        index % 2 === 0 ? "" : "md:flex-row-reverse gap-4"
      }`}
    >
      <div className="w-full md:w-1/2 pr-6 mb-4 md:mb-0 h-[450px]">
        <img
          src={member.image}
          alt={member.name}
          className="mx-auto max-w-full object-cover h-[400px] rounded-2xl shadow-lg"
        />
      </div>
      <div className="w-full flex flex-col text-start gap-6 md:w-1/2 pl-6">
        <h3 className="text-xl font-semibold text-gray-700 border-b-3 border-yellow-300 pb-3">
          {member.name}
        </h3>
        <p className="text-gray-500 mb-4">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default TeamSection;
