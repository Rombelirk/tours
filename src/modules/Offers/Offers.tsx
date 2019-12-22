import React, { FC } from 'react';
import { IData } from '../../interfaces/data'
import Offer from './Offer/OfferContainer'
import { Container } from './Offers.styles'

interface Props {
    data: IData
}

const Offers: FC<Props> = ({ data }) => {
    return <Container>{data.offers.map((offer) =>
        <Offer offer={offer} />)}</Container>;
};

export default Offers;
