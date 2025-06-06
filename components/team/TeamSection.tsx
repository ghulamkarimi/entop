"use client";

const teamMembers = [
  {
    name: "Gebäudeschutz/Objektschutz",
    role: "Unser Sicherheitspersonal überwacht und schützt Ihr Gebäude oder Ihre Baustelle rund um die Uhr. Wir sorgen dafür, dass keine unbefugten Personen Zutritt erhalten und dass Ihr Eigentum sicher ist.",
    image: "/object.jpg",
  },
  {
    name: "Baustellenbewachung",
    role: "Unser Sicherheitspersonal überwacht und schützt Ihre Baustelle rund um die Uhr. Wir sorgen dafür, dass keine unbefugten Personen Zutritt erhalten und dass Ihr Eigentum sicher ist.",  
    image: "/baustelle.jpg",
  },
  {
    name: "Event-Sicherheit und Veranstaltungsschutz",
    role: "Wir sorgen für die Sicherheit Ihrer Gäste und Mitarbeiter bei Veranstaltungen aller Art. Unser Sicherheitspersonal ist geschult und erfahren im Umgang mit Menschenmengen und sorgt dafür, dass Ihre Veranstaltung reibungslos abläuft.",
    image: "/event.jpg",
  },
  {
    name: "Personenschutz und Begleitschutz",
    role: "Unser Personenschutzteam sorgt dafür, dass Sie sich sicher fühlen, egal wo Sie sind. Wir begleiten Sie zu Terminen, Veranstaltungen oder auf Reisen und schützen Sie vor möglichen Gefahren.",
    image: "/persoenlich.jpg",
  },
  {
    name: "Brandwache",
    role: "Unsere Brandwache sorgt dafür, dass Ihr Gebäude oder Ihre Baustelle vor Bränden geschützt ist. Wir überwachen den Brandschutz und greifen bei Bränden sofort ein, um Schaden von Ihrem Eigentum abzuwenden und Menschenleben zu retten.",
    image: "/brandwache.jpg",
  },
  {
    name: "Empfangsdienste, Haushütedienste und Pförtnerdienste ",
    role: "Unsere Empfangsdienste sorgen für einen professionellen Empfang Ihrer Gäste und Mitarbeiter. Unsere Sicherheitsberatung hilft Ihnen dabei, Sicherheitslücken in Ihrem Unternehmen zu identifizieren und zu schließen.",
    image: "/empfang.jpg",
  },
  {
    name: "Ordnertätigkeiten",
    role: "Unsere Ordnertätigkeiten sorgen für die Einhaltung von Regeln und Vorschriften bei Veranstaltungen und in öffentlichen Räumen. Wir sorgen dafür, dass Ihre Gäste sich sicher und wohl fühlen und dass Ihre Veranstaltung reibungslos abläuft.",
    image: "/ordnertätigkeit.jpg",
  },
  {
    name: "Lade- und Kaufhausdetektive",
    role: "Unsere Lade- und Kaufhausdetektive sorgen dafür, dass Ihre Waren und Ihr Eigentum vor Diebstahl geschützt sind. Wir überwachen Ihr Geschäft und greifen bei Diebstählen sofort ein, um Schaden von Ihrem Unternehmen abzuwenden.",
    image: "/kaufhaus.jpg",
  },
  {
    name: "Doormen",
    role:"Unsere Doormen sorgen für einen professionellen Empfang Ihrer Gäste und Mitarbeiter. Wir überwachen den Zugang zu Ihrem Gebäude und sorgen dafür, dass nur befugte Personen Zutritt erhalten. Unsere Doorman sind geschult und erfahren im Umgang mit Menschen und sorgen dafür, dass sich Ihre Gäste sicher und wohl fühlen.",
    image: "/doormen.jpg",
  }
];

const TeamSection = () => {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl flex flex-col gap-3 font-bold mb-8">
          Unser Sicherheitsteam bei{" "}
          <div className="flex justify-center items-center">
    
          <div className="bg-[#013766] px-2 py-2 flex justify-center gap-1 items-center rounded-lg  text-white">
          <div className="w-6 border-b-3 border-yellow-300" ></div>
            ENTOP
            <div className="w-6 border-b-3 border-yellow-300" ></div>
          </div>
          </div>
        </h2>
        <p className="text-lg mb-12 border-b-4 border-yellow-300 max-w-3xl mx-auto pb-4">
          Mit langjähriger Erfahrung bieten wir Ihnen umfassende
          Sicherheitslösungen für jedes Event und jedes Gebäude.
        </p>
        <div className="grid md:grid-cols-1 gap-4  py-4 rounded-lg ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center px-4 rounded-2xl transition-all bg-gray-100 pt-10 border-y-1 border-gray-300 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse gap-4 justify-end"
              }`}
            >
              <div className="w-full md:w-1/2 pr-6 mb-4 md:mb-0 h-[370px] md:h-[420px] lg:w-[520px] lg:h-[520px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="w-full flex flex-col text-start gap-6 md:w-1/2 pl-6">
                <h3 className="text-xl font-semibold text-gray-700 border-b-3 border-yellow-300 pb-3">
                  {member.name}
                </h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

 


export default TeamSection;
