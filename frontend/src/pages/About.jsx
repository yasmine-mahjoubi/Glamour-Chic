import React, { useState } from 'react';
import { Container, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../styles/about.css';
import centers from '../assets/data/centres';

const About = () => {
    const [selectedRegion, setSelectedRegion] = useState('Tout');
    const [searchQuery, setSearchQuery] = useState('');
    const [modal, setModal] = useState(false);
    const [selectedCenter, setSelectedCenter] = useState(null);

    const toggleModal = () => setModal(!modal);

    const handleRegionChange = (region) => {
        setSelectedRegion(region);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDescriptionClick = (center) => {
        setSelectedCenter(center);
        toggleModal();
    };

    const filteredCenters = centers.filter(center =>
        (center.city === selectedRegion || selectedRegion === 'Tout') &&
        center.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <section className="about">
                <Container>
                    <h3 className="title">Nos centres : </h3>
                    <div className="about__filter">
                        <div className="filter__btns">
                            <ul>
                                <li className={`filter__item ${selectedRegion === 'Tout' ? 'selected' : ''}`} onClick={() => handleRegionChange('Tout')}>
                                    Tout
                                </li>
                                <li className={`filter__item ${selectedRegion === 'Ariana' ? 'selected' : ''}`} onClick={() => handleRegionChange('Ariana')}>
                                    Ariana
                                </li>
                                <li className={`filter__item ${selectedRegion === 'Manouba' ? 'selected' : ''}`} onClick={() => handleRegionChange('Manouba')}>
                                    Manouba
                                </li>
                                <li className={`filter__item ${selectedRegion === 'Ben Arous' ? 'selected' : ''}`} onClick={() => handleRegionChange('Ben Arous')}>
                                    Ben Arous
                                </li>
                                <li className={`filter__item ${selectedRegion === 'Tunis' ? 'selected' : ''}`} onClick={() => handleRegionChange('Tunis')}>
                                    Tunis
                                </li>
                            </ul>
                        </div>
                        <div className="box">
                            <input type="checkbox" id='check' />
                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="Rechercher par nom du centre..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <label htmlFor="check" className='icon'>
                                    <i class="ri-search-line"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <Card>
                        <CardBody>
                            <div className="about__centers d-flex flex-wrap justify-content-between">
                                {filteredCenters.map((center, index) => (
                                    <div key={index} className="center mb-4">
                                        <img src={center.image} alt={center.name} />
                                        <p>{center.name}</p>
                                        <button className="description__button" onClick={() => handleDescriptionClick(center)}>Description</button>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>

            <Modal isOpen={modal} toggle={toggleModal} className="custom-modal">
                <ModalHeader toggle={toggleModal}>{selectedCenter && selectedCenter.name}</ModalHeader>
                <ModalBody>
                    {selectedCenter && selectedCenter.description}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleModal}>Fermer</Button>
                </ModalFooter>

            </Modal>
        </>
    );
};

export default About;
