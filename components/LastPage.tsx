import Image from "next/image";

export function LastPage() {
      return (
            <main className="relative bg-[url('/image/asset/cover-depan.webp')] p-5 bg-cover text-center items-center justify-center flex flex-col h-full">
                  <div className="absolute w-full h-full inset-0 bg-white/10 backdrop-blur-sm z-0"></div>
                  <div className="bg-primary-light h-full rounded-[200px] md:rounded-[280px] z-10 w-full shadow-lg flex overflow-hidden flex-col items-center justify-center gap-2 pb-28">
                        <div className="relative w-full h-full max-h-90">
                              <Image src="/image/photo/WIL00330_gm_optimized.webp" alt="Last Slide" width={800} height={800} className="w-full object-cover h-full max-h-90" />
                              <div className="absolute bottom-0 bg-linear-to-b from-[#D7E2E8]/0 to-[#D7E2E8] h-1/2 w-full z-10"></div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mt-3">THANK YOU FOR YOUR <br /> ATTENDANCE</h2>
                        <p className="text-sm text-neutral-800 max-w-90">
                              Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di hari bahagia kami.
                        </p>

                        <p className="font-dancing-script text-xl text-primary-dark mt-3">
                              Novan & Silvy
                        </p>
                  </div>
            </main>
      )
}