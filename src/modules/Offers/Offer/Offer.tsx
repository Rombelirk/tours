import React, { FC } from 'react';
import { IOffer } from '../../../interfaces/data'
import { Card } from '../../../atoms/Card/Card.styled'
import { Container, Info, Name, Rating, StarsContainer, VotesCount, StarImage, PriceContainer, Price, NightsCount } from './Offer.styles'
import FixedHeightImage from '../../../atoms/FixedHeightImage/FixedHeightImage'
import { hot } from 'react-hot-loader'
import halfStar from '../../../images/half.png'
import fullStar from '../../../images/full.png'
import emptyStar from '../../../images/empty.png'



interface Props {
    offer: IOffer;
    onOfferSelect: (id: string) => void;
}

const starsToImgMapping = {
    one: (key) => <StarImage key={key} src={fullStar} />,
    half: (key) => <StarImage key={key} src={halfStar} />,
    empty: (key) => <StarImage key={key} src={emptyStar} />
}


const Offer: FC<Props> = ({ offer, onOfferSelect }) => {
    const photo = offer.photos[0] ? offer.photos[0].t : "";

    const getStars = (value) => {
        const fifth = 5 / 100 * value;
        const roundedFifth = Math.round(fifth * 2) / 2;
        const fullStars = Math.floor(roundedFifth);
        const halfStar = roundedFifth % fullStars > 0;
        let result = Array(fullStars).fill("one");
        if (halfStar && result.length < 5) result.push('half')
        const rest = 5 - result.length;
        result = result.concat(new Array(rest).fill("empty"))
        return result;
    }


    return <Card>
        <Container onClick={e => onOfferSelect(offer.id)}>
            {<FixedHeightImage src={photo} />}
            <Info>
                <Name>
                    {
                        offer.details.name
                    }
                </Name>
                <Rating>
                    <StarsContainer>
                        {
                            getStars(offer.rating.value).map((star, index) => starsToImgMapping[star](index))
                        }
                    </StarsContainer>
                    <VotesCount>
                        {
                            `(${offer.rating.count} votes)`
                        }
                    </VotesCount>
                </Rating>
                <PriceContainer>
                    <Price>
                        {offer.price.total + " " + offer.price.currency}
                    </Price>
                    <NightsCount>
                        {
                            offer.price.nights + " nights"
                        }
                    </NightsCount>

                </PriceContainer>


            </Info>
        </Container>
    </Card>;
};

export default hot(module)(Offer);
