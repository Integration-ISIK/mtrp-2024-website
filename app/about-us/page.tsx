'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';
import lotus from './../../public/img/isi.webp';


export default function AboutUs() {
  return (
    <div className='flex flex-col w-full h-auto bg-[#EBEEF4]'>
        <Header></Header>
        
        <main className='flex-grow pt-[4.5rem] md:pt-20'>
        <div className="relative bg-cover bg-left-top h-auto min-h-64 md:h-[24rem] w-full pt-4 md:pt-0" style={{ backgroundImage: "url('/img/cover.webp')" }}>
            <div className='float-right mr-[2%] md:mr-[28%] pt-[2rem]'>
                <img src="/img/mtrp_ico_white_withtext.png" className="w-[13rem] md:w-[25rem]" alt="" />
            </div>
        </div>
        
        <div className='flex flex-col xl:flex-row'>
            <div className='basis-1/4 flex bg-[#397ADB] text-white'>
                <p className='text-4xl mx-20 my-10 md:text-6xl md:mx-16 md:my-20 xl:my-40'>About Us</p>
            </div>
            <div className='basis-3/4 bg-[#C6F0F6] flex justify-center items-center p-10 md:p-20'>
                <p className='text-2xl md:text-3xl'>The students and research scholars of the <span style={{color:'#397ADB'}}><b>Indian Statistical Institute, Kolkata</b></span>,  organize the <span style={{color:'#EE0000'}}><b>Mathematics Talent Reward Programme</b></span> (MTRP) every year as part of its annual fest, <span style={{color: '#397ADB'}}><i><b>Integration</b></i></span>. The vision behind this initiative is to take mathematics beyond standard textbooks by inspiring innovative and non-routine critical thinking among students.</p>
            </div>
        </div>

        <div className='flex flex-col-reverse xl:flex-row'>
            <div className='basis-1/2 bg-[#F1AF57] text-black flex justify-center items-center p-10 md:p-20'>
                <p className='text-2xl md:text-3xl'>One of the major aims of this programme is to identify and <span style={{color:'#EE0000'}}><b>reward</b></span> talent at a young age. Additionally, it provides students with an opportunity to assess themselves in comparison to their peers nationwide and offers a chance to interact with celebrated <span style={{color:'#397ADB'}}> <b>mathematicians and scientists</b> </span>.</p>
            </div>
            <div className='basis-1/2'>
                <img src="img/isi.webp" alt="On Independence Day" />
            </div>
        </div>

        <div className='bg-[#C6F0F6] flex justify-center items-center px-16 py-14 text-2xl md:px-32 md:py-28 md:text-3xl'>
            <p>Indian Statistical Institute (ISI) established in 1931 is recognized as an Institute of National Importance by the 1959 act of the Indian parliament. It grew out of the Statistical Laboratory set up by Shri Prasanta Chandra Mahalanobis.</p>
        </div>

        <div className='flex flex-col xl:flex-row'>
        <div className='basis-1/2'>
                <img src="img/dinosaur.webp" alt="Geology Unit" />
            </div>
            <div className='basis-1/2 bg-[#7F8193] text-black flex justify-center items-center p-10 md:p-20'>
                <p className='text-white text-2xl md:text-3xl'>ISI is a center for excellence in <span style={{ color: '#C6F0F6'}}> <b>Statistics, Mathematics , Computer Science and Economics</b></span>  that is renowned worldwide and has <span style={{color: '#E69926'}}> <b>illustrious alumni</b> </span>scattered all around the world in the best places of both academia and industry. At Kolkata headquarters, the students, organize our annual techno-cultural-sports festival Integration every year.</p>
            </div>
        </div>

        </main>
        <Footer></Footer>
        
    </div>
  )
}
