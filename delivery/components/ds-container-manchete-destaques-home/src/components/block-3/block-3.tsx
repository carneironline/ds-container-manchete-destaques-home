import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';
import { CardVideo } from '@nodo-ds/react-ui/card-video';
import React from 'react';

import './block-3.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { isMobile } from '../../utils/isMobile';

interface Block3Props {
    className?: string;
    componentClass?: string;
}

function getImageDimensions() {}

export default function Block3({ className = '', componentClass = '' }: Block3Props) {
    const componentClassName = `${componentClass}-block3`;

    const image = {
        width: isMobile() ? '480' : '208',
        height: isMobile() ? '270' : '117',
        url: isMobile() ? 'https://picsum.photos/480/270' : 'https://picsum.photos/208/117',
        alt: 'News image',
    };

    return (
        <div className={`${componentClassName} ${className}`}>
            <CardNewsDefault
                resourceAlt={image.alt}
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth={image.width}
                resourceHeight={image.height}
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a pulvinar justo. In semper, velit vel scelerisque vulputate, nibh sem porttitor lectus, vel tincidunt magna sapien eget ipsum.'
                tagHat='Tag hat'
                title='Lorem ipsum sit amet, consectetur.'
                url='https://example.com/news'
            />

            <CardNewsDefault
                resourceAlt={image.alt}
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth={image.width}
                resourceHeight={image.height}
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a pulvinar justo. In semper, velit vel scelerisque vulputate, nibh sem porttitor lectus, vel tincidunt magna sapien eget ipsum.'
                tagHat='Tag hat'
                title='Lorem ipsum sit amet, consectetur.'
                url='https://example.com/news'
            />

            <CardNewsDefault
                resourceAlt={image.alt}
                resourceHeight={image.height}
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth={image.width}
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a pulvinar justo. In semper, velit vel scelerisque vulputate, nibh sem porttitor lectus, vel tincidunt magna sapien eget ipsum.'
                tagHat='Tag hat'
                title='Lorem ipsum sit amet, consectetur.'
                url='https://example.com/news'
            />

            <CardNewsDefault
                resourceAlt={image.alt}
                resourceHeight={image.height}
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth={image.width}
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a pulvinar justo. In semper, velit vel scelerisque vulputate, nibh sem porttitor lectus, vel tincidunt magna sapien eget ipsum.'
                tagHat='Tag hat'
                title='Lorem ipsum sit amet, consectetur.'
                url='https://example.com/news'
            />

            <CardNewsDefault
                resourceAlt={image.alt}
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth={image.width}
                resourceHeight={image.height}
                subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a pulvinar justo. In semper, velit vel scelerisque vulputate, nibh sem porttitor lectus, vel tincidunt magna sapien eget ipsum.'
                tagHat='Tag hat'
                title='Lorem ipsum sit amet, consectetur.'
                url='https://example.com/news'
            />
        </div>
    );
}
