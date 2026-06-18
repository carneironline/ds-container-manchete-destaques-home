import React from "react"
import { ComponentSelector } from "backstage-pages"

function LayoutVariant3({ description, inTemplate, ...props }) {
  return (
    <fieldset className="fieldset-drop-in">
      <legend>{description}</legend>
      <div className="container full-width">
        <div className="column">
          <h4 className="text-align-center margin-bottom-12px">
            Manchete sem foto
          </h4>
          <ComponentSelector
            {...props}
            name={props.getFieldName("layout-3-manchete-1")}
            componentFilter={el =>
              ["componente-manchete", "drop-in-highlight", "hub-de-videos"].includes(el.type)
            }
            allowAdd={inTemplate}
          />
        </div>
        <div className="column">
          <h4 className="text-align-center margin-bottom-12px">
            Manchete com foto
          </h4>
          <ComponentSelector
            {...props}
            name={props.getFieldName("layout-3-manchete-2")}
            componentFilter={el =>
              ["componente-manchete", "drop-in-highlight", "hub-de-videos"].includes(el.type)
            }
            allowAdd={inTemplate}
          />
        </div>
      </div>
    </fieldset>
  )
}

export default LayoutVariant3
