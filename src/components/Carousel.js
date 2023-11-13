"use client"
import {useState} from "react";
import {RxDot, RxDotFilled} from "react-icons/rx";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Carousel(){
    const slides = [
        {
            url: '/images/vysa-charity-banner.png'
        },
        {
            url: '/images/north-carolina-wrightsville-source-supplied-beach-192723-2.jpg'
        },
        {
            url: '/images/pretty-essvpmmgzzs4ja3b.jpg'
        },
        {
            url: '/images/Pretty-Pictures-Fall.webp'
        },
        {
            url: '/images/pretty-vibrant-ocean-sunset-jyqib3lw63fcq1z3.jpg'
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newindex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newindex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
        <div className="w-screen m-auto  relative z-5 pb-20" style={{height: '85vh'}}>
            <div className="relative w-full h-full overflow-hidden ">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform bg-center bg-cover duration-300 ease-in-out  ${
                            index === currentIndex ? 'translate-x-0' : index > currentIndex ? 'translate-x-full' : '-translate-x-full'
                        }`}
                        style={{
                            backgroundImage: `url(${slide.url})`,
                            transform: `translateX(${(index - currentIndex) * 100}%)`
                        }}
                    />
                ))}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-md p-2 bg-primary text-accent cursor-pointer group'>
                    <FaChevronLeft size={30} onClick={prevSlide} className=" opacity-50 group-hover:opacity-100"/>
                </div>
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-md p-2 bg-primary text-accent cursor-pointer group'>
                    <FaChevronRight size={30} onClick={nextSlide} className="opacity-50 group-hover:opacity-100"/>
                </div>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer text-accent'>
                        {currentIndex === slideIndex ? <RxDotFilled/> : <RxDot/>}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Carousel;

