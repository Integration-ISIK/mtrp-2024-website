"use client";
import Header from '../_components/header';
import Footer from '../_components/footer';
import Gallery from "../_components/gallery";

export default function Home() {
  return (
    <div className='flex flex-col w-full h-auto bg-[#EBEEF4]'>
        <Header></Header>
        
        <main className='flex-grow pt-[4.5rem] md:pt-20'>
        <div className="relative bg-cover bg-left-top h-auto min-h-64 md:h-[24rem] w-full pt-4 md:pt-0" style={{ backgroundImage: "url('/img/cover.png')" }}>
            <div className='float-right mr-[2%] md:mr-[28%] pt-[2rem]'>
                <img src="/img/mtrp_ico_white_withtext.png" className="w-[13rem] md:w-[25rem]" alt="" />
            </div>
        </div>
        <div className="flex-grow w-full">
        <div className="opacity-20 blur-sm"></div>
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-8 pb-4">
            <div className=" whitespace-pre-line font-bold text-4xl md:text-6xl px-2 mb-[-2rem]">
                <p className='text-[#0D1F35] text-center'>Gallery</p>
            </div>
            <div className="my-24 w-full">
                <Gallery />
            </div>
        </div>
        </div>
        </main>
        <Footer></Footer>
        
    </div>
  )
}

