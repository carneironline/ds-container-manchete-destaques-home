import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';

import './block-1.scss';
import { Highlight } from '../../../types/highlight.types';
import { useComponentContext } from '../../../context/ComponentContext';

export default function Block1() {
    const { data, componentMainClass } = useComponentContext();
    const componentClassName = `${componentMainClass}-variant0-block1`;

    if (!data) return null;

    const highlights = data?.highlights;

    const block1Data = highlights?.['layout-0-manchete-com-foto'] as Highlight;

    const image = {
        url: block1Data.img?.url,
        alt: block1Data.title,
        width: block1Data.img?.width,
        height: block1Data.img?.height,
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
