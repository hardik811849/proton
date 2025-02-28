import React from "react";
import bg_about from "@/app/assets/Frame.svg";
import Image from "next/image";
import eclips from "@/app/assets/Ellipse 27.svg";
import spear from "@/app/assets/sphere@4x-8 1.png";
import shld from "@/app/assets/shld@4x-8 1.png";
import blocks from "@/app/assets/blocks.png";
import Partner from "../Components/Partner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import team1 from "@/app/assets/team2.svg";
import team2 from "@/app/assets/team3.svg";
import team3 from "@/app/assets/team4.svg";
import team4 from "@/app/assets/team5.svg";

const Aboutus = () => {
  return (
    <>
      <Image
        src={eclips}
        alt="eclips"
        width={500}
        height={500}
        className="absolute sm:top-16 md:top-0 left-96 w-[50%]  z-0"
      />
      <div className="relative">
        <Image
          src={bg_about}
          alt="bg_about"
          width={500}
          height={500}
          className="mx-auto w-[40%] mix-blend-hard-light object-cover"
        />
        <div className="w-full h-[80%] absolute top-[5%] bg-gradient-to-t from-[#000000] via-[rgba(0,0,0,0.6)] to-[rgba(16,18,34,0)]"></div>
        <h1 className="text-[130px] font-thin text-center relative -top-[30rem]">
          About Proton
        </h1>
      </div>

      <div className="w-[90%] mx-auto flex justify-center">
        <div className="border_about rounded-lg flex flex-col items-center base:py-[10px] px-[10px] md:py-[10px] px-[10px] lg:py-[20px] lg:px-[30px] xl:py-[30px] xl:px-[70px]  2xl:py-[88px] 2xl:px-[160px]  w-fit mx-auto">
          <h2 className="text-[75px] font-thin">Our Mission</h2>
          <div className="grid grid-cols-2 ">
            <div className="flex items-center justify-center">
              <h1 className="text-[250px] font-thin text-gradient ">01</h1>
            </div>
            <div className="flex items-center leading-9 opacity-75 font-thin">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page It is a long
                established fact that a reader will
              </p>
            </div>

            <div className="flex items-center leading-9 opacity-75 font-thin">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page It is a long
                established fact that a reader will
              </p>
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-[250px] font-thin  text-gradient">02</h1>
            </div>

            <div className="flex items-center justify-center">
              <h1 className="text-[250px] font-thin text-gradient ">03</h1>
            </div>
            <div className="flex items-center leading-9 opacity-75 font-thin">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page It is a long
                established fact that a reader will
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#101011] p-10">
        <h2 className="text-[75px] font-thin text-center ">Our Technology</h2>

        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto bg-white bg-opacity-5 rounded-3xl p-10">
          <div className="w-[90%] mx-auto flex items-center justify-center">
            <Image
              src={spear}
              alt="spear"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </div>
          <div className="rounded-3xl  base:p-6 md:p-14 ">
            <h2 className="text-[30px] font-light">Innovation</h2>
            <p className="font-thin text-[15px] leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page It is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto bg-[#101011] bg-opacity-75 rounded-3xl p-10 mt-10">
          <div className="rounded-3xl  base:p-6 md:p-14 ">
            <h2 className="text-[30px] font-light">Security</h2>
            <p className="font-thin text-[15px] leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page It is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less
            </p>
          </div>
          <div className="w-[90%] mx-auto flex items-center justify-center">
            <Image
              src={shld}
              alt="spear"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 w-[90%] mx-auto bg-white bg-opacity-5 rounded-3xl p-10 mt-10">
          <div className="w-[90%] mx-auto flex items-center justify-center">
            <Image
              src={blocks}
              alt="spear"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </div>
          <div className="rounded-3xl  base:p-6 md:p-14 ">
            <h2 className="text-[30px] font-light">Scalability</h2>
            <p className="font-thin text-[15px] leading-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page It is a long established fact
              that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-[75px] font-thin text-center ">Our Team</h2>

        {/* <div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team1}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team2}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team3}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 relative">
                <Image
                  src={team1}
                  alt="team1"
                  width={500}
                  height={500}
                  className="relative"
                />
                <div className="absolute bottom-10 left-10 text-[25px] font-thin">
                  Nishika Shah
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div> */}
      </div>

      <Partner />
    </>
  );
};

export default Aboutus;
