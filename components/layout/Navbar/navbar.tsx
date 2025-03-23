"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  MobileNav,
} from "@material-tailwind/react";
import { SlArrowDown } from "react-icons/sl";
import MenuListComponent from "./menulist";
import Image from "next/image";
import Link from "next/link";
import HeroBtn from "@/components/btn";
import ButtonCom from "@/components/btn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

//////// Menue
// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-semibold text-[1rem] text-Title hover:bg-white "
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <SlArrowDown
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <SlArrowDown
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>

//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <MenuListComponent />
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <MenuListComponent isMenuOpen={isMenuOpen} />
//       </div>
//     </React.Fragment>
//   );
// }

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:gap-[2.5rem] xs:gap-4 md:gap-4">
      <Typography
        as="a"
        href="#"
        className="font-semibold text-[1rem] text-Title w-fit"
      >
        <ListItem className="flex items-center gap-2 my-2 py-1 pr-4 hover:bg-white  relative  after:duration-300 hover:after:w-full after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[2.3px]  ">
          Home
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        className="font-semibold text-[1rem] text-Title"
      >
        <ListItem className="flex items-center gap-2 my-2 py-1 pr-4 hover:bg-white  relative  after:duration-300 hover:after:w-full after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[2.3px]  ">
          About
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        className="font-semibold text-[1rem] text-Title"
      >
        <ListItem className="flex items-center gap-2 my-2 py-1 pr-4 hover:bg-white  relative  after:duration-300 hover:after:w-full after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[2.3px]  ">
          Blog
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        className="font-semibold text-[1rem] text-Title"
      >
        <ListItem className="flex items-center gap-2 my-2 py-1 pr-4 hover:bg-white  relative  after:duration-300 hover:after:w-full after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[2.3px]  ">
          Services
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        className="font-semibold text-[1rem] text-Title"
      >
        <ListItem className="flex items-center gap-2 my-2 py-1 pr-4 hover:bg-white  relative  after:duration-300 hover:after:w-full after:bottom-0 after:left-0 px-0 after:w-0 after:bg-SiteColor  after:absolute  after:h-[2.3px]  ">
          Faq
        </ListItem>
      </Typography>
      <div className="lg:hidden xs:block">
        <ButtonCom hight="3.5rem" paddingX="2.75rem" title="Contact Us" />
      </div>{" "}
      {/* <NavListMenu /> */}
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className=" max-w-full rounded-none  px-4 py-[14px]">
      <div className="flex items-center justify-between  md:container mx-auto">
        <Image src={"/photo/logo2.png"} alt="" width={166} height={48} />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden lg:block">
          <ButtonCom hight="3.5rem" paddingX="2.75rem" title="Contact Us" />
        </div>{" "}
        <IconButton
          variant="text"
          className="lg:hidden active:!bg-white hover:!bg-white disabled:bg-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <h1>
              <IoMdClose className="w-[25px] h-[25px] text-SiteColor" />
            </h1>
          ) : (
            <h1>
              <GiHamburgerMenu className="w-[25px] h-[25px] text-SiteColor" />
            </h1>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="mx-4 lg:mx-auto md:container ">
          <NavList />
        </div>
      </MobileNav>
    </Navbar>
  );
}
