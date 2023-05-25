import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div
        className="flexCenter innerWidth paddings h-container"
        style={{
          justifyContent: "space-between",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <h1 className="h-head">SweetyHome</h1>
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="h-menu flexCenter" style={getMenuStyle(menuOpen)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((pre) => !pre)}>
          <BiMenuAltRight size={20} />
        </div>
      </div>
    </section>
  );
};
