import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import TestimonialCard from './TestimonialCard'

const TestimonialCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items=[1,1,1,1,1].map((item)=><TestimonialCard/>)
    return (
        <div className='px-4 lg:px-8 border border-black'>
            <div className='relative p-5'>
            <AliceCarousel
                items={items}
                disableButtonsControls
                infinite
                responsive={responsive}
                disableDotsControls
                />
            </div>   
        </div>
    )
}

export default TestimonialCarousel;