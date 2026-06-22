import Block1 from './block-1/block-1';
import Block2 from './block-2/block-2';
import { LayoutVariantProps } from '../../types/layout.types';

export function LayoutVariant0({ componentClass, data }: LayoutVariantProps) {
    return (
        <div className={`${componentClass} is-variant-0`}>
            <Block1 componentClass={componentClass} data={data} />
            <Block2 componentClass={componentClass} data={data} />
        </div>
    );
}
