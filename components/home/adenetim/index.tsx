import Image from "next/image";
import React from "react";
import { ADenetimItem } from "./item";
export default function ADenetim() {
  return (
    <>
      <section className="grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-[url('/photo/download.png')] bg-no-repeat css-position  ">
        <div className=" ">
          <Image
            src={"/photo/image3-home1.png"}
            alt=""
            className="lg:!w-[850px] lg:!h-[742px] xs:w-[300px] xs:h-[268px] md:w-[400px] md:h-[368px] !relative  xl:ml-[-119px] xs:pb-4 sm:pb-4 lg:!pb-0 md:mr-[-260px]"
            fill
          />
        </div>
        <div className="xs:mx-4 mx-[70px]">
          <h2 className="xs:my-[25px] text-SiteColor text-[11px]   font-bold mb-[30px]">
            A Denetim{" "}
          </h2>

          <h1 className="md:text-[36px] xs:text-[25px] text-Title font-bold mb-5">
            A DENETIM A Denetim, Firma Operasyonu
          </h1>
          {ADenetimItem.map((item) => {
            return (
              <>
                <div className="xs:block flex gap-10 pb-9 group" key={item.id}>
                  <div className="xs:w-fit xs:mb-8 bg-white shadow-gray-500  shadow-2xl py-3 rounded-lg px-3 h-[60px] ">
                    {item.icon}
                  </div>
                  <div>
                    <h1 className="text-Title text-[20px] mb-[10px] font-bold">
                      {item.title}
                    </h1>
                    <p className="text-Desc text-[16px] font-normal leading-[1.875]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
