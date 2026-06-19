import './block-4.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { isMobile } from '../../../utils/isMobile';
import { Filters } from '../../../types';
import { Highlights } from '../../../types/highlight.types';
import { Divider } from '@nodo-ds/react-ui';

interface Block4Props {
    componentClass?: string;
    filters?: Filters;
    data?: Highlights;
}

function getCardsData(data: Highlights) {
    return Array.from({ length: 5 }, (_, i) => {
        const item = data[`layout-0-materia-com-foto-${i + 1}`];

        return {
            title: item?.title,
            url: item?.url,
            hat: item?.hat,
            subtitle: item?.subtitle,
            image: { url: item?.img?.url },
        };
    });
}

export default function Variant1Block4({ componentClass = '', data }: Block4Props) {
    const componentClassName = `${componentClass}-variant1-block4`;

    if (!data) return null;

    const cardsData = getCardsData(data);

    const image = {
        width: isMobile() ? '480' : '208',
        height: isMobile() ? '270' : '117',
    };

    return (
        <div className={`${componentClassName} `}>
            {cardsData.map((card, index) => (
                <CardNewsDefault
                    key={index}
                    resourceAlt={card.title}
                    resourcePosition='top'
                    resourceType='image'
                    resourceUrl={card.image.url}
                    resourceWidth={image.width}
                    resourceHeight={image.height}
                    subtitle={card.subtitle}
                    tagHat={card.hat}
                    title={card.title}
                    url={card.url}
                />
            ))}
        </div>
    );
}
