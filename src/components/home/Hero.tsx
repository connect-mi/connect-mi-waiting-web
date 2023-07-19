import { useEffect, useState } from "react";
import { Background, Background2 } from "../../images";
import { SubInput } from "../sharables";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-10 md:p-56"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        className="flex flex-col bg-no-repeat bg-cover bg-center bg-[#FFE2CF] p-5 md:p-10 rounded-3xl space-y-6"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          <div className="font-bold w-full  md:w-3/5 lg:w-1/3">
            Get connected to services and get any desired product for the best
            prices!
          </div>
          <Timer />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3">
          Enjoy limitless choices! Connect Mi offers an irresistible collection
          of services and products from global stores. Join our exclusive
          waiting list now!
        </div>
        <SubInput />
      </div>
    </div>
  );
};

const Timer = () => {
  // today date
  const t: any = new Date();
  // target date
  const n: any = new Date("2024-01-01");
  // difference
  const d: any = (n - t) / (1000 * 60 * 60 * 24);

  const dz = Math.floor(d);
  const s = FractionPart(d);
  const y = s * 24;
  const yz = Math.floor(y);
  const v = FractionPart(y);
  const u = v * 60;
  const uz = Math.floor(u);
  const w = FractionPart(u);
  const p = w * 60;
  const pz: number = Math.floor(p);

  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(pz);
      setMinutes(uz);
      setHours(yz);
      setDays(dz);
    }, 1000);
  });

  return (
    <div className="flex flex-col bg-[#F9C395] p-2 rounded-2xl items-center">
      <div className="text-sm">Time left</div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col space-x-3 items-center">
          <div className="font-bold text-2xl whitespace-nowrap">{days}</div>
          <div className="">Days</div>
        </div>
        <div className="flex flex-col space-x-3 items-center">
          <div className="font-bold text-2xl whitespace-nowrap">{hours}</div>
          <div className="">Hours</div>
        </div>
        <div className="flex flex-col space-x-3 items-center">
          <div className="font-bold text-2xl whitespace-nowrap">{minutes}</div>
          <div className="">Minutes</div>
        </div>
        <div className="flex flex-col space-x-3 items-center">
          <div className="font-bold text-2xl whitespace-nowrap">{seconds}</div>
          <div className="">Seconds</div>
        </div>
      </div>
    </div>
  );
};

function FractionPart(t: number): number {
  const m = Math.floor(t);
  const f = t - m;
  return f;
}

export default Hero;
