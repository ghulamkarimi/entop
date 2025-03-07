import Link from "next/link";

const ContactCTA = () => {
    return (
      <div className=" my-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4 border-b-2 border-yellow-300 inline-block pb-4">
          Interesse geweckt?
        </h2>
        <p className="text-lg mb-6">
          Wir helfen Ihnen gerne weiter! <br />
          Kontaktieren Sie uns noch heute für weitere Informationen.
        </p>
        <Link
          href="entop.sicherheit@hotmail.com"
          className="inline-block bg-yellow-300 text-black font-bold py-2 px-6 rounded-lg text-lg hover:bg-yellow-500 transition-colors"
        >
          Kontakt aufnehmen
        </Link>
      </div>
    );
  };
  
  export default ContactCTA;
  