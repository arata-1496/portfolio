import Link from "next/link";
import Image from "next/image";
import "./Header.css";

const Header = ({ pageType }) => {
  return (
    <header className="header">
      <div className="header-inner">
        {pageType === "other" ? (
          <Image src="/MV/icon.svg" width={317} height={60} alt="icon" />
        ) : (
          <></>
        )}
        <nav className="nav">
          <ul className="nav-link">
            <li>
              <Link href="/">TOP</Link>
            </li>
            <li>
              <Link href="/profile">PROFILE</Link>
            </li>
            <li>
              <Link href="/works">WORKS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
