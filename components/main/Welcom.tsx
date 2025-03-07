const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4  mt-20">
      <p className="mb-10 text-[20px] font-bold">Sicherheitsdienst Frankfurt</p>
      <h1 className="flex flex-col items-center gap-2 justify-center text-4xl font-bold text-center text-gray-800">
        <span>Herzlich Willkommen bei</span>
        <span>ENTOP Sicherheit</span>
      </h1>
      <div className="w-72 flex justify-center items-center border border-b-4 border-yellow-300 mb-6" />
      <p className="text-center text-gray-800 text-lg px-4 font-bold">
        Ein herzliches Willkommen wünscht Ihnen das Team des ENTOP
        Sicherheitsdienstes, Ihr kompetenter Ansprechpartner in allen Fragen
        rund um Ihre Sicherheit.
      </p>
    </div>
  );
};

export default Welcome;
