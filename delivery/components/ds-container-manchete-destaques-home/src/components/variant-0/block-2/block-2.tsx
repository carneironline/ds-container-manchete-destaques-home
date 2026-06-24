import './block-2.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { CardNewsMain } from '@nodo-ds/react-ui/card-news-main';
import { Divider } from '@nodo-ds/react-ui/divider';
import { Highlight } from '../../../types/highlight.types';
import { useComponentContext } from '../../../context/ComponentContext';

export default function Block2() {
    const { data, componentMainClass } = useComponentContext();
    const componentClassName = `${componentMainClass}-variant0-block2`;

    if (!data) return null;

    const highlights = data?.highlights;
    const dataMain = highlights?.['layout-0-manchete-sem-foto'] as Highlight;
    const dataDestaque1 = highlights?.['layout-0-destaque-sem-foto-1'] as Highlight;
    const dataDestaque2 = highlights?.['layout-0-destaque-sem-foto-2'] as Highlight;

    return (
        <div className={`${componentClassName}`}>
            <div className={`${componentClassName}__col1`}>
                <CardNewsMain
                    subtitle={dataMain?.subtitle}
                    tagHat={dataMain?.hat}
                    tagHatVariant='default'
                    title={dataMain?.title}
                    url={dataMain?.url}
                />

                <Divider />

                <div className={`${componentClassName}__col1-bottom`}>
                    <CardNewsDefault
                        resourceType='none'
                        tagHat={dataDestaque1?.hat}
                        title={dataDestaque1?.title}
                        url={dataDestaque1?.url}
                    />

                    <CardNewsDefault
                        resourceType='none'
                        tagHat={dataDestaque2?.hat}
                        title={dataDestaque2?.title}
                        url={dataDestaque2?.url}
                    />
                </div>
            </div>
        </div>
    );
}
