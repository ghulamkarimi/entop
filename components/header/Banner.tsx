import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative">
      <Image
        src="/two.jpg"
        alt="Banner für Sicherheitsdienstleistung Entop"
        layout="fill"
        objectFit="cover"
        className="w-full h-full "
      />
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="bg-[#013765] flex flex-col w-52 bg-opacity-90 p-4 rounded-lg">
          <div className="flex w-full items-center justify-center">
            <div className="border border-b-4 w-full border-amber-300" />
            <h1 className="text-white mx-1.5 text-3xl font-semibold text-center">
              ENTOP
            </h1>
            <div className="border border-b-4 w-full border-amber-300" />
          </div>
          <h1 className="ml-2 text-white text-3xl font-semibold pb-1 border-b-4 border-yellow-300">
            Sicherheit
          </h1>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-1 h-1 flex items-center justify-center">
        <div className="group bg-[#013765] rounded-lg py-6 px-4">
          <h2 className="text-white text-center text-lg  mb-1.5 font-semibold">
            Service Rufnummer
          </h2>
          <Link
            href="tel:+49 176 629 190 92"
            className="text-white text-center flex gap-4 justify-center items-center text-lg md:text-2xl lg:text-4xl font-semibold group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-300 transition-all"
          >
            <Phone className=" animate-pulse text-yellow-300" size={32} />
            +49 176 629 190 92
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;