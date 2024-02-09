'use client';
import Header from '../_components/header';
import Footer from '../_components/footer';
import { MouseEventHandler } from 'react';

export default function Program(): JSX.Element {
  return (
    <div className='flex flex-col w-full h-auto bg-[#EBEEF4]'>
      <Header />
      
      <main className='flex-grow pt-[4.5rem] md:pt-20'>
        <div className="relative bg-cover bg-left-top h-auto min-h-64 md:h-[24rem] w-full pt-4 md:pt-0" style={{ backgroundImage: "url('/img/cover.webp')" }}>
          <div className='float-right mr-[2%] md:mr-[28%] pt-[2rem]'>
            <img src="/img/mtrp_ico_white_withtext.webp" className="w-[13rem] md:w-[25rem]" alt="" />
          </div>
        </div>
        <div className="bg-[#15f7ff2d] bg-cover bg-left-top h-auto max-w-screen pt-4" >
          <div className="md:p-2">
            <div className=" whitespace-pre-line font-bold text-4xl md:text-6xl px-2">
              <p className='text-[#3E4154] md:pb-2 text-center'>Program</p>
            </div>
            <p className='text-xl pt-2 pb-10 md:text-2xl text-black leading-8 mx-[10%]'>
              The programme consists of a written examination and a camp. The competition will be held in two categories, one for students studying in or below X (Junior Category) standard and the other for classes XI and XII (Senior Category). Moreover, this time the examination is being held in both online and offline mode in order to extend the availability of this unique experience to the students for whom it will be difficult to report to the designated centres for an offline examination.
            </p>
            <p className='text-xl pt-2 pb-10 md:text-2xl text-black leading-8 mx-[4%] md:mx-[10%]'>
              Students from each category are selected for the math camp based on their performance in the written test. The camp consists of interactive sessions with mathematicians, ISI faculties and scholars from other universities, along with a few exercises. Based on the performance in the camp, the top few students from each category are rewarded.
            </p>
            <div className='flex flex-row flex-wrap justify-center gap-4'>
              <div className='max-w-[90%] md:max-w-[60%] bg-[#0D1F35] rounded-[4rem]'>
                <div className=" whitespace-pre-line font-bold text-3xl md:text-4xl px-2 pt-4">
                  <p className='text-[#F1AF57] md:pb-0 text-center'>Level 1</p>
                </div>
                <p className='pt-2 pb-10 md:text-xl text-[#ffffff] leading-8 mx-[4%] md:mx-[10%] text-center'>
                  A written examination is held in various cities in India, specifically, Kolkata, Durgapur, Siliguri separately for the two categories. The corresponding papers consist of two sections. Section I has objective problems (MCQ and/or integer-type) and Section II has subjective problems. The applicants are given two and half hours to solve the paper. Based on their composite scores in the objective and subjective sections, students securing marks above a certain cut-off qualify for the MTRP Camp. The cut-offs are not predetermined and are separate for the Junior and the Senior Category students as well as for the online and offline candidates. The list of selected candidates will be uploaded in the MTRP website and the candidates will also be individually informed.
                </p>
              </div>

            </div>
            <div className="bg-cover bg-left-top h-auto max-w-screen pt-4">
              <div className="md:p-2">
                <div className="whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                  <p className="text-[#3E4154] md:pb-2">Syllabus</p>
                </div>
                <p className='leading-5 p-2 md:text-2xl'>
                  The syllabi for Junior and Senior Categories can be downloaded from <a href="/resources" className='text-red-500'>Resources</a> section.
                </p>                
                <div className="flex flex-col text-xl pt-2 pb-10 md:text-2xl text-black">
                  <div className="flex flex-row justify-start">
                    <p className="px-2 md:pb-2">Junior Category</p>
                    <ul className="text-xl pt-2 pb-10 md:text-xl text-black leading-8 mx-[10%]">
                      <li><span className="font-bold">Number Theory:</span> Divisibility and Primes, GCD and Division Algorithm, Bezout&apos;s Theorem, Congruence, Base Systems, Fermat and Euler&apos;s theorem</li>
                      <li><span className="font-bold">Combinatorics:</span> Basic Counting Principles, Permutations and Combinations, Permutations with Repetitions and on Circle, Inclusion Exclusion Principle, Pigeonhole Principle</li>
                      <li><span className="font-bold">Geometry:</span> Congruence of Triangles, Ruler and Compass Constructions, Midpoint Theorem, Thales&apos; Theorem and Similarity, Area Ratios and Ceva Menelaus Theorems, Properties of Circles and Tangents, Basic Angle Chasing</li>
                      <li><span className="font-bold">Algebra and Miscellaneous:</span> Basic Set Theory and Set Operations, Principle of Mathematical Induction, Simultaneous Linear Equations, Word Problems and Puzzles, Basic Laws of Inequalities, AM-GM-HM inequality, Cauchy-Schwarz inequality, Basic Operations on Polynomials, Polynomial Division and GCD, Remainder and Factor Theorems, Fundamental Theorem of Algebra, Quadratic Polynomials and Equations, Vieta&apos;s Relations</li>
                    </ul>
                  </div>
                  <div className="flex flex-row justify-start">
                    <p className="px-2 md:pb-2">Senior Category</p>
                    <ul className="text-xl pt-2 pb-5 md:text-xl text-black leading-8 mx-[10%]">
                      <li><span className="font-bold">Number Theory:</span> Divisibility and Primes, GCD and Division Algorithm, Bezout&apos;s Theorem, Congruence and Inverses, Base Systems, Fermat and Euler&apos;s Theorems, Wilson and Chinese Remainder Theorems</li>
                      <li><span className="font-bold">Combinatorics:</span> Basic Counting Principles, Permutations and Combinations, Permutations with Repetitions and on Circle, Inclusion Exclusion Principle, Pigeonhole Principle, Recurrences, Invariance Monovariance and Extremal Principles</li>
                      <li><span className="font-bold">Geometry and Trigonometry:</span> Properties of triangles and properties of circles, properties of trigonometric functions</li>
                      <li><span className="font-bold">Algebra and Miscellaneous:</span> Basic Set Theory and Set Operations, Principle of Mathematical Induction,  Word Problems and Puzzles, Elementary Functional Equations, Basic Laws of Inequalities, AM-GM-HM inequality, Cauchy-Schwarz inequality, Rearrangement and Chebyshev Inequalities, Jensen Inequality, Basic Operations on Polynomials, Polynomial Division and GCD, Remainder and Factor Theorems, Fundamental Theorem of Algebra, Quadratic Polynomials and Equations, Complex Numbers, Vieta&apos;s Relations, Integer Polynomials</li>
                      <li><span className="font-bold">Calculus:</span> Rationals and Irrationals, Sequence and series, limit of a function, Continuity and Differentiability, Elementary Integration and Antiderivatives</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex flex-row flex-wrap justify-center gap-4'>
                <div className='max-w-[90%] md:max-w-[60%] bg-[#0D1F35] rounded-[4rem]'>
                  <div className=" whitespace-pre-line font-bold text-3xl md:text-4xl px-2 pt-4">
                    <p className='text-[#F1AF57] md:pb-0 text-center'>Level 2</p>
                  </div>
                  <p className='pt-2 pb-10 md:text-xl text-[#ffffff] leading-8 mx-[4%] md:mx-[10%] text-center'>
                    The selected candidates are required to attend a three day camp. This camp features lectures from mathematicians, ISI faculties, renowned scholars from other universities, and other experts from various fields of Mathematics and Statistics. These lectures are based on interesting topics related to mathematics, thereby providing enthusiasts with lots of food for thought. Throughout the camp, quizzes are held periodically to judge the skills and problem-solving potential of the students. Based on their performance in the camp, the top few students are rewarded (separate for online and offline candidates).
                  </p>
                </div>
              </div>
              <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                  <p className='text-[#3E4154] md:pb-2'>Eligibility</p>
                </div>
                <p className='leading-5 p-2 md:text-xl'>
                  For the <span className="font-bold">Junior Category</span>, applications are invited from students up to Class X (born after 15 March 2006).
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  For the <span className="font-bold">Senior Category</span>,  only students in Classes XI or XII (born after 15 March 2004) are eligible to apply.
                </p>
              </div>
              <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                  <p className='text-[#3E4154] md:pb-2'>Registration</p>
                </div>
                <p className='leading-5 p-2 md:text-xl'>
                  Registration is open through both online and offline modes. Online registration links are provided on the official website, while offline forms and entry fees can be collected from the head of the institution (principal/headmaster, etc.).
                </p>
                <p className='leading-5 p-2 md:text-xl font-bold'>
                  The registration fee for the Level I qualifying examination is &#8377;270/-, applicable to both categories. There is no additional charge for Level II quizzes for the selected candidates.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  For offline candidates, the counterfoil (to be retained by the candidate) serves as proof of payment. For online candidates, a receipt will be sent to the registered email ID shortly before the admit cards. It is imperative to carry a hard copy of the proof of payment to the examination venue. Evaluation of the answer script is subject to verification of the proof of payment.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  Admit cards will be dispatched to registered email IDs before the exam, and a copy must be produced during the exam. Online candidates will access a dedicated Google Classroom using their registered email IDs, with the exam conducted through Google Classroom (refer to Special Instructions below for more details).
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  The registration fee is non-negotiable. It is crucial to ensure accurate details during registration. In the event of incorrect registration, falsified information, or faults during registration, the registration fees shall not be refunded unless accompanied by sufficient proof. In the event of discrepancies between payment and confirmation, please notify us with appropriate evidence for resolution.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  <span className="font-bold">No cancellation of registration is allowed under any circumstances once the fees for MTRP 2024 are paid</span>. In case of deduction from your account without confirmation, wait for 2 – 3 working days before attempting re-registration. Avoid multiple payments, even if they exceed the registration deadline. In the case of multiple registrations and payments, you will be held responsible, and refunds will not be issued under normal circumstances. Extraordinary situations may be addressed with sufficient proof and at the discretion of the MTRP Team.
                </p>
              </div>
              <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                  <p className='text-[#3E4154] md:pb-2'>Examination</p>
                </div>
                <p className='leading-5 p-2 md:text-xl'>
                  Applicants are allocated <span className="font-bold">2.5 hours</span> to complete the entire paper.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  <span className="font-bold">The exam is closed-book, with no calculators or electronic devices allowed</span>. Violation of rules or use of unfair means will result in the immediate disqualification of the candidate.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  Candidates must present the following documents during the examination:
                </p>
                <ul className="text-xl pt-2 pb-4 md:text-xl text-black leading-3 mx-[10%]">
                  <li>Copy of their <span className="font-bold">Admit Card</span></li>
                  <li>Copy of a <span className="font-bold">valid Identification Proof (e.g., Aadhaar Card) containing their Date of Birth</span></li>
                  <li>Copy of <span className="font-bold">Proof of Payment</span></li>
                </ul>
                <p className='leading-5 p-2 md:text-2xl font-bold'>
                  Instructions specific to Offline Examinees
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  The offline examination will be held in various centers in West Bengal, namely:
                </p>
                <ul className="text-xl pt-2 pb-4 md:text-xl text-black leading-3 mx-[10%]">
                  <li>-North Kolkata</li>
                  <li>-South Kolkata</li>
                  <li>-Durgapur</li>
                </ul>
                <p className='leading-8 p-2 md:text-xl'>
                  Arrive at the examination center one hour before the scheduled start. Entry to the examination halls will be permitted up to 15 minutes after the test commencement.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  Stationery items may be carried in a transparent pouch.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  No student will be allowed to leave the exam room within one and a half hours of the exam’s commencement, except during an emergency situation, to be decided at the discretion of the invigilators.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  Selected students for the camp have the privilege of attending in person, with the option to attend in online mode.
                </p>
                <p className='leading-5 p-2 md:text-2xl font-bold'>
                  Instructions specific to Online Examinees
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  Candidates attempting the written examination online would be added to a Google Classroom for the purpose of submitting the answers. On the examination day candidates would be required to join a Google Meet whose joining link would be provided in the Google Classroom.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  The examination will be posted as a timed assignment on Google Classroom. An additional 5 minutes will be provided at the end of the exam to scan and submit solutions for the Subjective Section (Section B). During this time, students may use their mobile devices. However, if the paper is submitted after x minutes from the scheduled time, a penalty of 2x marks will be applied. No submission will be entertained after 10 minutes beyond the scheduled time. Answers are to be submitted in Google Classroom using the “Turn in” button.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  Online mode is available only for those with a working desktop or laptop equipped with a functioning webcam and stable internet. The webcam must be active throughout the exam. Mobile devices are not permitted for the exam.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  Proctoring will be done by an invigilator who will be present throughout the meeting. Every candidate must keep their video (and microphone, at the invigilators’ discretion) on at all times; a 2-minute absence within the video’s focus will result in automatic disqualification unless a valid reason is communicated to the invigilator. A similar penalty will apply if the invigilator detects tab-switching.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  No student will be allowed to leave the meeting within one and a half hours of the exam’s commencement, except during an emergency situation, to be decided at the discretion of the invigilators. In the event of network instabilities, a student may re-enter the meeting once, provided they rejoin within 2 minutes of disconnection.
                </p>
                <p className='leading-8 p-2 md:text-xl'>
                  <span className="font-bold">Students selected through the online mode will attend the camp exclusively online</span>, via a designated video conferencing platform (e.g., Zoom). Lectures in the offline camp will be live-streamed to ensure equal access for online attendees.
                </p>
              </div>
              <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                  <p className='text-[#3E4154] md:pb-2'>Evaluation</p>
                </div>
                <p className='leading-5 p-2 md:text-xl'>
                  <span className="font-bold">The examination of online and offline candidates will be evaluated separately, each with its own cut-offs. This applies to both Junior and Senior categories.</span>
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  Subjective problem answers will be evaluated only if the candidate clears a certain cut-off in the Objective section.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  Based on composite scores in the Subjective and Objective sections (subject to clearing the Objective cut-off), students achieving a certain cut-off score will receive invitations to attend a camp scheduled for 29 – 31 March 2024.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  Final winners will be selected based on their performance in the quizzes conducted during the camp.
                </p>
              </div>
              <div className="md:p-2">
                <div className=" whitespace-pre-line font-bold text-2xl md:text-3xl px-2">
                  <p className='text-[#3E4154] md:pb-2'>Camp and Awards</p>
                </div>
                <p className='leading-5 p-2 md:text-xl'>
                  The MTRP 2024 Camp, led by a team comprising past INMO awardees, features lectures from mathematicians, ISI faculties, renowned scholars from other universities, and other experts in various fields of Mathematics and Statistics. Periodic quizzes will be held to assess the skills and problem-solving potential of the students.
                </p>
                <p className='leading-5 p-2 md:text-xl'>
                  <span className="font-bold">Top-performing students in each category will be rewarded with prizes worth &#8377;60,000, including medals, books, and merch, among others. Cash prizes are also available. Every student selected for the camp will receive certificates and other prizes.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

