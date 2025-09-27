import Link from "next/link";
import "../components/stylesco.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </label>
      <a href="/" className="logo">
        Snippetía
      </a>
      <input type="checkbox" id="chkToggle"></input>
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="/" className="nav-links">
            Inicio
          </a>
        </li>
        <li>
          <Link href="/pages/biblioteca" className="nav-links">
            Biblioteca
          </Link>
        </li>

        <li>
          <Link href="/pages/favoritos" className="nav-links">
            Favoritos
          </Link>
        </li>
        <li>
          <Link href="/pages/agregar" className="nav-links">
            Agregar
          </Link>
        </li>
      </ul>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Empezar gratis
      </button>
    </nav>
  );
};

export default Nav;
