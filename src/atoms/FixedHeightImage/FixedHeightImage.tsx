import React, { FC, FormEvent } from 'react';
import { Container, Image } from './FixedHeightImage.styles';

interface Props {
    src: string;
}

const FixedHeightImage: FC<Props> = ({ src }) => {
    return (<Container>
        <Image src={src} />
    </Container>);
};

export default FixedHeightImage;
