import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';

import './block-1.scss';
import { Highlights } from '../../../types/highlight.types';

interface Block1Props {
    componentClass?: string;
    data?: Highlights;
}

export default function Variant1Block1({ componentClass = '', data }: Block1Props) {
    const componentClassName = `${componentClass}-variant1-block1`;

    if (!data) return null;

    const block1Data = data?.['layout-0-manchete-com-foto'];

    const image = {
        url: block1Data.img.url,
        alt: block1Data.title,
        width: block1Data.img.width,
        height: block1Data.img.height,
    };

    return (
        <div className={`${componentClassName}`}>
            <CardNewsHighlight
                aria-label='Notícia em destaque'
                resourceAlt='News highlight image'
                resourceHeight='306'
                resourcePosition='top'
                resourceType='image'
                resourceUrl={image.url}
                resourceWidth='544'
                tagHat={block1Data.hat}
                title={block1Data.title}
                url={block1Data.url}
            />
        </div>
    );
}
