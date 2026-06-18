import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';

import './block-1.scss';
import { Highlight } from '../../../types/highlight.types';
import { Filters } from '../../../types';

interface Block1Props {
    className?: string;
    componentClass?: string;
    data?: Highlight | null;
}

export default function Block1({ className = '', componentClass = '', data = null }: Block1Props) {
    const componentClassName = `${componentClass}-block1`;

    if (!data) return null;

    const image = {
        url: data.img.url,
        alt: data.title,
        width: data.img.width,
        height: data.img.height,
    };

    return (
        <div className={`${componentClassName} ${className}`}>
            <CardNewsHighlight
                aria-label='Notícia em destaque'
                resourceAlt='News highlight image'
                resourceHeight='306'
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth='544'
                tagHat={data.hat}
                title={data.title}
                url={data.url}
            />
        </div>
    );
}
