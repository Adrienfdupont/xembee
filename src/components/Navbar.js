import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Accueil
                    </Link>
                </li>

                <li>
                    <Link to="/our-project">
                        Notre projet
                    </Link>
                </li>

                <li>
                    <Link to="/the-concept">
                        Le concept
                    </Link>
                </li>
            </ul>
        </nav>
    );
};