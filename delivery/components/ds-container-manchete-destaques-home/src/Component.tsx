import React, { type ComponentType, type FC, type ReactElement } from 'react';
import { Filters } from './types';

import './styles/style.scss';
import { ComponentWrapper } from './components/component-wrapper';

interface ComponentProps {
    ScopeComponent: ComponentType<any>;
    context?: Record<string, any>;
    channel?: string;
    filters?: Filters;
    [key: string]: unknown;
}

const Component: FC<ComponentProps> = ({
    ScopeComponent,
    context,
    channel,
    filters,
    ...rest
}: ComponentProps): ReactElement => (
    <>
        {/* <Helmet>
      <title>Delivery Component Example</title>
    </Helmet> */}

        {/* <ScopeComponent scope="scope" /> */}
        <ComponentWrapper context={context} />
    </>
);

export default Component;
