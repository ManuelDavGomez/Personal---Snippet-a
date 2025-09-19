import Link from "next/link";
import "../components/stylesco.css";

const Nav = () => {
  return (
    <nav class="navbar">
      <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </label>
      <a href="/" class="logo">
        Snippetía
      </a>
      <input type="checkbox" id="chkToggle"></input>
      <ul class="main-nav" id="js-menu">
        <li>
          <Link href="/" class="nav-links">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/pages/biblioteca" class="nav-links">
            Biblioteca
          </Link>
        </li>
      </ul>

      <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Empezar gratis</button>
    </nav>
  );
};

export default Nav;
