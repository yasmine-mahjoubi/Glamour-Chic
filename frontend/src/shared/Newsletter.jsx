import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return(
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Abonnez-vous maintenant pour obtenir des informations esthétiques utiles</h2>

                            <div className="newsletter__input">
                                <input type="email" placeholder='Entrer votre email' />
                                <button className='btn newsletter__btn'>S'abonner</button>
                            </div>

                            <p>
                            Abonnez-vous pour recevoir nos astuces beauté, 
                            offres spéciales et mises à jour exclusives. 
                            Restez informé et rayonnez de beauté sans effort.
                            </p>
                        </div>
                    </Col>

                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter