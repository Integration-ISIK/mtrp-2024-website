'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';


export default function AboutUs() {
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
                The students and research scholars of the <div className="pt-6 pb-6">
                    <img src="/img/isi.jpeg" className="mx-auto w-full max-w-[30rem] md:max-w-[40rem] pb-4" alt="" />
                    <a href="https://www.isical.ac.in" className='text-[#43ffaa] font-medium underline underline-offset-[4px] hover:no-underline'>Indian Statistical Institute, Kolkata,</a>
                </div> organize the <span className='text-black font-bold'>
                    Mathematics Talent Reward Programme (MTRP)
                </span> every year as part of its annual fest, Integration. 
                The <span className="text-[#e0ff43] font-bold decoration-[#fd6114]">vision</span> behind this initiative is 
                to <span className="text-[#ffd037] font-bold decoration-[#fd6114]">increase interest and create awareness</span> about <span  className="text-[#32e4ff] font-bold decoration-[#fd6114]">math</span> among school students. One of the major aims of this programme is 
                to <span className="text-[#e0ff43] font-bold decoration-[#fd6114]">identify and reward talent</span> at
                a young age. Additionally, it provides students with an opportunity to assess themselves in 
                comparison to their peers nationwide and offers a chance to <span className="text-[#32e4ff] decoration-[#fd6114] font-bold">interact with celebrated mathematicians</span> and scientists.</p>
                <div className="pt-2 mx-[10%]"><img src="/img/dinosaur.jpeg" className="mx-auto w-full max-w-[30rem] md:max-w-[40rem] pb-4" alt="" /></div>
                <p className='text-xl p-2 md:text-2xl text-white text-center leading-8 mx-[10%]'><a href="https://en.wikipedia.org/wiki/Indian_Statistical_Institute" className='text-black font-bold'>Indian Statistical Institute (ISI) </a>is an<span className="text-[#e0ff43] font-bold decoration-[#fd6114]"> Institute of National Importance</span> recognized by an Act of of Parliament of India. ISI is a center for excellence in <span className="text-[#32e4ff] font-bold decoration-[#fd6114]">Statistics, Mathematics and Computer Science</span> that is renowned worldwide and has <span className="text-[#ffd037] font-bold decoration-[#fd6114]">illustrious alumni</span> scattered all around the world in the best places of both academia and industry. At Kolkata headquarters, the students, organize our annual techno-cultural-sports festival <span className="text-[#e0ff43] font-bold decoration-[#fd6114]">Integration</span> every year.
                </p>
            </div>
        </div>
        </main>
        <Footer></Footer>
        
    </div>
  )
}
