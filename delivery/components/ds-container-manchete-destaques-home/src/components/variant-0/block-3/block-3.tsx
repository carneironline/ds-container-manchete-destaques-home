import './block-3.scss';
import { CardNewsDefault } from '@nodo-ds/react-ui/card-news-default';
import { isMobile } from '../../../utils/isMobile';
import { Filters } from '../../../types';
import { Highlights } from '../../../types/highlight.types';

interface Block3Props {
    className?: string;
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

export default function Block3({ className = '', componentClass = '', data }: Block3Props) {
    const componentClassName = `${componentClass}-block3`;

    if (!data) return null;

    const cardsData = getCardsData(data);

    const image = {
        width: isMobile() ? '480' : '208',
        height: isMobile() ? '270' : '117',
    };

    return (
        <div className={`${componentClassName} ${className}`}>
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
