import * as React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center px-20 py-16 bg-slate-700 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="gap-5 self-start text-3xl font-semibold text-white">
              Berita Kini
            </div>
            <div className="mt-6 w-full text-lg leading-relaxed text-zinc-100 max-md:max-w-full">
              © 2023 Berita Kini. All Rights Reserved.
            </div>
          </div>
          <div className="flex flex-col mt-11 w-full max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl font-semibold leading-relaxed text-white max-md:max-w-full">
              Ikuti Kami
            </div>
            <div className="flex gap-6 items-start self-start mt-6">
              <div className="flex gap-2.5 items-center p-2 w-10 h-10 rounded-xl bg-neutral-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7cf15b0bd0d41a9927ed24a4876438d0b050365259c03f3ff292fceea003620?placeholderIfAbsent=true&apiKey=770a91bd70474eb39d8c1896cfba8984"
                  className="object-contain w-6 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 items-center p-2 w-10 h-10 rounded-xl bg-neutral-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d00e847740acffa99e221a9257cbf1cfa9c7033f0803cfc4c84993b446974d9?placeholderIfAbsent=true&apiKey=770a91bd70474eb39d8c1896cfba8984"
                  className="object-contain w-6 aspect-square"
                />
              </div>
              <div className="flex gap-2.5 items-center p-2 w-10 h-10 rounded-xl bg-neutral-200">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b22bda9980c04e2d0eff20f8aca1bab3ba4c500c0c8abe4f2ca7312af5bcc981?placeholderIfAbsent=true&apiKey=770a91bd70474eb39d8c1896cfba8984"
                  className="object-contain w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap w-[127px]">
          <div className="text-2xl font-semibold leading-relaxed text-white">
            Telusuri
          </div>
          <div className="flex flex-col justify-center pr-7 mt-6 w-full text-base font-medium text-zinc-100 max-md:pr-5">
            <div className="gap-2.5 self-stretch w-full">Beranda</div>
            <div className="gap-2.5 self-stretch mt-4 w-full">Kesehatan</div>
            <div className="gap-2.5 self-stretch mt-4 w-full">Otomotif</div>
            <div className="gap-2.5 self-stretch mt-4 w-full">Politik</div>
            <div className="gap-2.5 self-stretch mt-4 w-full">Olahraga</div>
            <div className="gap-2.5 self-stretch mt-4 w-full">Nasional</div>
            <div className="gap-2.5 self-stretch mt-4 w-full">
              Internasional
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[189px]">
          <div className="text-2xl font-semibold leading-relaxed text-white">
            Bantuan
          </div>
          <div className="flex flex-col justify-center items-start pr-7 mt-6 text-base font-medium text-zinc-100 max-md:pr-5">
            <div className="gap-2.5 self-stretch w-[99px]">Kontak Kami</div>
            <div className="gap-2.5 self-stretch mt-4">Laporan Pembajakan</div>
            <div className="gap-2.5 self-stretch mt-4 whitespace-nowrap w-[99px]">
              Kebijakan
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[339px]">
          <div className="text-2xl font-semibold leading-relaxed text-white">
            Berlangganan Berita Terbaru
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex overflow-hidden gap-2.5 items-center p-2 w-full bg-white rounded-lg border border-solid border-neutral-200">
              <div className="flex-1 shrink gap-2.5 self-stretch my-auto text-base leading-7 basis-6 min-w-[240px] text-stone-300">
                Masukan email
              </div>
              <div className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 bg-sky-500 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e5cfc2abf1068cae4f0cc733543d6fd6e32ed0a82396f5f9453309d6f20aa70?placeholderIfAbsent=true&apiKey=770a91bd70474eb39d8c1896cfba8984"
                  className="object-contain self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
