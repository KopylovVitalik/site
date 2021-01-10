import React from "react";
import GlobalContext from "../../context/globalContext";

export default function ThemeToggler() {
  const globalContext = React.useContext(GlobalContext);
  const { theme, setTheme } = globalContext;

  function changeThemeToggle(e, theme) {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("gradient");
        break;
      case "gradient":
        setTheme("light");
        break;
      default:
        setTheme("light");
        break;
    }
  }

  return (
    <button
      className={`theme-toggler btn is-theme-${theme} is-outlined`}
      onClick={e => changeThemeToggle(e, theme)}
    >
      <span className="btn__text">{theme}</span>
    </button>
  );
}
