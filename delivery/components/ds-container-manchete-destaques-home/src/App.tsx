import React, { type FC, type ReactElement } from "react";
import ReactDOM from "react-dom";
import Component from "./Component";

const App: FC = (): ReactElement => (
  <Component
    ScopeComponent={() => <></>}
    context={({} as Record<string, any>)}
    channel="raw"
  />
);

const rootElement = document.getElementById("component");
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
