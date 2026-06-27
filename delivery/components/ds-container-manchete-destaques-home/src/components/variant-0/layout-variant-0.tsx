import Block1 from '@/components/variant-0/block-1/block-1';
import Block2 from '@/components/variant-0/block-2/block-2';
import { LayoutVariantProps } from '@/types/layout.types';

/*
 * 1 manchete sem foto, dois destaques sem foto, 1 destaque com foto
 */
export function LayoutVariant0({ componentClass, data }: LayoutVariantProps) {
    return (
        <div className={`${componentClass} is-variant-0`}>
            <Block1 />
            <Block2 />
        </div>
    );
}
