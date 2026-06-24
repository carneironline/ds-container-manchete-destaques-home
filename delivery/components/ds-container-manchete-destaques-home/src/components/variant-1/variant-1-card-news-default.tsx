import { CardNewsDefault, Divider } from '@nodo-ds/react-ui';
import { Highlight } from '../../types/highlight.types';

interface Variant1CardNewsDefaultProps {
    data: Highlight;
}

export function Variant1CardNewsDefault({ data }: Variant1CardNewsDefaultProps) {
    if (!data?.hat || !data?.title || !data?.url) return null;

    return (
        <>
            <Divider />

            <CardNewsDefault
                resourceType='none'
                tagHat={data.hat}
                title={data.title}
                url={data.url}
            />
        </>
    );
}
