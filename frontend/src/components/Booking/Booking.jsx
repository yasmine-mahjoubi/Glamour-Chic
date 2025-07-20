import React, { useState } from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import centers from '../../assets/data/centres'; 
import './booking.css';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'exemple@gmail.com',
        fullName: '',
        phone: '',
        bookAt: '',
        selectedCenter: ''
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const serviceFree = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFree);

    const handleClick = e => {
        e.preventDefault();
        navigate("/thank-you");
    };

    const groupCentersByCity = (centers) => {
        const groupedCenters = {};
    
        
        centers.forEach(center => {
            
            if (groupedCenters[center.city]) {
                
                groupedCenters[center.city].push(center);
            } else {
                
                groupedCenters[center.city] = [center];
            }
        });
    
       
        return Object.entries(groupedCenters).map(([name, centers]) => ({ name, centers }));
    };
    
    
    const cities = groupCentersByCity(centers);

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>{price}Dt <span>/Par personne</span></h3>
                <span className="tour__rating d-flex align-items-center">
                    <i className="ri-star-fill"></i>
                    {avgRating !== 0 ? avgRating : "Non noté"} ({reviews.length})
                </span>
            </div>

            <div className="booking__form">
                <h5>Informations</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Nom' id='fullName' required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder='Téléphone' id='phone' required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='Date de réservation' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='Invité(s)' id='guestSize' required onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <select id="selectedCenter" onChange={handleChange}>
                            <option value="">Sélectionner un centre</option>
                            {cities.map(city => (
                                <optgroup key={city.name} label={city.name}>
                                    {city.centers.map(center => (
                                        <option key={center.id} value={center.name}>{center.name}</option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </FormGroup>


                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>{price}Dt <i className="ri-close-line"></i> 1 personne</h5>
                        <span>{price}Dt</span>
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Frais de service <i className="ri-close-line"></i> 1 personne</h5>
                        <span>{serviceFree} DT</span>
                    </ListGroupItem>
                </ListGroup>

                <ListGroup>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>{totalAmount} Dt</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary__btn text-white w-100 mt-4' onClick={handleClick}>
                    Réserver maintenant
                </Button>
            </div>
        </div>
    );
}

export default Booking;
