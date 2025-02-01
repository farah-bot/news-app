import * as React from "react";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";

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
              <a href="#" className="p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-200 hover:bg-neutral-300">
                <Facebook className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-200 hover:bg-neutral-300">
                <Instagram className="w-5 h-5 text-gray-700" />
              </a>
              <a href="#" className="p-2 w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-200 hover:bg-neutral-300">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap w-[127px]">
          <div className="text-2xl font-semibold leading-relaxed text-white">
            Telusuri
          </div>
          <div className="flex flex-col justify-center pr-7 mt-6 w-full text-base font-medium text-zinc-100 max-md:pr-5">
            {["Beranda", "Kesehatan", "Otomotif", "Politik", "Olahraga", "Nasional", "Internasional"].map((item) => (
              <div key={item} className="gap-2.5 self-stretch mt-4 w-full">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[189px]">
          <div className="text-2xl font-semibold leading-relaxed text-white">
            Bantuan
          </div>
          <div className="flex flex-col justify-center items-start pr-7 mt-6 text-base font-medium text-zinc-100 max-md:pr-5">
            {["Kontak Kami", "Laporan Pembajakan", "Kebijakan"].map((item) => (
              <div key={item} className="gap-2.5 self-stretch mt-4">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[339px]">
          <div className="text-2xl font-semibold leading-relaxed text-white">
            Berlangganan Berita Terbaru
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex overflow-hidden gap-2.5 items-center p-2 w-full bg-white rounded-lg border border-solid border-neutral-200">
              <input
                type="email"
                placeholder="Masukan email"
                className="flex-1 px-2 text-base leading-7 text-stone-600 outline-none"
              />
              <button className="flex gap-2 justify-center items-center self-stretch px-3 my-auto w-12 h-12 bg-sky-500 rounded-md hover:bg-sky-600">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
