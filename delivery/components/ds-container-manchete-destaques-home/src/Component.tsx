import React, { type ComponentType, type FC, type ReactElement } from 'react';
import { Filters } from '@/types';

import '@/styles/style.scss';
import { ComponentWrapper } from '@/components/component-wrapper';

interface ComponentProps {
    ScopeComponent: ComponentType<any>;
    context?: Record<string, any>;
    channel?: string;
    filters?: Filters;
    data?: Record<string, any>;
    client?: string;
    [key: string]: unknown;
}

const Component: FC<ComponentProps> = ({
    context,
    channel,
    filters,
    data,
    client,
}: ComponentProps): ReactElement => {
    return (
        <>
            {/* <Helmet>
      <title>Delivery Component Example</title>
    </Helmet> */}

            {/* <ScopeComponent scope="scope" /> */}
            <ComponentWrapper
                context={context}
                channel={channel}
                filters={filters}
                data={data}
                client={client}
            />
        </>
    );
};

export default Component;
