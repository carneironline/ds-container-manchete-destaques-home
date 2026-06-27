import './block-3.scss';
import { CardNewsHighlight } from '@nodo-ds/react-ui';
import { useComponentContext } from '@/context/ComponentContext';
import { useThumborUrl } from '@/hooks/useThumborUrl';
import { useEffect, useState } from 'react';
import { isMobile } from '@/utils/isMobile';
import { Variant1CardNewsDefault } from '@/components/variant-1/variant-1-card-news-default';

export default function Variant1Block3() {
    const { data, componentMainClass } = useComponentContext();
    if (!data) return null;

    const [resourcePosition, setResourcePosition] = useState<'top' | 'left'>('top');
    const getThumborUrl = useThumborUrl();
    const componentClassName = `${componentMainClass}-variant1-block3`;
    const highlights = data?.highlights;

    const dataMain = highlights?.['layout-1-destaque2-com-foto-1'];
    const imgWidth = '256';
    const imgHeight = '144';
    const dataMainImgUrl = getThumborUrl(dataMain.img, imgWidth, imgHeight);
    const dataDestaque1 = highlights?.['layout-1-destaque2-sem-foto-1'];
    const dataDestaque2 = highlights?.['layout-1-destaque2-sem-foto-2'];
    const dataDestaque3 = highlights?.['layout-1-destaque2-sem-foto-3'];

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
