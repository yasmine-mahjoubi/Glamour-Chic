import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"

const quick_links=[
    {
        path:'/home',
        display:'Acceuil'
    },
    {
        path:'/about',
        display:'Centres'
    },
    {
        path:'/tours',
        display:'Services'
    },
];

const quick_links2=[
    {
        path:'/gallery',
        display:'Gallerie'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
];


const Footer = () => {

    const year = new Date().getFullYear()

    return(
        <footer>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                           <img src={logo} alt="" />
                           <p>
                            Restez connecté avec nous sur les réseaux sociaux 
                            pour obtenir les dernières mises à jour et
                            offres spéciales de beauté.
                            </p> 

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'>
                                        <i class="ri-instagram-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link to='#'>
                                        <i class="ri-facebook-circle-line"></i>
                                    </Link>
                                </span>
                                <span>
                                    <Link to='#'>
                                        <i class="ri-pages-line"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className="footer__link-title">Découvrir</h5>

                        <ListGroup className='footer__quick-links'>
                            {
                                quick_links.map((item,index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                        <h5 className="footer__link-title">Liens rapides</h5>

                        <ListGroup className='footer__quick-links'>
                            {
                                quick_links2.map((item,index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                        <h5 className="footer__link-title">Contact</h5>

                        <ListGroup className='footer__quick-links'>
                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class="ri-map-pin-line"></i>
                                    </span>
                                    Adresse
                                </h6>

                                <p className='mb-0'>
                                    Tunis, Ariana, Ben Arous, Manouba
                                </p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i class="ri-mail-line"></i>
                                    </span>
                                    Email
                                </h6>

                                <p className='mb-0'>
                                    rahal.ranim@etudiant-fst.utm.tn
                                </p>
                            </ListGroupItem>

                            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                    <i class="ri-phone-line"></i>
                                    </span>
                                    Téléphone
                                </h6>

                                <p className='mb-0'>
                                    +216 48 249 995
                                </p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='12' className='text-center pt-5'>
                        <p className="copyright">Copyright {year} 
                             design by Rahal Ranim, Chalghoum Mayssa, Mahjoubi Yasmine et Tahri Erij
                        </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer