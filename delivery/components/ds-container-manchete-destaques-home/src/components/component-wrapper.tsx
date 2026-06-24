import React from 'react';
import { LayoutVariant0 } from './variant-0/layout-variant-0';
import { LayoutVariant1 } from './variant-1/layout-variant-1';
import { LayoutVariantProps } from '../types/layout.types';

import { Filters } from '../types';
import { ComponentContextProvider } from '../context/ComponentContext';

import './component-wrapper.scss';

const LAYOUT_VARIANTS: Record<number, React.ComponentType<LayoutVariantProps>> = {
    0: LayoutVariant0,
    1: LayoutVariant1,
};

function getLayoutVariant({ variant = 0 }: { variant?: number }): React.ComponentType<LayoutVariantProps> {
    return LAYOUT_VARIANTS[variant] ?? LayoutVariant0;
}

interface ComponentWrapperProps {
    context?: Record<string, any> | undefined;
    channel?: string;
    filters?: Filters;
    data?: Record<string, any>;
    client?: string;
}

export function ComponentWrapper({ context, channel, filters, data, client }: ComponentWrapperProps) {
    const componentClass = 'ds-container-manchete-destaques-home';
    const tenantId = context?.api_content?.tenantId || '';
    const componentBody = data?.componentBody;

    const Layout = getLayoutVariant({
        variant: (componentBody?.selectedOptionSavedId as number) || 0,
    });

    return (
        <ComponentContextProvider
            context={context}
            channel={channel}
            filters={filters}
            data={componentBody}
            tenantId={tenantId}
            client={client}
        >
            <Layout
                componentClass={componentClass}
                data={componentBody?.highlights}
                filters={filters}
                tenantId={tenantId}
            />
        </ComponentContextProvider>
    );
}
