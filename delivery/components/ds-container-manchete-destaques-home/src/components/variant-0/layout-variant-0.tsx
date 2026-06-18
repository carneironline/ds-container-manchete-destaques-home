import Block1 from './block-1/block-1';
import Block2 from './block-2/block-2';
import Block3 from './block-3/block-3';
import { LayoutVariantProps } from '../../types/layout.types';

export function LayoutVariant0({ componentClass, data }: LayoutVariantProps) {
    const block1Data = data?.['layout-0-manchete-com-foto'];

    return (
        <div className={`${componentClass} is-variant-0`}>
            <Block1 componentClass={componentClass} data={block1Data} />
            <Block2 componentClass={componentClass} data={data} />
            <Block3 componentClass={componentClass} data={data} />
        </div>
    );
}
