import './block-2.scss';
import { Highlight } from '../../../types/highlight.types';
import { CardNewsHighlight } from '@nodo-ds/react-ui';
import { useComponentContext } from '../../../context/ComponentContext';
import { useThumborUrl } from '../../../hooks/useThumborUrl';
import { isMobile } from '../../../utils/isMobile';
import { useEffect, useState } from 'react';
import { Variant1CardNewsDefault } from '../variant-1-card-news-default';

export default function Variant1Block2() {
    const { data, componentMainClass } = useComponentContext();
    const [resourcePosition, setResourcePosition] = useState<'top' | 'left'>('top');
    if (!data) return null;

    const getThumborUrl = useThumborUrl();
    const componentClassName = `${componentMainClass}-variant1-block2`;
    const highlights = data?.highlights;

    const dataMain = highlights?.['layout-1-destaque1-com-foto-1'] as Highlight;
    const imgWidth = '256';
    const imgHeight = '144';
    const dataMainImgUrl = getThumborUrl(dataMain.img, imgWidth, imgHeight);
    const dataDestaque1 = highlights?.['layout-1-destaque1-sem-foto-1'] as Highlight;
    const dataDestaque2 = highlights?.['layout-1-destaque1-sem-foto-2'] as Highlight;
    const dataDestaque3 = highlights?.['layout-1-destaque1-sem-foto-3'] as Highlight;

    useEffect(() => {
        setResourcePosition(isMobile() ? 'left' : 'top');
    }, []);

    return (
        <div className={`${componentClassName}`}>
            <CardNewsHighlight
                aria-label='Notícia em destaque'
                resourceAlt={dataMain.title}
                resourceHeight={imgHeight}
                resourcePosition={resourcePosition}
                resourceType='image'
                resourceUrl={dataMainImgUrl}
                resourceWidth={imgWidth}
                tagHat={dataMain.hat}
                title={dataMain.title}
                url={dataMain.url}
            />

            <Variant1CardNewsDefault data={dataDestaque1} />
            <Variant1CardNewsDefault data={dataDestaque2} />
            <Variant1CardNewsDefault data={dataDestaque3} />
        </div>
    );
}
