import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';
import { CardVideo } from '@nodo-ds/react-ui/card-video';
import React from 'react';

import './block-1.scss';

interface Block1Props {
    className?: string;
    componentClass?: string;
}

export default function Block1({ className = '', componentClass = '' }: Block1Props) {
    const componentClassName = `${componentClass}-block1`;

    return (
        <div className={`${componentClassName} ${className}`}>
            <CardNewsHighlight
                aria-label='Notícia em destaque'
                resourceAlt='News highlight image'
                resourceHeight='306'
                resourcePosition='top'
                resourceType='image'
                resourceUrl='https://picsum.photos/544/306'
                resourceWidth='544'
                tagHat='Corrida tecnológica'
                title='Drones "kamikazes", I.A. para atacar alvos, defesa nuclear: forças armadas do Brasil se preparam para a guerra moderna'
                url='https://example.com/news'
            />
        </div>
    );
}
