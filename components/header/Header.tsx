 
import { BellRing, Facebook, Mail, Phone } from "lucide-react"
import Link from "next/link"

const Header = () => {

return (
  
         <header className="bg-[#013765] text-white text-xs flex justify-between items-center p-2 md:p-4">
        <span className="flex items-center gap-2">
          <BellRing size={16} className="text-yellow-300" />
          <div className="flex flex-col">
            <p className="font-semibold">24 Stunden</p>
          </div>
        </span>

        <Link
          href="tel:0800123456"
          className="flex items-center gap-2 hover:text-yellow-300"
        >
          <Phone size={16} />
          <p>0800 123 456</p>
        </Link>

        <Link
          href="mailto:entop.sicherheit@hotmail.com"
          className="hidden md:flex items-center gap-2 hover:text-yellow-300"
        >
          <Mail size={16} />
          <p>entop.sicherheit@hotmail.com</p>
        </Link>

        <Link
          href="https://facebook.com"
          className="hidden md:flex items-center gap-2 hover:text-yellow-300"
        >
          <Facebook size={16} />
          <p>Facebook</p>
        </Link>
      </header>

  
)}

export default Header