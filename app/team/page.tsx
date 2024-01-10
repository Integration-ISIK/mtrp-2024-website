'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';
import { MouseEventHandler } from 'react';

const RegisterLinkEvent: MouseEventHandler<HTMLButtonElement> = (event) => {
    window.open('https://forms.gle/qYHpX4Aj9hPceqY17', '_blank');
};

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
        <div className='speaker flex md:h-auto'>
            <div className="h-auto  w-full flex flex-col bg-gradient-to-r from-[#f9deb57f] via-[#c68d38c2] to-[#f9deb5a2]">
                <p className='text-center text-2xl md:text-4xl p-2 md:p-4 text-[#0D1F35] font-bold '>Our Team</p>
                <div className='bg-gradient-to-b from-[#00000079] to-[#F9DEB5]'>
                    <div className="flex-grow flex flex-row flex-wrap justify-center font-bold">
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/saikat.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Saikat Sengupta</p>
                            <p className='text-center md:text-xl'>Head, Operations</p>
                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/archisman.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Archisman Mukherjee</p>
                            <p className='text-center md:text-xl'>Lead, MTRP Problem Primer</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/soupayan.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Soupayan Dasgupta</p>
                            <p className='text-center md:text-xl'>Lead, Localisation Team</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/drohan.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Drohan Chakraborty</p>
                            <p className='text-center md:text-xl'>Lead, Infrastructure Team</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/swapnaneel.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Swapnaneel Bhattacharya</p>
                            <p className='text-center md:text-xl'>Lead, MTRP Exam Team</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/aritra.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Aritra Ghosh</p>
                            <p className='text-center md:text-xl'>Lead, MTRP Evaluation Team</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/adityarup.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Adityarup Laha</p>
                            <p className='text-center md:text-xl'>Lead, Technical Team</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/himadri.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Himadri Mandal</p>
                            <p className='text-center md:text-xl'>Lead, MTRP Website</p>

                        </div>
                        <div className='flex flex-col items-center p-5 overflow-hidden justify-end'>
                            <img src="/teampics/srijan.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl text-lg'>Srijan Saha</p>
                            <p className='text-center md:text-xl'>Lead, Design Team</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </main>
        <Footer></Footer>
    </div>
  )
}
