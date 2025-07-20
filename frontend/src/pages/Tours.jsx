import React, {useState, useEffect} from 'react'
import CommonSection from '../shared/CommonSection'

import "../styles/tour.css"
import {Container,Row,Col} from 'reactstrap'

import tourData from '../assets/data/tours'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'

const Tours = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    useEffect(()=>{
        const pages = Math.ceil(5/4)
        setPageCount(pages)
    },[page])

    return(
        <>
            <CommonSection  title={"Tous les services"}/>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <SearchBar />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>
                    <Row>
                        {
                            tourData?.map(tour => (
                                <Col lg='3' className='mb-4' key={tour.id}>
                                    <TourCard tour={tour} />
                                </Col>
                            ))
                        }

                        <Col lg='12'>
                            <div className="pagination d-flex align-items-center 
                            justify-content-center mt-4 gap-3">
                                {[...Array(pageCount)].map((_, number) => ( // Utiliser un underscore _ pour ignorer l'élément, puis utiliser le nombre comme index
                                    <span 
                                        key={number + 1} 
                                        onClick={() => setPage(number)}
                                        className={page === number ? "active__page" : ""}
                                    >
                                            {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Newsletter />
        </>
    )
}

export default Tours