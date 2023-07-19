import { Link } from "react-router-dom";
import { Logo } from "../../images/logo";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between h-[4.5rem] bg-white p-5 w-full items-center">
      <div className="flex flex-row space-x-2">
        <img className="w-14" src={Logo} alt="logo" />
        <div className="self-center font-bold text-2xl">Connect MI</div>
      </div>
      <div className="hidden md:flex flex-row space-x-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
      </div>
      <div className="">
        <button className="bg-[#222F3E] px-6 py-4 text-white rounded-2xl">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Nav;
