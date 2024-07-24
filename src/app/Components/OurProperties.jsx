"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";
import pro1 from "@/app/assets/pro1.svg";
import pro2 from "@/app/assets/pro2.svg";
import pro3 from "@/app/assets/pro3.svg";
import Link from "next/link";

const tabs = [
  { id: 1, title: "Commercial Real estate" },
  { id: 2, title: "Hotels" },
  { id: 3, title: "Multi-Family Apartments" },
];

const OurProperties = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="bg-white bg-opacity-5">
      <h2 className="base:text-[30px] md:text-[50px] font-thin text-center  mt-16">
        Our Properties
      </h2>

      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </div>
          ))}
          <div className="tab-slider"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 w-[60%] mt-10 mx-auto ">
        <div className="bg-white bg-opacity-5 p-3 rounded-3xl">
          <h6 className="text-center opacity-50">Rented Since Mar13, 2024</h6>
          <Image
            src={pro1}
            alt="pro1"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="flex justify-between items-center mb-5">
            <div className="mt-4">
              <p className="text-[20px] font-normal opacity-50">
                Saffron Apartments
              </p>
              <p className="text-[30px]">$10,00,000</p>
            </div>
            <div className="bg-white bg-opacity-5 p-3 rounded-xl">
              110 Investors
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <p className="opacity-50">Annual Rental Return</p>
            <p>10%</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Projected Value Growth</p>
            <p>12%</p>
          </div>
          <Link href={"https://www.finix196.com/site/invest"} target="_blank">
            <button className="bg-[#FF5800] rounded-xl p-4 text-white  text-[20px] mt-10 font-medium w-full">
              Invest Now
            </button>
          </Link>
        </div>
        <div className="bg-white bg-opacity-5 p-3 rounded-3xl">
          <h6 className="text-center opacity-50">Rented Since Mar13, 2024</h6>
          <Image
            src={pro3}
            alt="pro1"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="flex justify-between items-center mb-5">
            <div className="mt-4">
              <p className="text-[20px] font-normal opacity-50">
                Silverstuff Hights
              </p>
              <p className="text-[30px]">$7,00,000</p>
            </div>
            <div className="bg-white bg-opacity-5 p-3 rounded-xl">
              110 Investors
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <p className="opacity-50">Annual Rental Return</p>
            <p>10%</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Projected Value Growth</p>
            <p>12%</p>
          </div>
          <Link href={"https://www.finix196.com/site/invest"} target="_blank">
            <button className="bg-[#FF5800] rounded-xl p-4 text-white  text-[20px] mt-10 font-medium w-full">
              Invest Now
            </button>
          </Link>
        </div>
        <div className="bg-white bg-opacity-5 p-3 rounded-3xl">
          <h6 className="text-center opacity-50">Rented Since Mar13, 2024</h6>
          <Image
            src={pro2}
            alt="pro1"
            width={100}
            height={100}
            className="w-full"
          />
          <div className="flex justify-between items-center mb-5">
            <div className="mt-4">
              <p className="text-[20px] font-normal opacity-50">
                Solaris Apartments
              </p>
              <p className="text-[30px]">$10,00,000</p>
            </div>
            <div className="bg-white bg-opacity-5 p-3 rounded-xl">
              110 Investors
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <p className="opacity-50">Annual Rental Return</p>
            <p>10%</p>
          </div>
          <div className="flex justify-between">
            <p className="opacity-50">Projected Value Growth</p>
            <p>12%</p>
          </div>
          <Link href={"https://www.finix196.com/site/invest"} target="_blank">
            <button className="bg-[#FF5800] rounded-xl p-4 text-white  text-[20px] mt-10 font-medium w-full">
              Invest Now
            </button>
          </Link>
        </div>
      </div>

      {/* <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="bg-white p-2 bg-opacity-5">
              <p>Rented Since Mar13, 2024</p>
              <Image src={pro1} alt="pro1" width={100} height={100} />
              <div>
                <div>
                  <p>Saffron Apartments</p>
                  <p>$10,00,000</p>
                </div>
                <div>110 Investors</div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel> */}

      <div>
        {/* <Carousel>
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4">...</CarouselItem>
            <CarouselItem className="pl-4">...</CarouselItem>
            <CarouselItem className="pl-4">...</CarouselItem>
          </CarouselContent>
        </Carousel> */}
      </div>
    </div>
  );
};

export default OurProperties;
