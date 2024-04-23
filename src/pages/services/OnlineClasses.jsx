import React from 'react'
import Faq from '../home/Faq';
import Process from '../home/Process';
import LogoGrid from '../home/LogoGrid'
import Button from '../../components/Button';
import Testimonial from '../home/Testimonial';
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Subject from '../../components/Subject';
import WhyChooseUs from '../../components/WhyChooseUs';
import Proofs from '../../components/Proofs';
import CtaOne from "../home/CtaOne";
import CtaTwo from "../home/CtaTwo";
import TrustSec from '../../components/TrustSec';
import '../home/Home.css'

const OnlineClasses = () => {
    return (
        <>
            {/* --------------- HERO SECTION ---------------  */}
            <section className="text-white banner_backgroundImage mb-0 lg:mb-0 min-h-[70vh]">
                <div className="max-w-7xl mx-auto flex px-4 sm:px-5 md:px-10 py-7 md:flex-row flex-col items-center">

                    {/* CONTENT */}
                    <div className="lg:flex-grow md:w-1/2 xl:pr-20 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left items-start">
                        <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold tracking-wide w-full lg:max-w-sm md:text-4xl">Pay Someone To Do My Class to Boost my Grades</h2>
                        <p className="mb-3 sm:mb-4 text-md sm:text-md w-full sm:max-w-lg  font-normal">
                            Struggling to keep up with your online classes? Don't worry, StudyStello is here to help! Our experienced tutors and academic experts can provide you with the support you need to succeed in your coursework.
                        </p>

                        <div className="button mt-4">
                            <button onClick={() => { Tawk_API.toggle(); }} className='bg-white text-[#1A73E8] font-medium rounded-3xl px-5 py-2.5 flex items-center gap-2'>
                                <LuMessagesSquare /> Lets Chats <FaArrowRightLong size={14} />
                            </button>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
                        <img className="object-cover object-center rounded px-3 md:px-10" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72172.png?v=1712918821" />
                    </div>
                </div>
            </section>

            {/* --------------- TRUST SECTION ---------------  */}
            <TrustSec />

            {/* --------------- LOGO GRID ---------------  */}
            <LogoGrid />

            {/* ----------- IMAGE & TEXT SECTION -----------  */}
            <section className="body-font">
                <div className="max-w-6xl mx-auto flex px-1 py-20 md:flex-row flex-col items-center">

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72173.png?v=1712918878" />
                    </div>


                    <div className="lg:flex-grow px-5 sm:px-0 md:w-1/2 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
                        <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">50+ Top-Rated And Degreed Writers</h1>
                        <p className="mb-6 leading-relaxed">When it comes to your online classes, don't settle for anything less than the best. Our academic writing assistance is the most trustworthy choice, offering you unparalleled support from a pool of 50+ highly rated and qualified writers. We are committed to delivering high-quality, plagiarism-free content that meets the highest academic standards. Our writers conduct thorough research and ensure that all information is accurate and up-to-date.</p>
                        <div className="flex justify-start">
                            <Button />
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------- WHY CHOOSE US ---------------  */}
            <WhyChooseUs />

            {/* --------------- CTA SECTION ---------------  */}
            <CtaOne text="Take my class" />

            {/* --------------- PROOF ---------------  */}
            <Proofs />

            {/* --------------- WHAT MAKE YOU HIRE US ---------------  */}
            {/* <section className='bg-white'>
                <div className="max-w-7xl mx-auto py-16">
                    <h2 className="px-8 mb-3 font-bold text-3xl md:text-4xl text-[#272727] text-start">What Make You Hire Us</h2>

                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-5 sm:px-8 px-4">

                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://s3-alpha-sig.figma.com/img/941e/05eb/f01f45c66ae0919e56326f840cf373e5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JfrcTkL0Mfy7NLXjLQIM3-nWSrcF18RKY7wWuIp6A6iVHS2Q4ZpuhGCqVZ6wgfGxoIfp-rKFcWJ7MR-QoLefMBTthmTiIA~cUh8KXgNrFUMhKNhEmSuqnslT1GNhZZdtECoV1JiwgnjTLVF3Zqa22paBMpyEmzDMoiyaGJ1rL0auUhvNHCqQnTB2TY4BIZjxwVTKxfa8zj9qeOWKD-QNwjuF5MKZMUfTI1CZuj~NcC1yU8y9U91vVDCzmMtX947i-dMJXtAXMHp9hw05qz4auFqmPzt4ZJp464VEFvYv0ZtU-lAE-w09Llft4RVeQZXDdJX8PzOId9kfGO4cNkw6Jw__" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">24/7 Live Chat</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">You can get our services anytime, any day. Our 24/7 available services allow you to contact our customer care center at any time. Our representatives are more than happy to serve</p>
                        </div>

                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://s3-alpha-sig.figma.com/img/0fbb/3262/e5cd898a822073e160ccf4ea60717909?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWV9kKGTUsIFvYVLYY0JlqIc1DorFsiLGl~rm2v2bzWuiSn7gJTXOYS-VgvWdNys-rkNCZzu4XEJ-EmggEF8gUfsBLUgXrNZu~pT~Nhh7J-M8QrRuJHFZz5p9DbjT~oW5dTiZgDYiNVtYh4C-bo6M-f9ZXGfoLWcAEav9m0zFdWecRxhyLZC8sar9PZ4FV7zzch~P8DYWGTlut9kbCVbXl-ydCGF-5Z97xj2vL7qZIKlUTsCYCzwqES6mltg66vrtLExlDIdjJEYVGaZiQO37KsVDrogGA0408xek5l1H9j9Kl0vsXxuy9sBwB6xpYSOJ7hNFbM2N3kRGAsIPnFYKg__" alt="" />
                            <h3 className="mb-2 font-semibold text-md text-black group-hover:text-white">User Privacy</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">Customer privacy is our main priority. We understand the significance of your personal information. That’s why we never ask for your personal data instead of your name and email address. Yet, this information is kept limited to our authorities only.</p>
                        </div>

                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://s3-alpha-sig.figma.com/img/deb3/7f7b/2d3c60e5aaa244566ea444a5fdd10bb7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f8hiI7TAqBLHg--RFwdN2iRFHLTfWLM6gegeZVdD13yG8fEd0zq5K55iGLIPyRdm8jO4nO3qH1nDauOk0JBBc~TEvH4zSSeHaCMrzIfSGrS3e6mq7ehhp5qPpGBNKg0Xs~McV9sX6Hx-7APnH5Hl61LYkmV9YtIP4axxHAwH3nTklkvg-K8jIwtohzpTWukQmnUVarnvDZWIhi2BBaW65y~NxRt7vJiR03zymJkMEM~cX~rupfhLFUDoI-pL1WPgQhmLi~X8PU6NFt0cxYPOP3DfkWTiHJfnyKL-KzVQjOtIY9sSWtvGN2Ku1zay-GFOhUkYOwmqQ5E3Zw2p1V9v0A__" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">Expertise in Diverse Platform</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">Our subject experts have experience in handling different academic platforms, so they can easily navigate through your online portal hassle-freely. They have gained Master and PhD degrees from reputed universities to bring answers to your queries.</p>
                        </div>

                        <div className="service_card box_shadow px-5 py-7 rounded-2xl bg-white">
                            <img className='mb-4 size-10' src="https://s3-alpha-sig.figma.com/img/d5c8/d8c8/15b1d37e7bded0785e6044508c9a1f37?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmH1BU9zihDN9Ma5zoC1V9WZa0OZCMw4UyDYU0Hkn8yQ0eucVt~JitBYUElDorESicdsiB412mh1D-FTwyDxCIM7S9gBli3hu8~CasCVFWNYdG-ABMvS5Ed8IctslWmF64tXlvk2WKRDRQW5eMcS9MvEB8JITQ~8dVO5B-0K8V6BD-4TgIVCgltqtkBXtDltrpFLPVBAxu48H8bIsfIdtUZ9JKR5H4iH0l2i7p2mn6Ig7Hfd0PxENVO~H9u9m7-~zNl6xiqHaI~vbiltPX2lOS5R0kHxrTuM0WCgwMCCj-41-k0pfzUOdKI7bjAWKcoO3J6T5FlmiSuFxQLVTT33MA__" alt="" />
                            <h3 className="mb-2  font-semibold text-md text-black group-hover:text-white">Delivery on Time</h3>
                            <p className=" text-sm leading-6 font-normal text-black group-hover:text-white">If you have an upcoming exam with a short deadline, don’t worry. LetStudyStello handle your exam and take it for you. Our experts strive their best to do your exam flawlessly and deliver it on time. You can review your exam before submitting it.</p>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* --------------- PROCESS WE FOLLOW ---------------  */}
            <Process />

            {/* --------------- SERVICES ---------------  */}
            <section className='bg-white'>
                <div className="max-w-6xl mx-auto py-20">
                    {/* --------------- HEADER TEXT ---------------  */}
                    <h2 className="mb-3 font-bold text-3xl md:text-4xl w-[95%] sm:w-[100%] mx-auto text-[#272727] text-center">Further Academic Services</h2>
                    <p className='w-[90%] sm:w-[80%] lg:w-[50%] mx-auto text-black text-center'>In order to avail of our academic writing services, you have to follow the simplest procedure mentioned below</p>

                    {/* --------------- CONTENT ---------------  */}
                    <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8 sm:px-10 px-4">

                        {/* CARD 1 */}
                        <div className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Exams</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">Online exams are usually tough to conduct. Hire law subject experts to get your law exam done within the right time and get an A+ grade for sure.</p>

                            <button className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></button>
                        </div>

                        {/* CARD 2 */}
                        <div className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Assignments</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">For online assignments, our subject experts perform thorough research to bring the most relevant and appropriate content. Moreover, you will find our online assignment services grammatically correct and plagiarism-free.</p>

                            <button className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></button>
                        </div>

                        {/* CARD 3 */}
                        <div className="service_card group box_shadow px-6 py-6 rounded-2xl bg-white hover:bg-[#1A73E8]">

                            <div className="mb-3 logo w-16 h-16 p-1.5 rounded-xl bg-[#E8F1FD]">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/question_1.png?v=1713360866" alt="" />
                            </div>

                            <h3 className="mb-2 font-medium text-xl text-[#1A73E8] group-hover:text-white">Online Class</h3>
                            <p className="mb-3 sm:mb-4 text-sm leading-6 font-normal text-black group-hover:text-white">While taking your online class, if you are assigned homework to be submitted urgently or in an extended period, get our reliable services. AtDomyclassscholarly, we offer the most efficient homework services at quite reasonable prices with unlimited revisions.</p>

                            <button className='flex items-center gap-2 text-md font-medium text-[#1A73E8] group-hover:text-white'>READ MORE <FaArrowRightLong size={14} /></button>
                        </div>

                    </div>
                </div>
            </section>

            {/* --------------- SECOND CTA SECTION ---------------  */}
            <CtaTwo text="Do my class" />

            {/* --------------- SUBJECT DETAILS ---------------  */}
            <Subject />

            {/* --------------- FAQ'S ---------------  */}
            <Faq />

            {/* --------------- TESTIMONIAL ---------------  */}
            <Testimonial />
        </>
    )
}

export default OnlineClasses
