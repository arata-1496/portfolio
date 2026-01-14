import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Image
        className="footer-wave"
        src="/MV/MV-wave-bottom.svg"
        alt=""
        width={1440}
        height={240}
        priority
      />
      <p className="footer-copy">© 2025 Arata Ishiguro Portfolio</p>
    </footer>
  );
};

export default Footer;
