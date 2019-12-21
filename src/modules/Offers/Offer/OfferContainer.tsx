import React from 'react'
import { withRouter } from 'react-router';
import Offer from './Offer'

const OfferContainer = ({ history, ...props }) => {
    const onOfferSelect = id => {
        history.push(`/details/${id}`)
    }
    //@ts-ignore
    return <Offer {...props} onOfferSelect={onOfferSelect} />
}

export default withRouter(OfferContainer)