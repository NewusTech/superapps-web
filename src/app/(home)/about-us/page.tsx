import AboutUsImageCard from "@/components/elements/aboutUs/cardImages";
import AboutUsNumberCard from "@/components/elements/aboutUs/cardNumbers";
import { aboutContents, AboutImages, AboutNumbers } from "@/constants/main";
import Image from "next/image";
import React from "react";

export default function AboutUsScreen() {
  const renderContent = () => {
    return (
      <div className="w-10/12 flex flex-col gap-y-20">
        {aboutContents?.isRight?.value && (
          <div className="w-full flex flex-row gap-x-12">
            <div className="w-1/12 h-full">
              <Image
                src={aboutContents.isRight.firstContent.image}
                alt={aboutContents.isRight.firstContent.title}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <h5 className="text-neutral-700 font-semibold text-[18px]">
                {aboutContents.isRight.firstContent.title}
              </h5>
              <p className="text-neutral-700 font-normal text-[16px]">
                {aboutContents.isRight.firstContent.desc}
              </p>
            </div>
          </div>
        )}

        {aboutContents?.isLeft?.value && (
          <div className="w-full flex flex-row gap-x-12">
            <div className="w-full flex flex-col gap-y-2">
              <h5 className="text-neutral-700 font-semibold text-[18px]">
                {aboutContents.isLeft.secondContent.title}
              </h5>
              <p className="text-neutral-700 font-normal text-[16px]">
                {aboutContents.isLeft.secondContent.desc}
              </p>
            </div>
            <div className="w-1/12 h-full">
              <Image
                src={aboutContents.isLeft.secondContent.image}
                alt={aboutContents.isLeft.secondContent.title}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}

        {aboutContents?.isRight?.value && (
          <div className="w-full flex flex-row gap-x-12">
            <div className="w-1/12 h-full">
              <Image
                src={aboutContents.isRight.thirdContent.image}
                alt={aboutContents.isRight.thirdContent.title}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <h5 className="text-neutral-700 font-semibold text-[18px]">
                {aboutContents.isRight.thirdContent.title}
              </h5>
              <p className="text-neutral-700 font-normal text-[16px]">
                {aboutContents.isRight.thirdContent.desc}
              </p>
            </div>
          </div>
        )}

        {aboutContents?.isLeft?.value && (
          <div className="w-full flex flex-row gap-x-12">
            <div className="w-full flex flex-col gap-y-2">
              <h5 className="text-neutral-700 font-semibold text-[18px]">
                {aboutContents.isLeft.fourthContent.title}
              </h5>
              <p className="text-neutral-700 font-normal text-[16px]">
                {aboutContents.isLeft.fourthContent.desc}
              </p>
            </div>
            <div className="w-1/12 h-full">
              <Image
                src={aboutContents.isLeft.fourthContent.image}
                alt={aboutContents.isLeft.fourthContent.title}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full flex flex-col items-center mt-[90px] mb-[350px]">
      <div className="w-full flex flex-col items-center justify-center bg-[#06597E] min-h-[100px] gap-y-10 pt-20 pb-40 relative">
        <div className="w-full flex flex-col items-center justify-center gap-y-10">
          <h2 className="text-neutral-50 font-bold text-[32px]">
            TENTANG RAMA TRANZ
          </h2>

          <p className="text-neutral-50 text-center font-normal text-[18px] mx-48">
            Rama Trans adalah perusahaan transportasi darat terkemuka yang
            menyediakan layanan andal dan berkualitas tinggi. Dengan armada
            kendaraan modern yang terawat, kami menawarkan perjalanan antar
            kota, sewa kendaraan untuk acara khusus, dan transportasi untuk
            perusahaan. Kami berkomitmen untuk memberikan pengalaman perjalanan
            yang nyaman dan aman bagi setiap penumpang.
          </p>
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-x-16 absolute">
          {AboutImages?.map((item: any, i: number) => {
            return <AboutUsImageCard key={i} item={item} />;
          })}
        </div>
      </div>

      <div className="w-11/12 flex flex-col justify-center items-center border border-grey-100 rounded-xl shadow-lg mt-40 py-8 gap-y-8">
        <div className="w-6/12 flex flex-col items-center justify-center border border-grey-100 rounded-lg gap-y-4 py-4">
          <h5 className="font-semibold text-neutral-700 text-[18px]">
            Visi Kami
          </h5>

          <p className="text-neutral-700 text-center font-normal text-[16px]">
            Menjadi perusahaan multi dimensional yang eksis, inovatif, dan
            antisipatif.
          </p>
        </div>

        <div className="w-full justify-center items-center flex flex-col gap-y-6">
          <h5 className="font-semibold text-neutral-700 text-[18px]">
            Misi Kami
          </h5>

          <div className="w-11/12 flex flex-row gap-x-4">
            {AboutNumbers?.map((item: any, i: number) => {
              return <AboutUsNumberCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>

      <div className="w-full background-testimoni flex flex-col justify-center items-center mt-12 py-8 gap-y-8">
        <h2 className="text-neutral-700 font-semibold text-[26px]">
          Mengapa Memilih Travel di{" "}
          <span className="text-primary-700">Rama Tranz</span>
        </h2>

        {/* letak if else condition */}
        {renderContent()}
      </div>
    </section>
  );
}
