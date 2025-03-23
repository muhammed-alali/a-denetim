"use client";

import About from "@/components/home/about/index";
import Hero from "@/components/home/hero";
import TabsBodyCom from "@/components/home/tabsBody";
import HomeLocations from "@/components/home/homelocation";
import Solutions from "@/components/home/solutions";
import Blog from "@/components/home/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TabsBodyCom />
      <HomeLocations />
      <Solutions />
      <Blog />
    </>
  );
}
