import { useState, useEffect } from "react";
import "./styles.css";
import ImageLogo from "../../assets/logo-ipcvt.png";

import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MenuComponent = () => {
  const [activeColor, setActiveColor] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  const goPath = (path) => {
    nav(path);
    handleClose();
  };

  const nav = useNavigate();
  return (
    <section className="menu">
      <header
        action={activeColor ? "true" : undefined}
        className={activeColor ? "activeColor" : ""}
      >
        <img
          className="menu__logo"
          onClick={() => nav("/")}
          src={ImageLogo}
          alt="logo-ipcvt"
        />
        <div className="menu__box">
          <nav className="menu__nav">
            <h1 className="menu__link" onClick={() => nav("/")}>
              Conteúdo
            </h1>
            <h1 className="menu__link" onClick={() => nav("/sobre")}>
              Sobre
            </h1>
            <h1 className="menu__link" onClick={() => nav("/onde")}>
              Onde
            </h1>
            <h1 className="menu__link" onClick={() => nav("/doe")}>
              Doe
            </h1>
          </nav>
          <section className="menu__nav-responsive">
            <i
              className="bi bi-border-width"
              aria-controls={open ? "menu-options" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            ></i>

            <Menu
              id="menu-options"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => goPath("/")}>Conteúdo</MenuItem>
              <MenuItem onClick={() => goPath("/sobre")}>Sobre</MenuItem>
              <MenuItem onClick={() => goPath("/onde")}>Onde</MenuItem>
              <MenuItem onClick={() => goPath("/doe")}>Doe</MenuItem>
            </Menu>
          </section>
        </div>
      </header>
    </section>
  );
};

export default MenuComponent;
