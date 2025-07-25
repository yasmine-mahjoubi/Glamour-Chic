import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images//ava-1.jpg'
import ava02 from '../../assets/images//ava-2.jpg'
import ava03 from '../../assets/images//ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]

    }

    return(
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    Découvrez les commentaires de nos fans sur leur
                    expérience avec nous. Leurs témoignages 
                    sincères reflètent notre engagement envers 
                    l'excellence. Parcourez-les pour comprendre 
                    comment nous avons pu répondre à leurs attentes.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Gharbi Asma</h6>
                        <p>Cliente</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Découvrez les commentaires de nos fans sur leur
                    expérience avec nous. Leurs témoignages 
                    sincères reflètent notre engagement envers 
                    l'excellence. Parcourez-les pour comprendre 
                    comment nous avons pu répondre à leurs attentes.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Trabelsi Haifa</h6>
                        <p>Cliente</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Découvrez les commentaires de nos fans sur leur
                    expérience avec nous. Leurs témoignages 
                    sincères reflètent notre engagement envers 
                    l'excellence. Parcourez-les pour comprendre 
                    comment nous avons pu répondre à leurs attentes.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Abidi Rahma</h6>
                        <p>Cliente</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Découvrez les commentaires de nos fans sur leur
                    expérience avec nous. Leurs témoignages 
                    sincères reflètent notre engagement envers 
                    l'excellence. Parcourez-les pour comprendre 
                    comment nous avons pu répondre à leurs attentes.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} alt="" className='w-25 h-25 rounded-2' />
                    <div>
                        <h6 className='mb-0 mt-3'>Trabelsi Haifa</h6>
                        <p>Cliente</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials