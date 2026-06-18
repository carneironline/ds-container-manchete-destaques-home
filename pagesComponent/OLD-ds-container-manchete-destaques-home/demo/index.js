import React from "react"
import { render } from "react-dom"
import { PagesSandbox } from "backstage-pages"
import pagesComponent from "../src/bundle"

// Backstage Admin Styles
import "../node_modules/backstage-admin/src/sass/index.scss"

// Set component initial data to the componentBody prop
const initialData = {}

render(
  <PagesSandbox pagesComponent={pagesComponent} initialData={initialData} />,
  document.getElementById("root")
)
