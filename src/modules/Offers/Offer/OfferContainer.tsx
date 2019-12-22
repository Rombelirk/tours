import React, { FC } from 'react'
import Offer from './Offer'
import { IOffer } from '../../../interfaces/data'

interface Props {
    offer: IOffer
}

const OfferContainer: FC<Props> = ({ offer }) => {
    const onOfferSelect = () => {
        window.location.href = "http://holidu.com" + offer.detailsLink
    }

    return <Offer offer={offer} onOfferSelect={onOfferSelect} />
}

export default OfferContainer;