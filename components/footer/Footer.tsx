"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.footer
      className="bg-[#013766] text-white py-10 mt-12"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Unternehmensinfo */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Über uns</h3>
            <p className="text-gray-400 text-sm">
              <span className="text-yellow-300 font-bold">ENTOP</span> bietet
              erstklassige Dienstleistungen und Produkte, die auf Ihre
              Bedürfnisse zugeschnitten sind. Unser Team steht Ihnen jederzeit
              zur Verfügung, um Ihnen zu helfen und Ihre Fragen zu beantworten.
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
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.google.com/maps?q=Zeppelinstraße+1,+65760+Eschborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 flex items-center gap-2 hover:text-yellow-500"
                >
                  <MapPin className="text-red-500" size={20} />
                  <span>Zeppelinstraße 1, 65760 Eschborn</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4917662919092"
                  className="text-gray-400 flex items-center gap-2 hover:text-yellow-500"
                >
                  <Phone className="text-green-500" size={20} />
                  <span>+49 176 629 190 92</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:entop.sicherheit@hotmail.com"
                  className="text-gray-400 flex items-center gap-2 hover:text-yellow-500"
                >
                  <Mail className="text-yellow-500" size={20} />
                  <span>entop.sicherheit@hotmail.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 mr-4"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-yellow-300 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 ENTOP . Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Entwickelt von{" "}
            <span className="text-yellow-400 font-semibold">
              {" "}
              Ghulam Karimi
            </span>{" "}
            {"-"} Webentwickler
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
