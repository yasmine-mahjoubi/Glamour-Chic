import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import guideImg from '../assets/images/guide.png'
import customazationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: guideImg,
        title: "Meilleur guide de services",
        desc: "Votre guide ultime pour les meilleurs services, conçu pour répondre à tous vos besoins en un seul endroit",
    },
    {
        imgUrl: customazationImg,
        title: "Personnalisation",
        desc: "Explorez notre service de personnalisation pour créer des expériences sur mesure qui reflètent votre style unique",
    },
]

const ServiceList = () => {
    return(
        <>
            {
                servicesData.map((item,index)=>
                    <Col lg='3' key={index}>
                        <ServiceCard item={item} />
                    </Col>
                )
            }
        </>
    )
}

export default ServiceList