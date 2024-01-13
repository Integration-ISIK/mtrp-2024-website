'use client';
import Header from './_components/header';
import Footer from './_components/footer';
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
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                    <p className='text-[#3E4154] md:pb-2'>Passionate about Maths?</p>
                    <p className='text-[#545973] md:pb-2'>Showcase your talent with MTRP</p>
                </div>
                <p className='leading-5 md:text-2xl p-2'>
                    MTRP is the perfect platform for all students who are passionate for Mathematics.
                    The purpose of this programme is to take mathematics beyond standard textbooks by inspiring innovative and non-routine critical thinking among students.
                    Know more <a href="" className='underline text-blue-500'>here</a>.
        
                </p>
                <button type="button" onClick={RegisterLinkEvent}
                className="mx-4 my-4 text-white shadow-lg bg-gradient-to-br from-[#073b59] to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                    Register Now
                </button>
            </div>
        </div>
        <div className="bg-[#7F8193] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl  px-2">
                    <p className='text-[#F9DEB5] md:pb-2'>Eligibility</p>
                </div>
                <div className="flex flex-col text-xl pt-2 pb-10 md:text-2xl text-white">
                    <div className="flex flex-row justify-start">
                        <p className='px-2 md:pb-2'>Junior Category: </p>
                        <p className='px-2 md:pb-2'>Classes VII-X</p>
                    </div>
                    <div className="flex flex-row justify-start">
                        <p className='px-2 md:pb-2'>Senior Category: </p>
                        <p className='px-2 md:pb-2'>Classes XI and XII </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                    <p className='text-[#3E4154] md:pb-2'>Problem Primer</p>
                </div>
                <p className='leading-5 p-2 md:text-2xl'>
                Students appearing in MTRP 2024 will get the unique opportunity to purchase a limited edition MTRP Problem Primer <span className="font-bold">(Divide & Conquer)</span> published by Integration, Indian Statistical Institute. Handcrafted by a team of RMO and INMO awardees and several students at the Indian Statistical Institute, Kolkata and Bangalore centres, the atypical content of the book will help the talented students in learning mathematics through solving problems in an unorthodox fashion not covered at the high school level.
                While designed for students appearing for MTRP as a taste of what is in suit for them in the examination, it is also a great resource as a problem repository for several examinations like Olympiads.
                The book is made available at a relatively nominal price for the amount of content provided, as we strongly believe that learning should be accessible to everybody.
                </p>
                <p className='text-xl p-2 pb-6 font-light md:text-2xl'>A sneak peek from the topic Base Systems in Number Theory <a href="https://drive.google.com/file/d/1jsMz3Xw3u4SPMN8wMNdp0daf9HWa1XZ2/view" className='text-red-500'>here!</a></p>
            </div>
        </div>
        <div className="relative bg-[#7F8193] bg-cover bg-left-top h-auto md:h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                    <p className='text-[#F9DEB5]'>Key Dates</p>
                </div>
                <p className='leading-5 p-6 text-white'>
                    <div className="flex flex-col md:text-2xl">
                        <div className="flex flex-row justify-start">
                            <p className='px-2 pb-1 md:pb-2'>Registration Starts: </p>
                            <p className='px-2 pb-1 md:pb-2 text-[#4aff5f]'>9th January, 2024 </p>
        
                        </div>
                        <div className="flex flex-row justify-start">
                            <p className='px-2 pb-1 md:pb-2'>Registration Ends: </p>
                            <p className='px-2 pb-1 md:pb-2 text-[#4aff5f]'>9th March, 2024 </p>
                        </div>
                        <div className="flex flex-row justify-start">
                            <p className='px-2 pb-1 md:pb-2'>Release of Admit Cards: </p>
                            <p className='px-2 pb-1 md:pb-2 text-[#4aff5f]'>12th March, 2024 </p>
                        </div>
                        <div className="flex flex-row justify-start">
                            <p className='px-2 pb-1 md:pb-2'>Exam Date: </p>
                            <p className='px-2 pb-1 md:pb-2 text-[#4aff5f]'>16th March, 2024<span className="text-[#ffed4a]">*</span> </p>
                        </div>
                        <div className="flex flex-row justify-start">
                            <p className='px-2 pb-1 md:pb-2'>Announcement of Results: </p>
                            <p className='px-2 pb-1 md:pb-2 text-[#4aff5f]'>26th March, 2024 </p>
                        </div>
                        <div className="flex flex-row justify-start">
                            <p className='px-2 pb-1 md:pb-2'>Camp Dates: </p>
                            <p className='px-2 pb-1 md:pb-2 text-[#4aff5f]'>29th-31st March, 2024 </p>
                        </div>
                        <div className="flex flex-row justify-start">
                        </div>
                        <p className='text-start text-xs md:text-[1.2rem] text-[#4aff5f] pt-2 md:pt-4'>
                        <span className="text-[#ffed4a] leading-4 md:leading-8">*</span>Kindly reach out to us if March 16, 2024, is highly inconvenient for you. The only alternative dates we have available are March 23rd or 24th, 2024.
                        </p>
                    </div>
                </p>
            </div>
        </div>
        {/* <div className='speaker flex md:h-auto'>
            <div className="h-auto  w-full flex flex-col bg-gradient-to-r from-[#f9deb57f] via-[#c68d38c2] to-[#f9deb5a2]">
                <p className='text-center text-2xl md:text-4xl p-2 md:p-4 text-[#0D1F35] font-bold '>Speakers for the Spring Camp</p>
                <div className='bg-gradient-to-b from-[#00000079] to-[#F9DEB5]'>
                    <div className="flex-grow flex flex-row flex-wrap justify-center font-bold">
                        <div className='flex flex-col p-5'>
                            <img src="/img/speakers/gilbert_strang.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl'>Gilbert Strang</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <img src="/img/speakers/michael_penn.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl'>Michael Penn</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <img src="/img/speakers/malabika_pramanik.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl'>Malabika Pramanik</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <img src="/img/speakers/meg_crofroot.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl'>Meg Crofroot</p>
                        </div>
                        <div className='flex flex-col p-5'>
                            <img src="/img/speakers/srinivas_bhogle.png" className="w-[8rem] md:w-[14rem] md:p-4" alt="" />
                            <p className='text-center md:text-2xl'>Srinivas Bhogle</p>
                        </div> 
                    </div>
                    <p className='text-end text-sm md:text-[1rem] text-red-500 p-2 md:p-4'>*Speakers are subject to availability.</p>
                </div>
            </div>
        </div>*/}
        <div className='speaker flex'>
            <div className="w-full flex flex-col bg-gradient-to-r from-[#f9deb57f] via-[#c68d38c2] to-[#f9deb5a2]">
                <p className='text-center text-2xl md:text-4xl p-2 md:p-4 text-[#0D1F35] font-bold '>Past Speakers</p>
                <p className='text-center text-2xl md:text-3xl p-2 md:p-4 text-[#0D1F35] font-bold '>Professors</p>
                <div className="bg-gradient-to-b from-[#00000079] to-[#F9DEB5] flex-grow flex text-[#000000] flex-row flex-wrap md:h-auto justify-center font-bold">
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/Prof_Saurabh_Ghosh.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Saurabh Ghosh</p>
                        <p>Former Dean, ISI</p>
                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/Prof_Bimal_Roy.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Bimal Kumar Roy</p>
                        <p>Former Director, ISI</p>
                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/Prof_Gopal_Basak.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Gopal K. Basak</p>
                        <p>Dean, ISI</p>
                    </div>
                    <div className='flex flex-col items-center content-center m-4'>
                        <img src="/img/past_speakers/Prof_Pradipta_Bandopadhyay.png" className=" h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Pradipta Bandyopadhyay</p>
                        <p>Former Dean, ISI</p>
                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/Prof_Sumitra_Purkayastha.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Sumitra Purkayastha</p>
                        <p>Associate Dean, ISI</p>
                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/Prof_Alok_Goswami.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Alok Goswami</p>
                        <p>ISI</p>
                    </div>
                {/* </div>
                <div className="bg-gradient-to-b from-[#00000079] to-[#F9DEB5] flex-grow flex text-[#000000] flex-row flex-wrap md:h-auto justify-center"> */}
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/Prof_arnab_chakraborty.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Arnab Chakraborty</p>
                        <p>ISI</p>
                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/prof_ritabrata_munshi.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Ritabrata Munshi</p>
                        <p>TIFR</p>
                    </div>
                    <div className='flex flex-col items-center m-4'>
                        <img src="/img/past_speakers/prof_soumendu_sundar_mukherjee.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Soumendu Mukherjee</p>
                        <p>ISI</p>
                    </div>
                </div>
                <p className='bg-gradient-to-r from-[#f9deb57f] via-[#c68d38c2] to-[#f9deb5a2] text-center text-2xl md:text-3xl p-2 md:p-4 text-[#0D1F35] font-bold '>Alumni</p>
                <div className="bg-gradient-to-b from-[#00000079] to-[#F9DEB5] flex-grow flex text-[#000000] flex-row flex-wrap md:h-[22rem] justify-center font-bold">
                    <div className='flex flex-col m-4'>
                        <img src="/img/past_speakers/Arpan_Sadhukhan.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Arpan Sadhukhan</p>
                        <p>Ph.D Student</p>
                        <p>Eindhoven University of Technology</p>
                    </div>
                    <div className='flex flex-col m-4'>
                        <img src="/img/past_speakers/Supravat_Sarkar.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Supravat Sarkar</p>
                        <p>Ph.D Student</p>
                        <p>Princeton University<</p>
                    </div>
                    <div className='flex flex-col m-4'>
                        <img src="/img/past_speakers/aditya_ghosh.png" className="h-[10rem] md:h-[14rem] md:p-4" alt="" />
                        <p className='text-center md:text-2xl'>Aditya Ghosh</p>
                        <p>Ph.D Student</p>
                        <p>Stanford University<</p>
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
