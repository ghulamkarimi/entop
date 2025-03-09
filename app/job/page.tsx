import { div } from "framer-motion/client";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Page = () => {
    return (
      <div className="container mx-auto px-4 ">
        <div className="relative w-full h-[500px]">
          <img
            className="w-full h-[500px] object-cover rounded-lg shadow-md"
            src="büro.jpg"
            alt="Büro"
          />
          <div className="absolute inset-x-0 bottom-1 h-1 flex items-center justify-center">
            <p className="text-3xl font-bold bg-[#013766] text-white py-6 px-6 rounded-lg">
              Stellenangebote
            </p>
          </div>
        </div>

        <div className="container mx-auto text-start px-8 mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Unsere aktuellen Stellenangebote
            </h2>
            <p className=" mb-12 border-b-4 border-yellow-300 text-center max-w-3xl px-4 mx-auto pb-4 text-xl font-bold">
              Wir suchen ständig motivierte Mitarbeiter, die unser Team
              verstärken. Bewerben Sie sich jetzt!
            </p>
            <span className="text-lg font-bold">
              <p>Melde dich gerne bei uns</p>
              <p>telefonisch oder per E-Mail:</p>
            </span>


            <div className="flex flex-col items-start gap-4 mt-6">
              <div className="text-start">
                <Link
                  href="tel: +49 176 629 190 92"
                  className="flex items-center font-bold gap-2 "
                >
                  <span className="text-yellow-500 ">
                    <Phone size={32} className=" animate-pulse" />
                  </span>{" "}
                  +49 176 629 190 92
                </Link>
              </div>

              <div>
                <Link
                  href="mailto:entop.sicherheit@hotmail.com"
                 className="flex items-center font-bold gap-2 "
                >
                  <span className="text-yellow-500 ">
                    <Mail size={32} className=" animate-pulse" />
                  </span>
                  <p> entop.sicherheit@hotmail.com</p>
                </Link>
              </div>
            </div>


          </div>

          <p className=" text-start text-lg px-4">
            Du bist verantwortungsbewusst, teamfähig und möchtest einen Beitrag
            zur Sicherheit deiner Mitmenschen und deiner Umgebung leisten? Dann
            bist du bei ENTOP genau richtig! Wir suchen engagierte
            Sicherheitskräfte, die spannende und verantwortungsvolle Aufgaben
            übernehmen möchten. Egal, ob du bereits Erfahrung hast oder neu in
            der Branche bist {"-"} bei uns findest du den richtigen Einstieg. Um im
            Sicherheitsdienst zu arbeiten, sind bestimmte gesetzliche
            Qualifikationen erforderlich: die Unterrichtung im Bewachungsgewerbe
            sowie die Sachkundeprüfung nach § 34a GewO. Falls du diese noch
            nicht hast, ist das kein Problem{"-"} wir bieten dir die Möglichkeit
            zur Ausbildung!
          </p>
        </div>
      </div>
    );
  };
  
  export default Page;
  