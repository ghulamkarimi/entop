 
import Link from 'next/link';
import MobileNavbar from './MobileNavbar'; // Pfad anpassen

const Navbar = () => {
  return (
    <>
      {/* MobileNavbar für kleine Bildschirme */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>

      {/* Desktop-Navbar für größere Bildschirme */}
      <div className="hidden md:block w-full">
        {/* Navigation */}
        <ul className="flex items-center justify-between px-10 py-4 bg-gray-100 shadow-md">
          <img src="/entop.jpg" alt="logo" className="h-10" />
          <li>
            <Link
              className="flex items-center gap-2 text-[14px] lg:text-[18px] text-gray-800 group"
              href="/"
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Willkommen
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[14px] lg:text-[18px] text-gray-800 group"
              href="/about"
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Unser Unternehmen
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[14px] lg:text-[18px] text-gray-800 group"
              href="/services"
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Unsere Leistungen
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[14px] lg:text-[18px] text-gray-800 group"
              href="/team"
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Jobs
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[14px] lg:text-[18px] text-gray-800 group"
              href="/contact"
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Ansprechpartner
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;