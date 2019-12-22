import React, { FC } from 'react'
import { withRouter } from 'react-router';
import Offer from './Offer'
import { RouteComponentProps } from 'react-router'
import { IOffer } from '../../../interfaces/data'

interface Props extends RouteComponentProps {
    offer: IOffer
}

const OfferContainer: FC<Props> = ({ history, ...props }) => {
    const onOfferSelect = id => {
        history.push(`/details/${id}`)
    }

    return <Offer {...props} onOfferSelect={onOfferSelect} />
}

export default withRouter(OfferContainer)