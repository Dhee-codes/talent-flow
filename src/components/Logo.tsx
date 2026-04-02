import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="TalentFlow" className="w-20 md:w-16 h-auto" />
    </Link>
  );
};
