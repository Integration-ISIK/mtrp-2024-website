'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';
import { MouseEventHandler } from 'react';


export default function Contact() {
  return (
    <div className='flex flex-col w-full h-auto bg-[#EBEEF4]'>
        <Header></Header>
        
        <main className='flex-grow pt-[4.5rem] md:pt-20'>
        <div className="relative bg-cover bg-left-top h-auto min-h-64 md:h-[24rem] w-full pt-4 md:pt-0" style={{ backgroundImage: "url('/img/cover.webp')" }}>
            <div className='float-right mr-[2%] md:mr-[28%] pt-[2rem]'>
                <img src="/img/mtrp_ico_white_withtext.webp" className="w-[13rem] md:w-[25rem]" alt="" />
            </div>
        </div>
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-4xl md:text-6xl px-2">
                    <p className='text-[#3E4154] md:pb-2 text-center'>Contact Us</p>
                </div>
                <p className='text-xl p-2 pb-6 font-light md:text-2xl'>
                    <p className='text-4xl text-center pb-2'>Mail Us Here!</p>
                    <p className="text-[#4e9aff] flex flex-col gap-1 text-center">
                        <a href="mailto:mtrp@integrationfest.in" className='font-medium hover:no-underline'>mtrp@integrationfest.in</a>
                        <a href="mailto:contact@mtrp.integrationfest.in" className='font-medium hover:no-underline'>contact@mtrp.integrationfest.in</a>
                    </p>
                </p>
                <p className='text-xl p-2 pb-6 font-light md:text-2xl overflow-hidden'>
                    <p className='text-4xl text-center pb-2'>Talk To Us <span className="italic">directly</span>!</p>
                    <p className="text-[#4e9aff] flex flex-col gap-1 text-center pb-8">
                        <p className='text-black font-bold text-2xl text-center pb-2'>Soupayan Dasgupta</p>
                        <a href="tel:+918617782484" className='font-medium hover:no-underline'>+918617782484</a>
                        <a href="mailto:soupayan.das.gupta@people.integrationfest.in" className='md:font-medium text-lg md:text-2xl max-w-full text-wrap hover:no-underline'>soupayan.das.gupta@people.integrationfest.in</a>
                    </p>
                    <p className="text-[#4e9aff] flex flex-col gap-1 text-center pb-8">
                        <p className='text-black font-bold text-2xl text-center pb-2'>Drohan Chakraborty</p>
                        <a href="tel:+916291939639" className='font-medium hover:no-underline'>+916291939639</a>
                        <a href="mailto:drohan.chakraborty@people.integrationfest.in" className='md:font-medium text-lg md:text-2xl max-w-full hover:no-underline'>drohan.chakraborty@people.integrationfest.in</a>
                    </p>
                    <p className="text-[#4e9aff] flex flex-col gap-1 text-center">
                        <p className='text-black font-bold text-2xl text-center pb-2'>Saikat Sengupta</p>
                        <a href="mailto:saikat.sengupta@people.integrationfest.in" className='md:font-medium text-lg md:text-2xl max-w-full text-wrap hover:no-underline'>saikat.sengupta@people.integrationfest.in</a>
                    </p>
                </p>
            </div>
            
        </div>
        </main>
        <Footer></Footer>
        
    </div>
  )
}
