"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/app/assets/navbar/logo1.svg";
import Link from "next/link";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  const metaMask = () => {
    if (address === undefined) {
      open();
    }
  };

  useEffect(() => {
    console.log("====>", address);
  }, []);

  const handleMenuItemClick = (id) => {
    if (window.location.pathname !== "/site") {
      navigate("/site", { state: { scrollTo: id } });
    } else {
      handleScroll(id);
    }
  };

  return (
    <>
      <header className="relative z-0">
        <nav className="flex justify-between items-center p-6 w-[90%] mx-auto">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="base:w-[50%] md:w-[20%] lg:w-[10%]"
            />
          </Link>
          <ul className="hidden lg:flex  gap-7 items-center border-2 border-gray-700 p-2 px-4 rounded-full">
            {/* <li className=" font-thin">
              <Link href="/">Home</Link>
            </li> */}
            {/* <li
              className=" font-thin"
              onClick={() => handleMenuItemClick("keyFeature")}
            >
              <Link href="/">Features</Link>
            </li>
            <li className=" font-thin">
              <Link href="/">Roadmap</Link>
            </li>
            <li className=" font-thin">
              <Link href="/">Blogs</Link>
            </li> */}
            <li>
              <Button
                variant={"unstyled"}
                bg={"#ff5800"}
                rounded={"full"}
                fontSize={"15px"}
                w={"120px"}
                onClick={() => metaMask()}
              >
                Connect
              </Button>
            </li>
          </ul>
          <Menu>
            <MenuButton display={{ base: "block", lg: "none" }}>
              <HamburgerIcon boxSize={6} />
            </MenuButton>
            <MenuList bg={"transparent"}>
              <MenuItem bg={"transparent"} color={"#fff"} fontWeight={"thin"}>
                Home
              </MenuItem>
              <MenuItem bg={"transparent"} color={"#fff"} fontWeight={"thin"}>
                <Button variant={"unstyled"} fontWeight={"thin"}>
                  Connect
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
