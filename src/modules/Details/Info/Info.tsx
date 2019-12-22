import React, { FC } from 'react';
import { IExtendedOffer } from '../../../interfaces/data'
import { Container, Title } from './Info.styles'

interface Props {
    offer: IExtendedOffer
}

const Info: FC<Props> = ({ offer }) => {
    return <Container>
        <Title>
            {offer.details.name}
        </Title>
        {offer.details.description}
        <br />
        {offer.details.bedroomsCount}    <br />
        {offer.details.guestsCount}    <br />
        {offer.details.apartmentTypeTitle}    <br />
        {offer.details.apartmentType}    <br />
        {offer.price.ccy}    <br />
        {offer.price.total}    <br />
        {offer.price.nights}    <br />
        {offer.rating.count}    <br />
        {offer.rating.value}    <br />
    </Container>
}

export default Info;

