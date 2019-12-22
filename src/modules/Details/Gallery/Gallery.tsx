import React, { FC, useState } from 'react';
import { Container, MainImage, PreviewsContainer, Preview } from './Gallery.styles'
import { hot } from 'react-hot-loader'
import FixedHeightImage from '../../../atoms/FixedHeightImage/FixedHeightImage'


interface Props {
    photos: string[]
}

const Gallery: FC<Props> = ({ photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
    const onPhotoClick = (id: number) => {
        setCurrentPhotoIndex(id)
    }
    return (<Container>
        <MainImage>
            <FixedHeightImage zoomOnHover={false} height={700} src={photos[currentPhotoIndex]} />

        </MainImage>
        <PreviewsContainer>
            {
                photos.map((photo, index) => <Preview>
                    <FixedHeightImage id={index} onPhotoClick={onPhotoClick} zoomOnHover={false} height={60} src={photo} />
                </Preview>)
            }
        </PreviewsContainer>
    </Container>)
}

export default hot(module)(Gallery);