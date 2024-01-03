import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc: "Lorem ipsum sdfsd fsvfdv sdds sfgs sefsg.",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guid",
        desc: "Lorem ipsum sdfsd fsvfdv sdds sfgs sefsg.",
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc: "Lorem ipsum sdfsd fsvfdv sdds sfgs sefsg.",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=>(
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>))
  }
  </>
}

export default ServiceList