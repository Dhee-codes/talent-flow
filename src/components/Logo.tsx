import logo from "../assets/logo.svg";
import icon from "../assets/icon.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="TalentFlow" className="hidden md:block w-16 h-auto" />
      <img src={icon} alt="TalentFlow" className="md:hidden w-8 h-auto" />
    </Link>
  );
};
