import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineMoon, AiOutlineSun, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = ({ theme, onToggleTheme }) => {
  const [activeNav, setActiveNav] = useState("#main");

  return (
    <nav>
      <a
        href="#main"
        onClick={() => setActiveNav("#main")}
        className={activeNav === "#main" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <AiOutlineSun /> : <AiOutlineMoon />}
      </button>
    </nav>
  );
};

export default Nav;
