import React, { createContext, useContext } from 'react';
import { Filters } from '@/types';

interface ComponentContextValue {
    context?: Record<string, any>;
    channel?: string;
    filters?: Filters;
    data?: Record<string, any>;
    componentMainClass?: string;
    tenantId?: string;
    client?: string;
}

const ComponentContext = createContext<ComponentContextValue>({});

interface ComponentContextProviderProps extends ComponentContextValue {
    children: React.ReactNode;
}

export function ComponentContextProvider({
    children,
    context,
    channel,
    filters,
    data,
    tenantId,
    client,
}: ComponentContextProviderProps) {
    const value: ComponentContextValue = {
        context,
        channel,
        filters,
        data,
        componentMainClass: 'ds-container-manchete-destaques-home',
        tenantId,
        client,
    };

    return <ComponentContext.Provider value={value}>{children}</ComponentContext.Provider>;
}

export function useComponentContext() {
    return useContext(ComponentContext);
}
