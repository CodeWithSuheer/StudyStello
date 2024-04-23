import React from 'react'
import Services from './Services';
import LogoGrid from './LogoGrid';
import ChooseFrom from './ChooseFrom';
import Commitments from './Commitments';
import Button from '../../components/Button';
import Testimonial from './Testimonial';
import Process from './Process';
import Faq from './Faq';
import './Home.css';
import CtaTwo from './CtaTwo';
import CtaOne from './CtaOne';


const HomePage = () => {
    return (
        <>
            {/* --------------- HERO SECTION ---------------  */}
            <section className='gradient'>
                <div className="max-w-full pt-10 pb-20 lg:pt-0 lg:pb-10 mx-auto">

                    <div className="items-center lg:flex lg:min-h-[90vh]">
                        <div className="pt-0 md:pt-2 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-2">

                            <div className="content px-5 pt-0 pb-8 sm:pt-10 md:pb-12 sm:px-4 md:px-20 lg:pl-14 xl:pl-16 xl:pr-0">
                                <h2 className='mainHeading mb-5'>Access Academic Assistance Promptly, Exactly When You Need It.</h2>
                                <p className='mb-3 text-md md:text-lg font-normal'>Whether you seek assistance for a particular task or require continuous support throughout the academic term, we're here to meet your need</p>

                                <div className="button mt-7">
                                    <Button />
                                </div>
                            </div>

                            <div className="content">
                                <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72166_f8ee09d3-a74c-4a61-886e-610b0b8adb4a.png?v=1713266395" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* --------------- LOGO GRID ---------------  */}
            <LogoGrid />

            {/* --------------- CHOOSE FROM ---------------  */}
            <ChooseFrom />

            {/* --------------- SERVICES ---------------  */}
            <Services />

            {/* --------------- CTA SECTION ---------------  */}
            <CtaOne text="Take my class" />

            {/* --------------- PROCESS WE FOLLOW ---------------  */}
            <Process />

            {/* --------------- COMMITMENTS ---------------  */}
            <Commitments />

            {/* ---------------SECOND CTA SECTION ---------------  */}
            <CtaTwo text="Do my class" />

            {/* ---------------FAQ'S ---------------  */}
            <Faq />

            {/* --------------- TESTIMONIAL ---------------  */}
            <Testimonial />
        </>
    )
}

export default HomePage
