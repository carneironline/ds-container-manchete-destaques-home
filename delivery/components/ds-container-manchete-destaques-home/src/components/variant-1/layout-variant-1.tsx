import Variant1Block1 from './block-1/block-1';
import Variant1Block2 from './block-2/block-2';
import Variant1Block3 from './block-3/block-3';
import Variant1Block4 from './block-4/block-4';
import { LayoutVariantProps } from '../../types/layout.types';

export function LayoutVariant1({ componentClass, data }: LayoutVariantProps) {
    return (
        <div className={`${componentClass} is-variant-1`}>
            <Variant1Block1 componentClass={componentClass} data={data} />
            <Variant1Block2 componentClass={componentClass} data={data} />
            <Variant1Block3 componentClass={componentClass} data={data} />
            <Variant1Block4 componentClass={componentClass} data={data} />
        </div>
    );
}
