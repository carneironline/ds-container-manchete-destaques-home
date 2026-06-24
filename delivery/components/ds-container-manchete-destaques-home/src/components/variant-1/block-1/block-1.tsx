import { CardNewsHighlight } from '@nodo-ds/react-ui/card-news-highlight';
import { Highlight } from '../../../types/highlight.types';
import { useComponentContext } from '../../../context/ComponentContext';
import { useThumborUrl } from '../../../hooks/useThumborUrl';

import './block-1.scss';

export default function Variant1Block1() {
    const { data, componentMainClass } = useComponentContext();
    if (!data) return null;

    const getThumborUrl = useThumborUrl();
    const componentClassName = `${componentMainClass}-variant1-block1`;

    const block1Data = data?.highlights?.['layout-1-manchete-com-foto'] as Highlight;
    const imgWidth = '528';
    const imgHeight = '297';
    const block1Img = getThumborUrl(block1Data.img, imgWidth, imgHeight);

    return (
        <div className={`${componentClassName}`}>
            <CardNewsHighlight
                aria-label='Notícia em destaque'
                resourceAlt='News highlight image'
                resourceHeight={imgHeight}
                resourcePosition='top'
                resourceType='image'
                resourceUrl={block1Img}
                resourceWidth={imgWidth}
                tagHat={block1Data.hat}
                title={block1Data.title}
                url={block1Data.url}
            />
        </div>
    );
}
