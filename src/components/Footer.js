import {BsFacebook, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

export default function Footer() {
  return(
    <footer className="bg-footer-blue flex flex-col sm:flex-row sm:justify-between gap-4 py-4 px-6">

      <div className="flex flex-col items-start gap-2">
        <img src="/logos/logo_noir.png" alt="logo" className="h-10" />

        <div className="flex gap-6">
          <a href="https://www.facebook.com/profile.php?id=100064667964190" target="_blank">
            <BsFacebook size="32" />
          </a>
          <a href="https://www.linkedin.com/company/xembee/" target="_blank">
            <BsLinkedin size="32"  />
          </a>
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