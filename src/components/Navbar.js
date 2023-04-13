import {Link, NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {FaBars} from "react-icons/fa";
import {MdClose} from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef(null);

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
        className={`bg-white shadow-2xl fixed left-0 h-screen items-start py-4 w-96 ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-1">
          <button>
            <MdClose onClick={() => setIsOpen(false)} ref={menu} size={32}/>
          </button>
        </div>

        <nav>
          <ul className="leading-loose p-8">
            <li>
              <Link onClick={() => setIsOpen(false)} to="/" className="hover:underline">Accueil</Link>
            </li>

            <li>
              <Link onClick={() => setIsOpen(false)} to="/our-project" className="hover:underline">Notre projet</Link>
            </li>

            <li>
              <Link onClick={() => setIsOpen(false)} to="/the-concept" className="hover:underline">Le concept</Link>
            </li>
          </ul>
        </nav>
      </div>

      <header className="p-4 fixed">
        <button onClick={() => setIsOpen(true)}>
          <FaBars size={32} className="text-white" ></FaBars>
        </button>
      </header>
    </>
  );
};

