import React, { FC } from 'react';
import { hot } from 'react-hot-loader'
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Gallery from './Gallery/Gallery'
import { Container } from './Details.styles'
import Map from './Map/Map'
import { IExtendedOffer } from '../../interfaces/data'
import Info from './Info/Info'

interface Props {
    offer: IExtendedOffer
}

const Details: FC<Props> = ({ offer }) => {
    return (
        <Container>

            <Info offer={offer} />
            <Gallery photos={offer.photos.map(photo => photo.l)} />
            <Map location={offer.location} zoom={14} />
        </Container>)
}

export default hot(module)(Details);