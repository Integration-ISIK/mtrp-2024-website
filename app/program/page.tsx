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
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4" >
            <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-4xl md:text-6xl px-2">
                    <p className='text-[#3E4154] md:pb-2 text-center'>Program</p>
                </div>
                <p className='text-xl pt-2 pb-10 md:text-2xl text-black leading-8 mx-[10%] text-center'>
                The programme consists of a written examination and a camp. The competition will be held in two categories, one for students studying in or below X (Junior Category) standard and the other for classes XI and XII (Senior Category). Moreover, this time the examination is being held in both online and offline mode in order to extend the availability of this unique experience to the students for whom it will be difficult to report to the designated centres for an offline examination.
                </p>
                <p className='text-xl pt-2 pb-10 md:text-2xl text-black text-center leading-8 mx-[10%]'>
                Students from each category are selected for the math camp based on their performance in the written test. The camp consists of interactive sessions with mathematicians, ISI faculties and scholars from other universities, along with a few exercises. Based on the performance in the camp, the top few students from each category are rewarded.
                </p>
                <div className='flex flex-row flex-wrap justify-center gap-4'>
                    <div className='max-w-[90%] md:max-w-[45%] bg-[#37deff] rounded-[4rem]'>
                        <div className=" whitespace-pre-line font-bold text-3xl md:text-4xl px-2 pt-2">
                            <p className='text-[#e6ff42] md:pb-2 text-center'>Level 1</p>
                        </div>
                        <p className='text-xl pt-2 pb-10 md:text-xl text-[#ff3535] leading-8 mx-[10%] text-center'>
                        A written examination is held in various cities in India, specifically, Kolkata, Durgapur, Siliguri separately for the two categories. The corresponding papers consist of two sections. Section I has objective problems (MCQ and/or integer-type) and Section II has subjective problems. The applicants are given two and half hours to solve the paper. Based on their composite scores in the objective and subjective sections, students securing marks above a certain cut-off qualify for the MTRP Camp. The cut-offs are not predetermined and are separate for the Junior and the Senior Category students as well as for the online and offline candidates. The list of selected candidates will be uploaded in the MTRP website and the candidates will also be individually informed.
                        </p>
                    </div>
                    <div className='max-w-[90%] md:max-w-[45%] bg-[#37deff] rounded-[4rem]'>
                        <div className=" whitespace-pre-line font-bold text-3xl md:text-4xl px-2 pt-2">
                            <p className='text-[#e6ff42] md:pb-2 text-center'>Level 2</p>
                        </div>
                        <p className='text-xl pt-2 pb-10 md:text-xl text-[#ff3535] leading-8 mx-[10%] text-center'>
                        The selected candidates are required to attend a three day camp. This camp features lectures from mathematicians, ISI faculties, renowned scholars from other universities, and other experts from various fields of Mathematics and Statistics. These lectures are based on interesting topics related to mathematics, thereby providing enthusiasts with lots of food for thought. Throughout the camp, quizzes are held periodically to judge the skills and problem-solving potential of the students. Based on their performance in the camp, the top few students are rewarded (separate for online and offline candidates).
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </main>
        <Footer></Footer>
        
    </div>
  )
}
