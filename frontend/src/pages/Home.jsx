import React from 'react'
import '../styles/home.css'

import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import tourImg from '../assets/images/tour.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image_gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
    return(
        <>
            {/*==== hero section ===*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Savoir avant de partir'} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>La beauté est une Harmonie merveilleuse entre
                                    <span className="highlight"> l'esprit et le corps</span>
                                </h1>
                                <p>La beauté est une fusion de soins délicats,
                                     de savoir-faire expert et de confiance intérieure. Nous sommes là pour 
                                    sublimer votre essence naturelle et vous aider à rayonner avec assurance.</p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-4">
                                <video src={heroVideo} alt="" controls poster={tourImg} />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">Ce que nous servons</h5>
                            <h2 className='services__title'>Nous offrons nos meilleurs services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/*====== featured tour services section ======*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Explorer'} />
                            <h2 className="featured__tour-title">
                                Nos services
                            </h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

            {/* ======== experience section ======== */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="experience__content">
                                <Subtitle subtitle={'Expérience'} />

                                <h2>Avec toute notre expérience <br /> nous vous servons</h2>
                                <p>
                                    Notre équipe dévouée met à votre disposition toute 
                                    son expertise pour vous offrir des services 
                                    d'exception. Que ce soit pour une séance de détente 
                                    ou une transformation radicale, 
                                    <br /> nous sommes là pour répondre à vos besoins avec 
                                    professionnalisme et attention.
                                </p>
                            </div>
                        
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Service réussi</h6>
                                </div>

                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Clients réguliers</h6>
                                </div>

                                <div className="counter__box">
                                    <span>1</span>
                                    <h6>Années d'expérience</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            { /* ======= Gallery section======= */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Gallerie'} />
                            <h2 className="gallery__title">
                                Visitez la galerie de visites de nos clients
                            </h2>
                        </Col>
                        <Col lg='12'>
                            <MasonryImagesGallery />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*========= testimonial section =========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Les fans adorent'} />
                            <h2 className='testimonial__title'>Ce que disent nos fans à notre service</h2>
                        </Col>

                        <Col>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Newsletter />

        </>
    )
}

export default Home