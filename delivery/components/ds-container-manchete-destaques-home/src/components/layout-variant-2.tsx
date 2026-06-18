import React from 'react';
import Block1 from './block-1/block-1';
import Block2 from './block-2/block-2';
import Block3 from './block-3/block-3';

interface LayoutVariant2Props {
    componentClass?: string;
}

export function LayoutVariant2({ componentClass }: LayoutVariant2Props) {
    return <div className={`${componentClass} is-layout-2`}>Variant 2</div>;
}
