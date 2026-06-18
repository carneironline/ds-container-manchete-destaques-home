import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import Component from './src/component';

const rootNode = document.getElementById("component");
const root = createRoot(rootNode);

if ((module as any).hot) {
    (module as any).hot.accept();
    root.render(createElement(Component));
}
