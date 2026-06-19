import './block-2.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { CardNewsMain } from '@nodo-ds/react-ui/card-news-main';
import { Divider } from '@nodo-ds/react-ui/divider';
import { Highlights } from '../../../types/highlight.types';
import { CardNewsHighlight } from '@nodo-ds/react-ui';

interface Block2Props {
    componentClass?: string;
    data?: Highlights;
}

export default function Variant1Block2({ componentClass = '', data }: Block2Props) {
    const componentClassName = `${componentClass}-variant1-block2`;

    if (!data) return null;

    const dataMain = data?.['layout-1-destaque1-com-foto-1'];
    const dataDestaque1 = data?.['layout-1-destaque1-sem-foto-1'];
    const dataDestaque2 = data?.['layout-1-destaque1-sem-foto-2'];

    return (
        <div className={`${componentClassName}`}>
            <CardNewsHighlight
                aria-label='Notícia em destaque'
                resourceAlt={dataMain.title}
                resourceHeight='144'
                resourcePosition='top'
                resourceType='image'
                resourceUrl={dataMain.img.url}
                resourceWidth='256'
                tagHat={dataMain.hat}
                title={dataMain.title}
                url={dataMain.url}
            />

            <Divider />

            <CardNewsDefault
                resourceType='none'
                tagHat={dataDestaque1?.hat}
                title={dataDestaque1?.title}
                url={dataDestaque1?.url}
            />

            <Divider />

            <CardNewsDefault
                resourceType='none'
                tagHat={dataDestaque2?.hat}
                title={dataDestaque2?.title}
                url={dataDestaque2?.url}
            />
        </div>
    );
}
