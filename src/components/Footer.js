import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

export default function Footer() {
  return(
    <footer className="bg-black text-white flex flex-col sm:flex-row sm:justify-between gap-4 py-4 px-6">

      <div className="flex flex-col items-start gap-2">
        <img src="/logos/logo.png" className="h-10" />

        <div className="flex gap-6">
          <BsFacebook size="32" className="cursor-pointer"/>
          <BsLinkedin size="32" className="cursor-pointer"/>
          <BsInstagram size="32" className="cursor-pointer" />
        </div>
      </div>

      <div>
        <div className="underline cursor-pointer">
          CONTACT@XEMBEE.COM
          <br/>
          <Link to="/legal-notices">MENTIONS LÉGALES</Link>
        </div>

        <div>
          XEMBEE © Tous Droits Réservés - 2023
        </div>
      </div>
    </footer>
  )
}