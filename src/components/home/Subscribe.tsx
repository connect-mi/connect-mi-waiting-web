import { Logo } from "../../images/logo";
import { SubInput } from "../sharables";

const Subscribe = () => {
  return (
    <div className="flex flex-wrap justify-around items-center bg-[#36424F] p-8 space-y-4 md:space-y-0">
      <div className="flex flex-row space-x-3">
        <img className="w-10" src={Logo} alt="logo" />
        <div className="self-center font-bold text-2xl text-white">
          Connect MI
        </div>
      </div>
      <div className="text-white">
        Subscribe to our newsletter and be the first to know about our hottest
        offers.
      </div>
      <div className="">
        <SubInput />
      </div>
    </div>
  );
};

export default Subscribe;
