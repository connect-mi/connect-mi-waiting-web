import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import {
  ApplePay,
  Dhl,
  FedEx,
  GooglePay,
  MasterCard,
  Payoneer,
  Paypal,
  Ups,
  Visa,
  WebMoney,
} from "../../images/footer";

const Footer = () => {
  return (
    <div className="flex-col bg-[#222F3E] text-white p-9 space-y-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex flex-col">
          <div className="font-bold text-lg mb-2">Customer Support</div>
          {CS.map((value, i) => {
            return <div key={i}>{value.name}</div>;
          })}
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-lg mb-2">About Connect Mi</div>
          {ACM.map((value, i) => {
            return <div key={i}>{value.name}</div>;
          })}
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-lg mb-2">Sell on Connect Mi</div>
          {SOCM.map((value, i) => {
            return <div key={i}>{value.name}</div>;
          })}
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-lg mb-2">Trade services</div>
          {TS.map((value, i) => {
            return <div key={i}>{value.name}</div>;
          })}
        </div>
      </div>
      <div className="border-t border-white my-5"></div>
      <div className="flex flex-wrap justify-between">
        <div className="">
          <div className="mb-2 font-bold text-lg">Follow us</div>
          <div className="flex flex-row justify-between space-x-2">
            <BsTwitter />
            <BiLogoLinkedin />
            <BsYoutube />
            <BsFacebook />
          </div>
        </div>
        <div className="">
          <div className="mb-2 font-bold text-lg">Delivery</div>
          <div className="flex flex-row justify-between space-x-2">
            <img className="w-14 object-contain" src={Dhl} alt="" />
            <img className="w-14 h-8 object-contain" src={Ups} alt="" />
            <img className="w-14 object-contain" src={FedEx} alt="" />
          </div>
        </div>
        <div className="">
          <div className="mb-2 font-bold text-lg">Payments method</div>
          <div className="flex flex-row justify-between space-x-2">
            <img className="w-10 object-contain" src={Visa} alt="" />
            <img className="w-10 object-contain" src={ApplePay} alt="" />
            <img className="w-10 object-contain" src={MasterCard} alt="" />
            <img className="w-10 object-contain" src={GooglePay} alt="" />
            <img className="w-10 object-contain" src={Paypal} alt="" />
            <img className="w-10 object-contain" src={Payoneer} alt="" />
            <img className="w-10 object-contain" src={WebMoney} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-nowrap justify-around space-x-3">
          <AiOutlineCopyrightCircle />
          <div className=""> All Rights Reserved</div>
        </div>
        <div className="flex flex-wrap space-x-3">
          <div className="whitespace-nowrap">Privacy Policy</div>
          <div className="whitespace-nowrap">Terms of use</div>
          <div className="whitespace-nowrap">Sales and Refunds</div>
          <div className="whitespace-nowrap">Legal</div>
          <div className="whitespace-nowrap">Site Map</div>
        </div>
      </div>
    </div>
  );
};

type test1 = {
  name: string;
};

const CS: Array<test1> = [
  {
    name: "Help Center",
  },
  {
    name: "Delivery options",
  },
  {
    name: "Report an issue",
  },
  {
    name: "Contact us",
  },
];

const ACM: Array<test1> = [
  {
    name: "About  Connectmi.com",
  },
  {
    name: "About  Connectmi group",
  },
  {
    name: "Privacy note",
  },
  {
    name: "Products & services",
  },
];

const SOCM: Array<test1> = [
  {
    name: "Help Center",
  },
  {
    name: "Delivery options",
  },
  {
    name: "Report an issue",
  },
  {
    name: "Contact us",
  },
];

const TS: Array<test1> = [
  {
    name: "Help Center",
  },
  {
    name: "Delivery options",
  },
  {
    name: "Report an issue",
  },
  {
    name: "Contact us",
  },
];
export default Footer;
