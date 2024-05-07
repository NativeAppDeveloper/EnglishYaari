import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Frame2 from '../assets/EnglishYaariWork/Frame2.png';
import Frame3 from '../assets/EnglishYaariWork/Frame3.png';
import Frame4 from '../assets/EnglishYaariWork/Frame4.png';
import Frame5 from '../assets/EnglishYaariWork/Frame5.png';
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

function ScrollSection() {

    const data = [

        {
            tittle: "Choose date and time",
            subTitle:
                "Book sessions anytime between 6 am to 12 midnight. EnglishYaari offers flexible scheduling for your Convenience.",
            bg: Frame2,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="29" r="29" fill="#1DA96E" />
                    <path d="M38.3749 17.9844H35.328V16.8125C35.328 16.626 35.254 16.4472 35.1221 16.3153C34.9902 16.1835 34.8114 16.1094 34.6249 16.1094C34.4384 16.1094 34.2596 16.1835 34.1277 16.3153C33.9959 16.4472 33.9218 16.626 33.9218 16.8125V17.9844H24.0781V16.8125C24.0781 16.626 24.004 16.4472 23.8722 16.3153C23.7403 16.1835 23.5615 16.1094 23.375 16.1094C23.1885 16.1094 23.0097 16.1835 22.8778 16.3153C22.7459 16.4472 22.6719 16.626 22.6719 16.8125V17.9844H19.625C19.1899 17.9844 18.7726 18.1572 18.4649 18.4649C18.1572 18.7726 17.9844 19.1899 17.9844 19.625V38.3749C17.9844 38.81 18.1572 39.2273 18.4649 39.535C18.7726 39.8426 19.1899 40.0155 19.625 40.0155H38.3749C38.81 40.0155 39.2273 39.8426 39.535 39.535C39.8427 39.2273 40.0155 38.81 40.0155 38.3749V19.625C40.0155 19.1899 39.8427 18.7726 39.535 18.4649C39.2273 18.1572 38.81 17.9844 38.3749 17.9844ZM19.625 19.3906H22.6719V20.5625C22.6719 20.749 22.7459 20.9278 22.8778 21.0597C23.0097 21.1915 23.1885 21.2656 23.375 21.2656C23.5615 21.2656 23.7403 21.1915 23.8722 21.0597C24.004 20.9278 24.0781 20.749 24.0781 20.5625V19.3906H33.9218V20.5625C33.9218 20.749 33.9959 20.9278 34.1277 21.0597C34.2596 21.1915 34.4384 21.2656 34.6249 21.2656C34.8114 21.2656 34.9902 21.1915 35.1221 21.0597C35.254 20.9278 35.328 20.749 35.328 20.5625V19.3906H38.3749C38.4371 19.3906 38.4967 19.4153 38.5406 19.4593C38.5846 19.5032 38.6093 19.5628 38.6093 19.625V23.6093H19.3906V19.625C19.3906 19.5628 19.4153 19.5032 19.4593 19.4593C19.5032 19.4153 19.5628 19.3906 19.625 19.3906ZM38.3749 38.6093H19.625C19.5628 38.6093 19.5032 38.5846 19.4593 38.5406C19.4153 38.4967 19.3906 38.437 19.3906 38.3749V25.0156H38.6093V38.3749C38.6093 38.437 38.5846 38.4967 38.5406 38.5406C38.4967 38.5846 38.4371 38.6093 38.3749 38.6093ZM33.7155 28.5031C33.8472 28.6349 33.9212 28.8136 33.9212 28.9999C33.9212 29.1863 33.8472 29.365 33.7155 29.4968L28.0906 35.1218C27.9587 35.2534 27.78 35.3274 27.5937 35.3274C27.4074 35.3274 27.2287 35.2534 27.0968 35.1218L24.2843 32.3093C24.1601 32.176 24.0925 31.9997 24.0957 31.8176C24.099 31.6354 24.1727 31.4616 24.3016 31.3328C24.4304 31.204 24.6042 31.1302 24.7864 31.1269C24.9685 31.1237 25.1448 31.1913 25.2781 31.3155L27.5937 33.63L32.7218 28.5031C32.8536 28.3714 33.0323 28.2974 33.2187 28.2974C33.405 28.2974 33.5837 28.3714 33.7155 28.5031Z" fill="white" />
                </svg>


            ),

        },
        {
            tittle: "Choose a Tutor",
            subTitle:
                "We bring you certified trainers who will Identify your problems, rectify your mistakes & give you instant feedback",
            bg: Frame3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="29" r="29" fill="#8A16E4" />
                    <path d="M39.3065 19.1396H18.6942C18.1972 19.1396 17.7206 19.3285 17.3691 19.6647C17.0177 20.0009 16.8203 20.4569 16.8203 20.9324V37.0669C16.8203 37.5424 17.0177 37.9984 17.3691 38.3346C17.7206 38.6708 18.1972 38.8596 18.6942 38.8596H20.2623C20.4397 38.8597 20.6134 38.8116 20.7632 38.721C20.9131 38.6303 21.0331 38.5009 21.1091 38.3476C21.5647 37.4273 22.284 36.6497 23.1834 36.1052C24.0827 35.5607 25.1252 35.2716 26.1895 35.2716C27.2539 35.2716 28.2964 35.5607 29.1957 36.1052C30.0951 36.6497 30.8144 37.4273 31.27 38.3476C31.346 38.5009 31.466 38.6303 31.6158 38.721C31.7657 38.8116 31.9394 38.8597 32.1168 38.8596H39.3065C39.8034 38.8596 40.2801 38.6708 40.6315 38.3346C40.9829 37.9984 41.1803 37.5424 41.1803 37.0669V20.9324C41.1803 20.4569 40.9829 20.0009 40.6315 19.6647C40.2801 19.3285 39.8034 19.1396 39.3065 19.1396ZM23.3788 30.7924C23.3788 30.2605 23.5436 29.7406 23.8525 29.2984C24.1613 28.8562 24.6003 28.5115 25.1139 28.308C25.6275 28.1044 26.1927 28.0512 26.7379 28.155C27.2831 28.2587 27.784 28.5148 28.1771 28.8909C28.5702 29.267 28.8379 29.7461 28.9463 30.2678C29.0548 30.7894 28.9991 31.3301 28.7864 31.8214C28.5736 32.3128 28.2134 32.7328 27.7511 33.0283C27.2889 33.3238 26.7455 33.4815 26.1895 33.4815C25.4441 33.4815 24.7292 33.1982 24.202 32.6939C23.6749 32.1895 23.3788 31.5056 23.3788 30.7924ZM39.3065 37.0669H32.6812C31.8988 35.78 30.7194 34.7561 29.3048 34.1358C30.014 33.5316 30.5146 32.7355 30.7401 31.853C30.9657 30.9704 30.9055 30.0431 30.5676 29.1941C30.2298 28.345 29.6302 27.6142 28.8483 27.0985C28.0664 26.5829 27.1392 26.3068 26.1895 26.3068C25.2399 26.3068 24.3127 26.5829 23.5308 27.0985C22.7489 27.6142 22.1493 28.345 21.8114 29.1941C21.4736 30.0431 21.4134 30.9704 21.639 31.853C21.8645 32.7355 22.365 33.5316 23.0743 34.1358C21.6596 34.7561 20.4802 35.78 19.6978 37.0669H18.6942V20.9324H39.3065V37.0669ZM20.568 25.4142V23.6215C20.568 23.3837 20.6667 23.1557 20.8424 22.9876C21.0181 22.8195 21.2564 22.7251 21.5049 22.7251H36.4957C36.7442 22.7251 36.9825 22.8195 37.1582 22.9876C37.3339 23.1557 37.4326 23.3837 37.4326 23.6215V34.3778C37.4326 34.6156 37.3339 34.8436 37.1582 35.0117C36.9825 35.1798 36.7442 35.2742 36.4957 35.2742H34.6219C34.3734 35.2742 34.1351 35.1798 33.9593 35.0117C33.7836 34.8436 33.6849 34.6156 33.6849 34.3778C33.6849 34.1401 33.7836 33.9121 33.9593 33.744C34.1351 33.5759 34.3734 33.4815 34.6219 33.4815H35.5588V24.5178H22.4419V25.4142C22.4419 25.6519 22.3431 25.8799 22.1674 26.048C21.9917 26.2161 21.7534 26.3106 21.5049 26.3106C21.2564 26.3106 21.0181 26.2161 20.8424 26.048C20.6667 25.8799 20.568 25.6519 20.568 25.4142Z" fill="white" />
                </svg>

            ),
        },
        {
            tittle: "Get into live classes",
            subTitle:
                "Ace your Spoken English Journey. Our classes provide a personalized building space for rapid language acquisition.",
            bg: Frame4,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="29" r="29" fill="#EB3333" />
                    <rect width="29.9998" height="29.9998" transform="translate(14 14)" fill="#EB3333" />
                    <path d="M38.3749 17.9844H35.328V16.8125C35.328 16.626 35.254 16.4472 35.1221 16.3153C34.9902 16.1835 34.8114 16.1094 34.6249 16.1094C34.4384 16.1094 34.2596 16.1835 34.1277 16.3153C33.9959 16.4472 33.9218 16.626 33.9218 16.8125V17.9844H24.0781V16.8125C24.0781 16.626 24.004 16.4472 23.8722 16.3153C23.7403 16.1835 23.5615 16.1094 23.375 16.1094C23.1885 16.1094 23.0097 16.1835 22.8778 16.3153C22.7459 16.4472 22.6719 16.626 22.6719 16.8125V17.9844H19.625C19.1899 17.9844 18.7726 18.1572 18.4649 18.4649C18.1572 18.7726 17.9844 19.1899 17.9844 19.625V38.3749C17.9844 38.81 18.1572 39.2273 18.4649 39.535C18.7726 39.8426 19.1899 40.0155 19.625 40.0155H38.3749C38.81 40.0155 39.2273 39.8426 39.535 39.535C39.8427 39.2273 40.0155 38.81 40.0155 38.3749V19.625C40.0155 19.1899 39.8427 18.7726 39.535 18.4649C39.2273 18.1572 38.81 17.9844 38.3749 17.9844ZM19.625 19.3906H22.6719V20.5625C22.6719 20.749 22.7459 20.9278 22.8778 21.0597C23.0097 21.1915 23.1885 21.2656 23.375 21.2656C23.5615 21.2656 23.7403 21.1915 23.8722 21.0597C24.004 20.9278 24.0781 20.749 24.0781 20.5625V19.3906H33.9218V20.5625C33.9218 20.749 33.9959 20.9278 34.1277 21.0597C34.2596 21.1915 34.4384 21.2656 34.6249 21.2656C34.8114 21.2656 34.9902 21.1915 35.1221 21.0597C35.254 20.9278 35.328 20.749 35.328 20.5625V19.3906H38.3749C38.4371 19.3906 38.4967 19.4153 38.5406 19.4593C38.5846 19.5032 38.6093 19.5628 38.6093 19.625V23.6093H19.3906V19.625C19.3906 19.5628 19.4153 19.5032 19.4593 19.4593C19.5032 19.4153 19.5628 19.3906 19.625 19.3906ZM38.3749 38.6093H19.625C19.5628 38.6093 19.5032 38.5846 19.4593 38.5406C19.4153 38.4967 19.3906 38.437 19.3906 38.3749V25.0156H38.6093V38.3749C38.6093 38.437 38.5846 38.4967 38.5406 38.5406C38.4967 38.5846 38.4371 38.6093 38.3749 38.6093ZM33.7155 28.5031C33.8472 28.6349 33.9212 28.8136 33.9212 28.9999C33.9212 29.1863 33.8472 29.365 33.7155 29.4968L28.0906 35.1218C27.9587 35.2534 27.78 35.3274 27.5937 35.3274C27.4074 35.3274 27.2287 35.2534 27.0968 35.1218L24.2843 32.3093C24.1601 32.176 24.0925 31.9997 24.0957 31.8176C24.099 31.6354 24.1727 31.4616 24.3016 31.3328C24.4304 31.204 24.6042 31.1302 24.7864 31.1269C24.9685 31.1237 25.1448 31.1913 25.2781 31.3155L27.5937 33.63L32.7218 28.5031C32.8536 28.3714 33.0323 28.2974 33.2187 28.2974C33.405 28.2974 33.5837 28.3714 33.7155 28.5031Z" fill="white" />
                </svg>


            ),
        },

        {
            tittle: "Session reports",
            subTitle:
                "After the successful completion of your session, get descriptive feedback along with the roadmap to reach your goal.",
            bg: Frame5,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="29" r="29" fill="#1648C9" />
                    <path d="M24.6875 24.4844C24.6875 24.273 24.7715 24.0703 24.9209 23.9209C25.0703 23.7715 25.273 23.6875 25.4844 23.6875H33.9844C34.1957 23.6875 34.3984 23.7715 34.5479 23.9209C34.6973 24.0703 34.7812 24.273 34.7812 24.4844C34.7812 24.6957 34.6973 24.8984 34.5479 25.0479C34.3984 25.1973 34.1957 25.2812 33.9844 25.2812H25.4844C25.273 25.2812 25.0703 25.1973 24.9209 25.0479C24.7715 24.8984 24.6875 24.6957 24.6875 24.4844ZM25.4844 29.5312H33.9844C34.1957 29.5312 34.3984 29.4473 34.5479 29.2979C34.6973 29.1484 34.7812 28.9457 34.7812 28.7344C34.7812 28.523 34.6973 28.3203 34.5479 28.1709C34.3984 28.0215 34.1957 27.9375 33.9844 27.9375H25.4844C25.273 27.9375 25.0703 28.0215 24.9209 28.1709C24.7715 28.3203 24.6875 28.523 24.6875 28.7344C24.6875 28.9457 24.7715 29.1484 24.9209 29.2979C25.0703 29.4473 25.273 29.5312 25.4844 29.5312ZM29.7344 32.1875H25.4844C25.273 32.1875 25.0703 32.2715 24.9209 32.4209C24.7715 32.5703 24.6875 32.773 24.6875 32.9844C24.6875 33.1957 24.7715 33.3984 24.9209 33.5479C25.0703 33.6973 25.273 33.7812 25.4844 33.7812H29.7344C29.9457 33.7812 30.1484 33.6973 30.2979 33.5479C30.4473 33.3984 30.5312 33.1957 30.5312 32.9844C30.5312 32.773 30.4473 32.5703 30.2979 32.4209C30.1484 32.2715 29.9457 32.1875 29.7344 32.1875ZM42.2188 18.1094V32.5448C42.2192 32.789 42.1713 33.0309 42.0779 33.2566C41.9844 33.4823 41.8472 33.6872 41.6742 33.8596L34.8596 40.6742C34.6872 40.8472 34.4823 40.9844 34.2566 41.0779C34.0309 41.1713 33.789 41.2192 33.5448 41.2188H19.1094C18.6162 41.2188 18.1433 41.0229 17.7946 40.6742C17.4459 40.3255 17.25 39.8525 17.25 39.3594V18.1094C17.25 17.6162 17.4459 17.1433 17.7946 16.7946C18.1433 16.4459 18.6162 16.25 19.1094 16.25H40.3594C40.8525 16.25 41.3255 16.4459 41.6742 16.7946C42.0229 17.1433 42.2188 17.6162 42.2188 18.1094ZM19.1094 39.625H33.1875V32.9844C33.1875 32.773 33.2715 32.5703 33.4209 32.4209C33.5703 32.2715 33.773 32.1875 33.9844 32.1875H40.625V18.1094C40.625 18.0389 40.597 17.9714 40.5472 17.9215C40.4974 17.8717 40.4298 17.8438 40.3594 17.8438H19.1094C19.0389 17.8438 18.9714 17.8717 18.9215 17.9215C18.8717 17.9714 18.8438 18.0389 18.8438 18.1094V39.3594C18.8438 39.4298 18.8717 39.4974 18.9215 39.5472C18.9714 39.597 19.0389 39.625 19.1094 39.625ZM39.4988 33.7812H34.7812V38.4988L39.4988 33.7812Z" fill="white" />
                </svg>


            ),
        },
    ];


    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-2000px",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    return (
        <section className="scroll-section-outer  ">
            {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}




            <div className=" h-screen flex flex-col justify-center" ref={triggerRef}>


                <div style={{ position: 'absolute',  flexDirection: 'row', justifyContent: 'space-between', display: 'flex' }} className=" container items-center  top-36 2xll:top-48 z-[999] ">
                    <p className="font-semibold h3">
                        How EnglishYaari Works?
                    </p>

                    <div className="font-semibold justify-center gap-2 py-3 rounded-full h5 flex items-center text-white bg-primary-500 " style={{ width: '336px' }}>
                        Begin now <FaArrowRight className='text-white' />

                    </div>
                </div>


                <div ref={sectionRef} className="scroll-section-inner  ">


                    <div className="scroll-section">
                        <Card item={data[0]} />
                    </div>
                    <div className="scroll-section">
                        <Card item={data[1]} />
                    </div>
                    <div className="scroll-section">
                        <Card item={data[2]} />
                    </div>
                    <div className="scroll-section">
                        <Card item={data[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;


const Card = ({ item }) => {

    const features = () => {
        if (item?.tittle == 'Choose date and time') {
            return <div style={{ background: '#EBE7FF' }} className="flex bg-white w-[280px] justify-center gap-2 py-1.5 rounded-full ">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_182_5091)">
                        <path d="M10.0923 18.0537C14.266 18.0537 17.6494 14.6703 17.6494 10.4966C17.6494 6.32289 14.266 2.93945 10.0923 2.93945C5.9186 2.93945 2.53516 6.32289 2.53516 10.4966C2.53516 14.6703 5.9186 18.0537 10.0923 18.0537Z" stroke="#262527" stroke-width="1.25952" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.0938 6.08789V10.4962H14.5021" stroke="#262527" stroke-width="1.25952" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_182_5091">
                            <rect width="20.1523" height="20.1523" fill="white" transform="translate(0.015625 0.423828)" />
                        </clipPath>
                    </defs>
                </svg>

                <p className="text-sm lg:text-base font-medium ">Classes at your convenience</p>

            </div>
        }
        else if (item.tittle == 'Choose a Tutor') {
            return (
                <div style={{ background: '#EBE7FF' }} className="flex bg-white w-[280px] justify-center items-center gap-2 py-1.5 rounded-full ">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0146 0.400391H1.6416C1.31344 0.400391 0.998732 0.536913 0.766693 0.779924C0.534655 1.02294 0.404297 1.35253 0.404297 1.6962V6.45668C0.404297 13.714 6.26754 16.1218 7.44143 16.5308C7.69215 16.6201 7.96402 16.6201 8.21474 16.5308C9.39018 16.1218 15.2519 13.714 15.2519 6.45668V1.6962C15.2519 1.35253 15.1215 1.02294 14.8895 0.779924C14.6574 0.536913 14.3427 0.400391 14.0146 0.400391ZM14.0146 6.45749C14.0146 12.8086 8.88366 14.9305 7.82809 15.2998C6.7818 14.9345 1.6416 12.8142 1.6416 6.45749V1.6962H14.0146V6.45749ZM4.29715 8.63364C4.18106 8.51206 4.11585 8.34717 4.11585 8.17524C4.11585 8.00331 4.18106 7.83842 4.29715 7.71685C4.41323 7.59528 4.57067 7.52698 4.73484 7.52698C4.89901 7.52698 5.05645 7.59528 5.17254 7.71685L6.59079 9.20217L10.4836 5.12523C10.5411 5.06504 10.6094 5.01729 10.6845 4.98471C10.7596 4.95213 10.84 4.93536 10.9213 4.93536C11.0026 4.93536 11.0831 4.95213 11.1582 4.98471C11.2333 5.01729 11.3015 5.06504 11.359 5.12523C11.4165 5.18543 11.4621 5.25689 11.4932 5.33555C11.5243 5.4142 11.5403 5.49849 11.5403 5.58363C11.5403 5.66876 11.5243 5.75306 11.4932 5.83171C11.4621 5.91036 11.4165 5.98182 11.359 6.04202L7.02848 10.5774C6.97103 10.6376 6.9028 10.6854 6.82769 10.718C6.75259 10.7506 6.67209 10.7674 6.59079 10.7674C6.50949 10.7674 6.42899 10.7506 6.35388 10.718C6.27878 10.6854 6.21055 10.6376 6.15309 10.5774L4.29715 8.63364Z" fill="#262527" />
                    </svg>

                    <p className="text-sm lg:text-base font-medium ">Classes at your convenience</p>

                </div>
            )
        }

        else if (item.tittle == 'Get into live classes') {
            return (
                <div style={{ background: '#EB3333' }} className="flex bg-white w-[280px] justify-center items-center gap-2 py-1.5 rounded-full ">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_330_1738)">
                            <path d="M15.8115 3.90625H18.2265C18.4095 3.90625 18.585 3.97894 18.7144 4.10834C18.8438 4.23774 18.9165 4.41324 18.9165 4.59624V7.01118" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8115 19.0893H18.2265C18.4095 19.0893 18.585 19.0166 18.7144 18.8872C18.8438 18.7578 18.9165 18.5823 18.9165 18.3993V15.9844" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.84224 19.0893H4.42729C4.24429 19.0893 4.06879 19.0166 3.9394 18.8872C3.81 18.7578 3.7373 18.5823 3.7373 18.3993V15.9844" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.84224 3.90625H4.42729C4.24429 3.90625 4.06879 3.97894 3.9394 4.10834C3.81 4.23774 3.7373 4.41324 3.7373 4.59624V7.01118" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.3293 12.8793C12.8536 12.8793 14.0892 11.6436 14.0892 10.1193C14.0892 8.59504 12.8536 7.35938 11.3293 7.35938C9.805 7.35938 8.56934 8.59504 8.56934 10.1193C8.56934 11.6436 9.805 12.8793 11.3293 12.8793Z" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.18652 14.9528C7.66855 14.3101 8.29359 13.7884 9.01215 13.4291C9.73072 13.0699 10.5231 12.8828 11.3264 12.8828C12.1298 12.8828 12.9222 13.0699 13.6407 13.4291C14.3593 13.7884 14.9843 14.3101 15.4663 14.9528" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_330_1738">
                                <rect width="22.0795" height="22.0795" fill="white" transform="translate(0.288086 0.460938)" />
                            </clipPath>
                        </defs>
                    </svg>


                    <p className="text-sm lg:text-base font-medium text-white">Get undivided attention</p>

                </div>
            )
        }


        else if (item.tittle == 'Session reports') {
            return (
                <div style={{ background: '#1648C9' }} className="flex bg-white w-[280px] justify-center items-center gap-2 py-1.5 rounded-full ">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_330_1738)">
                            <path d="M15.8115 3.90625H18.2265C18.4095 3.90625 18.585 3.97894 18.7144 4.10834C18.8438 4.23774 18.9165 4.41324 18.9165 4.59624V7.01118" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8115 19.0893H18.2265C18.4095 19.0893 18.585 19.0166 18.7144 18.8872C18.8438 18.7578 18.9165 18.5823 18.9165 18.3993V15.9844" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.84224 19.0893H4.42729C4.24429 19.0893 4.06879 19.0166 3.9394 18.8872C3.81 18.7578 3.7373 18.5823 3.7373 18.3993V15.9844" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.84224 3.90625H4.42729C4.24429 3.90625 4.06879 3.97894 3.9394 4.10834C3.81 4.23774 3.7373 4.41324 3.7373 4.59624V7.01118" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.3293 12.8793C12.8536 12.8793 14.0892 11.6436 14.0892 10.1193C14.0892 8.59504 12.8536 7.35938 11.3293 7.35938C9.805 7.35938 8.56934 8.59504 8.56934 10.1193C8.56934 11.6436 9.805 12.8793 11.3293 12.8793Z" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.18652 14.9528C7.66855 14.3101 8.29359 13.7884 9.01215 13.4291C9.73072 13.0699 10.5231 12.8828 11.3264 12.8828C12.1298 12.8828 12.9222 13.0699 13.6407 13.4291C14.3593 13.7884 14.9843 14.3101 15.4663 14.9528" stroke="white" stroke-width="1.37997" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_330_1738">
                                <rect width="22.0795" height="22.0795" fill="white" transform="translate(0.288086 0.460938)" />
                            </clipPath>
                        </defs>
                    </svg>


                    <p className="text-sm lg:text-base font-medium text-white">Gamified Learning Experience</p>

                </div>
            )
        }
    }
    return (
        <div className=" flex flex-wrap w-full lg:min-w-[700px]   mx-3 pl-4 bg-white rounded-3xl overflow-hidden mt-10 lg:mr-10">
            <div className="w-full lg:w-[50%]    flex flex-col px-4    justify-around gap-y-4  ">
                <div>
                    {item?.icon}

                    <p className=" font-semibold  text-black mt-4 h6">{item?.tittle}</p>
                    <p className="text-secondry mb-4 mt-2 font-medium">{item?.subTitle}</p>
                </div>
                {features()}
            </div>
            <Image className=" w-full lg:w-[50%]  lg:h-auto" src={item?.bg} />
        </div>
    );
};