import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {FaBars} from "react-icons/fa";
import {MdClose} from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      menu.current.classList.replace("-translate-x-full", "animate-menu-open");
    } else {
      menu.current.classList.replace("animate-menu-open", "animate-menu-close");
      setTimeout(() => {
        menu.current.classList.replace("animate-menu-close", "-translate-x-full");
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu.current && !menu.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <>
      <div
        ref={menu}
        className={`bg-white shadow-2xl fixed left-0 h-screen items-start py-4 w-80 transform transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-1">
          <button onClick={handleClick}>
            <MdClose size={32}/>
          </button>
        </div>
        <nav>
          <ul className="leading-loose p-8">
            <li>
              <Link onClick={handleClick} to="/" className="hover:underline">Accueil</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/our-project" className="hover:underline">Notre projet</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/the-concept" className="hover:underline">Le concept</Link>
            </li>
          </ul>
        </nav>
      </div>
      <header className="p-4 flex justify-between sm:justify-start sm:gap-8">
        <button onClick={handleClick}>
          <FaBars size={32} ></FaBars>
        </button>
        <Link to="/">
          <img src="/logos/logoV3.svg" className="w-56" alt="logo"/>
        </Link>
        <div></div>
      </header>
    </>
  );
};
