import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-[#013766] text-white py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Unternehmensinfo */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Über uns</h3>
              <p className="text-gray-400 text-sm">
                <span className="text-yellow-300 font-bold">ENTOP</span> bietet erstklassige Dienstleistungen und Produkte, die auf
                Ihre Bedürfnisse zugeschnitten sind. Unser Team steht Ihnen
                jederzeit zur Verfügung, um Ihnen zu helfen und Ihre Fragen zu
                beantworten.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Schnellzugriff</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-yellow-500">
                    Willkommen
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    Unser Unternehmen
                  </a>
                </li>
                <li>
                  <a
                    href="/kontakt"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    Unsere Leistungen
                  </a>
                </li>
                <li>
                  <a
                    href="/datenschutz"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="/impressum"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    Ansprechpartner
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Kontakt</h3>
              <p className="text-gray-400 text-sm mb-2">
                Erreichen Sie uns über:
              </p>
              <ul>
                <li>
                  <Link href="#" className="text-gray-400">
                    📍 Musterstraße 123, 12345 Musterstadt
                  </Link>
                </li>
                <li>
                  <Link href="tel:+49 123 456 789" className="text-gray-400">
                    📞 +49 123 456 789
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@musterfirma.de" className="text-gray-400">
                    ✉️ info@musterfirma.de
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 mr-4"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-yellow-300 pt-6 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 ENTOP . Alle Rechte vorbehalten.
            </p>
          
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  