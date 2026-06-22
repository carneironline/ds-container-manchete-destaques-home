import './block-2.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { CardNewsMain } from '@nodo-ds/react-ui/card-news-main';
import { Divider } from '@nodo-ds/react-ui/divider';
import { Highlights } from '../../../types/highlight.types';

interface Block2Props {
    componentClass?: string;
    data?: Highlights;
}

export default function Block2({ componentClass = '', data }: Block2Props) {
    const componentClassName = `ds-container-manchete-destaques-home-variant0-block2`;

    if (!data) return null;

    const dataMain = data?.['layout-0-manchete-sem-foto'];
    const dataDestaque1 = data?.['layout-0-destaque-sem-foto-1'];
    const dataDestaque2 = data?.['layout-0-destaque-sem-foto-2'];

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
