import React, { FC, useState } from 'react';
import { IOffer } from '../../interfaces/data'
import { hot } from 'react-hot-loader'
import { Carousel } from 'react-responsive-carousel'
import FixedHeightImage from '../../atoms/FixedHeightImage/FixedHeightImage'

interface Props {
    offer: IOffer
}

const Details: FC<Props> = ({ offer }) => {
    console.log(offer, "offer");
    if (!offer.photos) {
        return null
    }
    return <div>

        {
            offer.photos.map(photo => <FixedHeightImage src={photo.t}></FixedHeightImage>)
        }
    </div>
}

export default hot(module)(Details);