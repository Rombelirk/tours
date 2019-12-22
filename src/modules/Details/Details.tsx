import React, { FC } from 'react';
import { IOffer } from '../../interfaces/data'
import { hot } from 'react-hot-loader'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import FixedHeightImage from '../../atoms/FixedHeightImage/FixedHeightImage'
import 'pure-react-carousel/dist/react-carousel.es.css';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Gallery from './Gallery/Gallery'
import { Container, Title } from './Details.styles'
import Map from './Map/Map'





const Details = ({ offer }) => {
    console.log(offer, "offer");
    if (!offer.photos || !offer.location) {
        return null
    }

    return (<Container>
        <Title>{offer.details.name}</Title>
        <Gallery photos={offer.photos.map(photo => photo.l)} />
        <Map location={offer.location} zoom={14} />

    </Container>)
}

export default hot(module)(Details);