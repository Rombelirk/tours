import React, { FC, FormEvent } from 'react';
import { Container, Image } from './FixedHeightImage.styles';

type T = string | number;

interface Props {
    src: string;
    zoomOnHover: boolean;
    height: number;
    onPhotoClick?: (id: number) => void;
    id?: number;
}

const FixedHeightImage: FC<Props> = ({ src, zoomOnHover, height, id, onPhotoClick }) => {
    const onClick = () => {
        if (onPhotoClick && id) {
            onPhotoClick(id)
        }

    }
    return (<Container>
        <Image height={height} onClick={onClick} zoomOnHover={zoomOnHover} src={src} />
    </Container>);
};

export default FixedHeightImage;
