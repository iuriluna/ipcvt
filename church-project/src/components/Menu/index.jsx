import { useState, useEffect } from "react";
import "./styles.css";
import ImageLogo from "../../assets/logo-ipcvt.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [activeColor, setActiveColor] = useState(false);

  useEffect(() => {
    positionscroll();

    window.addEventListener("scroll", positionscroll);
  }, []);

  function positionscroll() {
    if (window.scrollY > 40) {
      setActiveColor(true);
    } else {
      setActiveColor(false);
    }
  }

  const nav = useNavigate();
  return (
    <section className="menu">
      <header
        action={activeColor ? "true" : undefined}
        className={activeColor ? "activeColor" : ""}
      >
        <img onClick={() => nav("/")} src={ImageLogo} alt="logo-ipcvt" />
        <nav>
          <h1 className="nav" onClick={() => nav("/sobre")}>
            Sobre
          </h1>
          <h1 className="nav" onClick={() => nav("/onde")}>
            Onde
          </h1>
          <h1 className="nav" onClick={() => nav("/doe")}>
            Doe
          </h1>
          <i className="bi bi-search"></i>
        </nav>
      </header>
    </section>
  );
};

export default Menu;
