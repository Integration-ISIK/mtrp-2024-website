'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';
import { MouseEventHandler } from 'react';

export default function Resources() {
  return (
    <div className='flex flex-col w-full h-auto bg-[#EBEEF4]'>
      <Header></Header>

      <main className='flex-grow pt-[4.5rem] md:pt-20'>
        <div className="relative bg-cover bg-left-top h-auto min-h-64 md:h-[24rem] w-full pt-4 md:pt-0" style={{ backgroundImage: "url('/img/cover.webp')" }}>
          <div className='float-right mr-[2%] md:mr-[28%] pt-[2rem]'>
            <img src="/img/mtrp_ico_white_withtext.webp" className="w-[13rem] md:w-[25rem]" alt="" />
          </div>
        </div>

        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4">
          <div className="md:p-2">
            <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
              <p className='text-[#3E4154] md:pb-2'>Problem Primer</p>
            </div>
            <p className='leading-5 p-2 md:text-2xl'>
            Students appearing in MTRP 2024 will get the unique opportunity to purchase a limited edition MTRP Problem Primer (Divide & Conquer) published by Integration, Indian Statistical Institute. Handcrafted by a team of RMO and INMO awardees and several students at the Indian Statistical Institute, Kolkata and Bangalore centres, the atypical content of the book will help the talented students in learning mathematics through solving problems in an unorthodox fashion not covered at the high school level. While designed for students appearing for MTRP as a taste of what is in suit for them in the examination, it is also a great resource as a problem repository for several examinations like Olympiads. The book is made available at a relatively nominal price for the amount of content provided, as we strongly believe that learning should be accessible to everybody.
            </p>
            <p className='text-xl p-2 pb-6 font-light md:text-2xl'>A sneak peek from the topic Base Systems in Number Theory <a href="https://drive.google.com/file/d/1jsMz3Xw3u4SPMN8wMNdp0daf9HWa1XZ2/view" className='text-red-500'>here!</a></p>
          </div>        
          <div className='flex flex-row flex-wrap justify-center gap-4'>
            <div className='max-w-[90%] md:max-w-[45%] bg-[#0D1F35] rounded-[4rem]'>
              <div className=" whitespace-pre-line font-bold text-3xl md:text-4xl px-2 pt-4">
                <p className='text-[#F1AF57] md:pb-0 text-center'>Rules and regulations</p>
              </div>
              <p className='pt-2 pb-10 md:text-xl text-[#ffffff] leading-8 mx-[4%] md:mx-[10%] text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>        
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}
