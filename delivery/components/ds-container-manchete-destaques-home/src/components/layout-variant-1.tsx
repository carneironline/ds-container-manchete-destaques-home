import React from 'react';
import Block1 from './block-1/block-1';
import Block2 from './block-2/block-2';
import Block3 from './block-3/block-3';
import { LayoutVariantProps } from '../types/layout.types';

export function LayoutVariant1({ componentClass }: LayoutVariantProps) {
    return (
        <div className={`${componentClass} is-layout-1`}>
            <Block1 componentClass={componentClass} />
            <Block2 componentClass={componentClass} />
            <Block3 componentClass={componentClass} />
        </div>
    );
}
