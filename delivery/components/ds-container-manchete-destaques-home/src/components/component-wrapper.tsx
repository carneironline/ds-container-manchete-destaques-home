import React from 'react';
import { LayoutVariant1 } from './layout-variant-1';
import { LayoutVariant2 } from './layout-variant-2';
import { LayoutVariantProps } from '../types/layout.types';

import './component-wrapper.scss';

function getLayoutVariant(context?: Record<string, any>): React.ComponentType<LayoutVariantProps> {
    if (context?.layoutVariant === 'variant-2') {
        return LayoutVariant2;
    }

    return LayoutVariant1;
}

interface ComponentWrapperProps {
    context?: Record<string, any> | undefined;
}

export function ComponentWrapper({ context }: ComponentWrapperProps) {
    const componentClass = 'ds-container-manchete-destaques-home';
    const Layout = getLayoutVariant(context);

    console.log(context);

    return (
        <>
            <Layout componentClass={componentClass} />
        </>
    );
}
