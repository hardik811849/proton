import React from "react";
import logo from "@/app/assets/navbar/logo1.svg";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FaLinkedin } from "react-icons/fa";
import { BsReddit } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import gray_logo from "@/app/assets/gray_logo1.svg";
import { Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#161616] base:p-4 md:p-20  mt-20">
        <div className="w-[90%] mx-auto flex justify-between base:flex-col base:items-center md:flex-col md:items-center lg:flex-col items-center xl:flex-row">
          <div>
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="base:w-[100%] md:w-[20%]"
            />
            <div className="flex gap-4 mt-4">
              <FaLinkedin size={36} />
              <BsReddit size={36} />
              <FaFacebook size={36} />
              <FaInstagramSquare size={36} />
            </div>
          </div>
          <div>
            <p>Connect with us</p>
            <div className="relative base:w-full md:w-[40rem] mt-5 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white bg-opacity-20 border-2  border-white border-opacity-20 placeholder-white p-3 rounded-full "
              />
              <Button
                pos={"absolute"}
                right={2}
                top={2}
                bg={"#ff5800"}
                rounded={"full"}
                color={"#fff"}
                fontWeight={"thin"}
                className="absolute  right-2 top-2 bg-[#ff5800] rounded-full text-[#fff] p-2 mr-1"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <hr className="mt-12 text-zinc-600 opacity-10 w-full" />

        <div className="grid base:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 mt-16">
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">Learn</h2>
            <div className="opacity-55 font-thin flex flex-col">
              <Link href={"#"}>Face value simulation</Link>
              <Link href={"#"}>how it works</Link>
              <Link href={"#"}>Bounus ranking</Link>
            </div>
          </div>
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">Our solutions</h2>
            <div className="opacity-55 font-thin flex flex-col">
              <Link href={"#"}>Proton</Link>
              <Link href={"#"}>Auctions</Link>
              <Link href={"#"}>Network staking</Link>
              <Link href={"#"}>Get whitelisted</Link>
            </div>
          </div>
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">Library</h2>
            <div className="opacity-55 font-thin flex flex-col">
              <Link href={"#"}>Github</Link>
              <Link href={"#"}>whitepaper</Link>
              <Link href={"#"}>Aution document</Link>
              <Link href={"#"}>pitch deck</Link>
              <Link href={"#"}>one pager</Link>
            </div>
          </div>
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">Liquidity 24/7</h2>
            <div className="opacity-55 font-thin flex flex-col">
              <Link href={"#"}>Liquidity </Link>
              <Link href={"#"}>Exchanges</Link>
              <Link href={"#"}>Alternative Trading System</Link>
            </div>
          </div>
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">Community</h2>
            <div className="opacity-55 font-thin flex flex-col">
              <Link href={"#"}>Telegram</Link>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Linkedin</Link>
              <Link href={"#"}>twitter</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>Reddit</Link>
              <Link href={"#"}>Medium</Link>
              <Link href={"#"}>Events</Link>
            </div>
          </div>
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">About</h2>
            <div className="opacity-55 font-thin">
              {/* <Link href={"/about-us"}>About us</Link> <br /> */}
              <Link href={"#"}>Our Team</Link> <br />
              <Link href={"#"}>Vision</Link> <br />
              <Link href={"#"}>Awards</Link> <br />
              <Link href={"#"}>Partner with us</Link> <br />
              <Link href={"#"}>privacy policy</Link> <br />
              <Link href={"#"}>T & C</Link> <br />
              <Link href={"#"}>Cookies</Link> <br />
            </div>
          </div>
          <div className="leading-10">
            <h2 className="text-[23px] font-medium">Help</h2>
            <div className="opacity-55 font-thin">
              <Link href={"#"}>Reports</Link> <br />
              {/* <Link href={"/contact-us"}>Contact Us</Link> <br /> */}
              <Link href={"#"}>Help centre</Link> <br />
              <Link href={"#"}>Announcements</Link> <br />
            </div>
          </div>
        </div>
        <hr className="opacity-10 w-full mt-10" />

        <div className="mt-10 ">
          <Image
            src={gray_logo}
            alt="logo"
            width={100}
            height={100}
            className="w-[10%]"
          />
          <p className="opacity-50 mt-4 font-thin">
            It is a long established fact that a reader{" "}
          </p>
          <div className="flex base:flex-col md:flex-col lg:flex-row justify-between items-center mt-4">
            <p className="font-thin">
              Copyright © 2024 Proton | All Rights Reserved.
            </p>
            <div className="flex base:flex-col md:flex-row gap-4 opacity-50">
              <a>Terms of Use</a>
              <a>Privacy Policy</a>
              <a>Legal Disclaimer</a>
              <a>Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="bg-[#17192C] relative">
    //   <div className="w-[90%] mx-auto flex flex-col justify-center items-center base:p-3 md:p-[86px]">
    //     <Image
    //       src={logo}
    //       alt="logo"
    //       width={40}
    //       height={40}
    //       className="base:w-[100%] md:w-[20%]"
    //     />
    //     <ul className="flex base:flex-col text-center md:flex-row gap-12 mt-12">
    //       <li className="opacity-50">
    //         <Link href="/">Home</Link>
    //       </li>
    //       <li className="opacity-50">
    //         <Link href="/">Features</Link>
    //       </li>
    //       <li className="opacity-50">
    //         <Link href="/">Roadmap</Link>
    //       </li>
    //       <li className="opacity-50">
    //         <Link href="/">Blogs</Link>
    //       </li>
    //     </ul>
    //     <div className="relative base:w-full md:w-[40rem] mt-5 ">
    //       <input
    //         type="email"
    //         placeholder="Enter your email"
    //         className="w-full bg-white bg-opacity-20 border-2  border-white border-opacity-20 placeholder-white p-6 rounded-full "
    //       />
    //       <button className="absolute right-2 top-2 bg-white rounded-full text-[#17192C] p-5 mr-1">
    //         Subscribe
    //       </button>
    //     </div>
    //     <hr className="mt-12 text-zinc-600 opacity-10 w-full" />

    //     <div className="w-full mx-auto mt-12 flex base:flex-col md:flex-col gap-4 lg:flex-col gap-4 xl:flex-row 2xl:flex-row items-center justify-between">
    //       <p className="opacity-50">
    //         Copyright © 2024 Proton. | All Rights Reserved.
    //       </p>
    //       <ul className="flex base:flex-col md:flex-col lg:flex-row text-center base:flex-col  md:flex-row gap-12 ">
    //         <li className="opacity-50">
    //           <Link href="/">Terms of Use</Link>
    //         </li>
    //         <li className="opacity-50">
    //           <Link href="/">Privacy Policy </Link>
    //         </li>
    //         <li className="opacity-50">
    //           <Link href="/">Legal Disclaimer </Link>
    //         </li>
    //         <li className="opacity-50">
    //           <Link href="/">Cookies Policy </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
