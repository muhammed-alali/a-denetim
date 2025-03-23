import Image from "next/image";
import React from "react";

import { FooterItem } from "./data";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-Title ">
      <div className="border-b border-[rgba(255,255,255,0.08)] ">
        <div className="md:container md:w-auto lg:w-full md:mx-4 xs:mx-4 xs:py-[30px] lg:mx-auto xs:block  flex justify-between py-[50px]">
          <div className="xs:pb-5">
            <Image
              src={"/photo/logo-footer@2x.png"}
              alt="logo"
              width={166}
              height={48}
            ></Image>
          </div>
          <div className=" text-white">
            <div className="flex gap-4">
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaFacebookF className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaLinkedinIn className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaInstagram className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaXTwitter className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaYoutube className=" text-[18px] mx-auto " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container md:w-auto lg:w-full md:mx-4 xs:mx-4 lg:mx-auto grid grid-cols-12 py-[50px]">
        <div className="xs:col-span-12 col-span-5 xs:mb-4 xs:mr-[8%]  md:mr-[11%] xl:mr-[30%]">
          <p className="text-[16px] text-[#a3abb0]  leading-6 xs:mb-2">
            Specializes in providing high-class tours for those in need. Contact
            Us
          </p>
          <div className="mt-3">
            {FooterItem.map((ıtem) => {
              return (
                <>
                  <div>
                    <div className="flex gap-3 items-center mb-4">
                      <div>
                        <span className="text-[#a3abb0] text-5">
                          {ıtem.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[14px]  text-white">{ıtem.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="xs:col-span-6 md:col-span-3 lg:col-span-2 text-white">
          <h2 className="text-[16px] font-bold mb-3">Blog</h2>
          <ul className="text-[#a3abb0] text-[15px] leading-[22px] font-normal w-fit">
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px] ">
              Pricing Plans
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Our Services
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              About Us
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="xs:col-span-6 md:col-span-3 lg:col-span-2 text-white">
          <h2 className="text-[16px] font-bold mb-3">Services</h2>
          <ul className="text-[#a3abb0] text-[15px] w-fit leading-[22px] font-normal">
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Property For Sale
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Property For Rent
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Property For Buy
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Our Agents
            </li>
          </ul>
        </div>
        <div className="xs:col-span-12 mt-5 lg:mt-0 col-span-2 text-white">
          <h2 className="text-[16px] font-bold mb-3">Properties</h2>
          <ul className="text-[#a3abb0] text-[15px] w-fit leading-[22px] font-normal">
            <li className=" w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Modern Apartment in LA
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Casa Lomas de Machalí Machas
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Machalí Machas
            </li>
            <li className="w-fit mt-[6px] relative  after:duration-300 hover:after:w-full hover:text-SiteColor pb-[2px] after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[1px]">
              Apartment in LA
            </li>
          </ul>
        </div>
      </div>

      <div className="xs:block xs:mx-4 flex justify-between py-[30px] md:container md:w-auto lg:w-full md:mx-4 lg:mx-auto text-[#a3abb0]   border-t border-[rgba(255,255,255,0.08)]">
        <div className="xs:text-sm text-[14px] font-normal xs:pb-4">
          ©2024 Homelengo. All Rights Reserved.
        </div>
        <div className="xs:text-sm text-[14px] font-normal flex gap-4">
          <span className="hover:text-SiteColor duration-300">
            Terms Of Services{" "}
          </span>
          <span className="hover:text-SiteColor duration-300">
            Privacy Policy
          </span>
          <span className="hover:text-SiteColor duration-300 ">
            {" "}
            Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
