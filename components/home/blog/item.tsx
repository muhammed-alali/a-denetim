import { propsData } from "@/components/types";
import { blogProps } from "@/components/types/blog";
import Image from "next/image";

export default function İtem({ newData }: { newData: blogProps }) {
  return (
    <>
      <div className="xs:w-full md:w-[340px] lg:w-[310px]  xl:w-[410px] group md:mx-auto mb-6">
        <div className="relative  overflow-hidden rounded-2xl">
          <Image
            className="rounded-2xl group-hover:scale-[1.1] duration-[0.9s]"
            src={newData.imgName}
            alt={newData.title}
            width={410}
            height={270}
          />
          <span className="absolute top-3 left-3 bg-SiteColor text-white rounded-full tracking-[0.8px] py-[6px] px-3 font-semibold text-[15px]">
            {newData.yearMonth}
          </span>
        </div>
        <div className="mt-[26px]">
          <div className=" flex">
            <span className="text-Title font-semibold text-[15px]">
              Jerome Bell
            </span>
            <div className="w-[1px] h-[12px] my-auto bg-[rgb(228,228,228)] mx-2 "></div>
            <span className="text-Title font-medium text-[14px]">
              Furniture
            </span>
          </div>
          <h1 className="text-Title xs:text-[20px] text-[24px] group-hover:text-SiteColor duration-300 font-semibold mt-[10px] leading-[30px]">
            {newData.title}
          </h1>
          <p className="text-[16px] text-Desc mt-3 leading-[1.6em]">
            {newData.desc}
          </p>
        </div>
      </div>
    </>
  );
}
