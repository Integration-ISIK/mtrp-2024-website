'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';
import { MouseEventHandler } from 'react';


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
        <div className="flex-grow w-full bg-[#7F8193] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-4xl md:text-6xl  px-2">
                    <p className='text-[#F9DEB5] text-center'>About Us</p>
                </div>
                <p className="text-xl pt-2 pb-10 md:text-2xl text-white text-center leading-8 mx-[10%]">
                The students and research scholars of the <div className="pt-2">
                    <img src="/img/isi.jpeg" className="mx-auto w-full max-w-[30rem] md:max-w-[40rem] pb-4" alt="" />
                    <a href="https://www.isical.ac.in" className='text-[#43ffaa] font-medium underline underline-offset-[0.4rem] hover:no-underline'>Indian Statistical Institute, Kolkata,</a>
                </div> organize the <span className='font-bold text-black'>
                    Mathematics Talent Reward Programme (MTRP)
                </span> every year as part of its annual fest, Integration. 
                The <span className="text-[#acff30] underline underline-offset-[0.4rem] font-bold decoration-wavy decoration-[#bdff09]">vision</span> behind this initiative is 
                to <span className="text-[#ffd037] underline underline-offset-[0.4rem] font-bold decoration-wavy decoration-[#b54230]">increase interest and create awareness</span> about <span  className="text-[#8239ff] underline underline-offset-[0.4rem] font-bold decoration-wavy decoration-[#b54230]">math</span> among school students. One of the major aims of this programme is 
                to <span className="text-[#e0ff43] underline underline-offset-[0.4rem] font-bold decoration-wavy decoration-[#1bbeff]">identify and reward talent</span> at
                a young age. Additionally, it provides students with an opportunity to assess themselves in 
                comparison to their peers nationwide and offers a chance to <span className="text-[#32e4ff] underline underline-offset-[0.4rem] decoration-wavy decoration-[#fd6114] font-bold">interact with celebrated mathematicians</span> and scientists.
                </p>
            </div>
        </div>
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-4xl md:text-6xl px-2">
                    <p className='text-[#3E4154] md:pb-2 text-center'>Contact Us</p>
                </div>
                {/* <p className='leading-5 p-2 md:text-2xl'>
                Students appearing in MTRP 2024 will get the unique opportunity to purchase a limited edition MTRP Problem Primer <span className="font-bold">(Divide & Conquer)</span> published by Integration, Indian Statistical Institute. Handcrafted by a team of RMO and INMO awardees and several students at the Indian Statistical Institute, Kolkata and Bangalore centres, the atypical content of the book will help the talented students in learning mathematics through solving problems in an unorthodox fashion not covered at the high school level.
                While designed for students appearing for MTRP as a taste of what is in suit for them in the examination, it is also a great resource as a problem repository for several examinations like Olympiads.
                The book is made available at a relatively nominal price for the amount of content provided, as we strongly believe that learning should be accessible to everybody.
                </p> */}
                <p className='text-xl p-2 pb-6 font-light md:text-2xl'>
                    {/* A sneak peek from the topic Base Systems in Number Theory <a href="https://drive.google.com/file/d/1jsMz3Xw3u4SPMN8wMNdp0daf9HWa1XZ2/view" className='text-red-500'>here!</a> */}
                    <p className='text-4xl text-center pb-2'>Mail Us Here!</p>
                    <p className="text-[#4e9aff] flex flex-col gap-1 text-center">
                        <a href="mailto:mtrp@integrationfest.in" className='font-medium underline underline-offset-[0.4rem] hover:no-underline'>mtrp@integrationfest.in</a>
                        <a href="mailto:contact@mtrp.integrationfest.in" className='font-medium underline underline-offset-[0.4rem] hover:no-underline'>contact@mtrp.integrationfest.in</a>
                    </p>
                </p>
            </div>
        </div>
        </main>
        <Footer></Footer>
        
    </div>
  )
}
