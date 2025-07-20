import React,{useRef,useState} from 'react'
import '../styles/tour-details.css'

import { Container,Row,Col,Form,ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import avatar from '../assets/images/avatar.jpg'

import Booking from '../components/Booking/Booking'

const TourDeatils = () => {

    const {id} = useParams()

    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating]=useState(null)

    const tour = tourData.find(tour => tour.id === id)

    const {photo,title,desc,price,reviews,avgRating,address,city,distance,maxGroupSize}= tour

    // Format date
    const options = {day:'numeric', month:'long', year:'numeric'}    

    // submit request to the server
    const sublitHandler = e=>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value
        

    }
    
    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className="tour__content">
                                <img src={photo} alt="" />

                                <div className="tour__info">
                                    <h2>{title}</h2>

                                    <div className='d-flex align-items-center gap-5'>
                                    <span className="tour__rating d-flex align-items-center gap-1">
                                        <i 
                                            className="ri-star-fill"
                                            style={{color:"var(--secondary-color)"}}
                                        ></i>
                                        {avgRating !== 0 ? avgRating : "Non noté"}
                                        {avgRating !== 0 && <span>({reviews.length})</span>} {/* Ajouter la condition pour afficher la longueur des avis */}
                                    </span>

                                    <span>
                                        <i class="ri-map-pin-fill"></i>{ address}
                                    </span>

                                    </div>

                                    <div className="tour__extra-details">
                                        <span>
                                            <i class="ri-map-pin-line"></i>{city}
                                        </span>

                                        <span>
                                            <i class="ri-wallet-3-fill"></i>{price}/par personne
                                        </span>

                                        <span>
                                            <i class="ri-group-line"></i>{maxGroupSize}
                                            
                                        </span>

                                        <span>
                                            
                                            <i class="ri-map-pin-time-line"></i>{distance} k/m
                                        </span>

                                        
                                    </div>

                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                {/* ========= Service reviews section ======== */}
                                <div className="tour__reviews mt-4">
                                    <h4>Commentaires ({reviews?.length} commentaires)</h4>

                                    <Form onSubmit={sublitHandler}>
                                        <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                            <span onClick={()=> setTourRating(1)}>
                                               1 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={()=> setTourRating(2)}>
                                               2 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={()=> setTourRating(3)}>
                                               3 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={()=> setTourRating(4)}>
                                               4 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={()=> setTourRating(5)}>
                                               5 <i class="ri-star-fill"></i>
                                            </span>

                                        </div>

                                        <div className="review__input">
                                            <input 
                                                type="text" 
                                                ref={reviewMsgRef} 
                                                placeholder='Partagez vos pensées'
                                                required
                                            />
                                            <button className='btn primary__btn text-white' type='submit'> 
                                                Envoyer
                                            </button>
                                        </div>
                                    </Form>

                                    <ListGroup className='user__reviews'>
                                        {
                                            reviews?.map(review=>(
                                                <div className="review__item">
                                                    <img src={avatar} alt="" />

                                                    <div className="w-100">
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h5>Olfa</h5>
                                                                <p>
                                                                    {
                                                                        new Date("01-18-2023").toLocaleDateString("en-Tunis", options)
                                                                    }
                                                                </p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                5 <i class="ri-star-fill"></i>
                                                            </span>
                                                        </div>

                                                        <h6>Service incroyable</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>

                            </div>
                        </Col>

                        <Col lg='4'>
                            <Booking tour={tour} avgRating={avgRating} />
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    )
}

export default TourDeatils