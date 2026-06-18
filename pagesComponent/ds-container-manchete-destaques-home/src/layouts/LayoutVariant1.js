import React from "react"
import { ComponentSelector } from "backstage-pages"

function LayoutVariant1({ description, inTemplate, ...props }) {
  return (
    <fieldset className="fieldset-drop-in">
      <legend>{description}</legend>
      <div className="container full-width">
        <div className="column">
          <h4 className="text-align-center margin-bottom-12px">
            Manchete com foto
          </h4>
          <ComponentSelector
            {...props}
            name={props.getFieldName("layout-1-manchete")}
            componentFilter={el =>
              ["componente-manchete", "drop-in-highlight", "hub-de-videos"].includes(el.type)
            }
            allowAdd={inTemplate}
          />
        </div>
        <div className="column">
          <h4 className="text-align-center margin-bottom-12px">Destaques</h4>
          <div className="container">
            <h2 className="row-indicator">Primeira linha</h2>
            <div className="column no-border">
              <ComponentSelector
                {...props}
                name={props.getFieldName("layout-1-destaque-com-foto-1")}
                componentFilter="drop-in-highlight"
                allowAdd={inTemplate}
              />
            </div>
            <div className="column no-border">
              <ComponentSelector
                {...props}
                name={props.getFieldName("layout-1-destaque-com-foto-2")}
                componentFilter="drop-in-highlight"
                allowAdd={inTemplate}
              />
            </div>
            <h2 className="row-indicator">Segunda linha</h2>
            <div className="column no-border">
              <ComponentSelector
                {...props}
                name={props.getFieldName("layout-1-destaque-com-foto-3")}
                componentFilter="drop-in-highlight"
                allowAdd={inTemplate}
              />
            </div>
            <div className="column no-border">
              <ComponentSelector
                {...props}
                name={props.getFieldName("layout-1-destaque-com-foto-4")}
                componentFilter="drop-in-highlight"
                allowAdd={inTemplate}
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default LayoutVariant1
