import React from 'react';
import { LayoutVariant0 } from './variant-0/layout-variant-0';
import { LayoutVariant1 } from './variant-1/layout-variant-1';
import { LayoutVariantProps } from '../types/layout.types';

import './component-wrapper.scss';
import { getComponentBody } from '../utils/getComponentBody';
import { Filters } from '../types';

function getLayoutVariant({ variant = 0 }: { variant?: number }): React.ComponentType<LayoutVariantProps> {
    if (variant === 1) {
        return LayoutVariant1;
    }

    return LayoutVariant0;
}

interface ComponentWrapperProps {
    context?: Record<string, any> | undefined;
    filters?: Filters;
}

export function ComponentWrapper({ context, filters }: ComponentWrapperProps) {
    const componentClass = 'ds-container-manchete-destaques-home';
    const componentBody = getComponentBody(context, 'ds-container-manchete-destaques-home');
    const Layout = getLayoutVariant({
        variant: (componentBody?.selectedOptionSavedId as number) || 0,
    });
    const tenantId = context?.api_content?.tenantId || '';

    return (
        <>
            <Layout
                componentClass={componentClass}
                data={componentBody?.highlights}
                filters={filters}
                tenantId={tenantId}
            />
        </>
    );
}
