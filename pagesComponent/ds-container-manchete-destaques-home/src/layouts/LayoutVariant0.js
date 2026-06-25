import React, { useCallback } from "react"
import { Highlight } from "backstage-pages"
import { HighlightTrashField } from "../components/HighlightTrashField"

/*
 * 1 manchete sem foto, dois destaques sem foto, 1 destaque com foto
 */
function LayoutVariant0({ description, ...props }) {
  const renderTrashField = useCallback(
    highlightProps => <HighlightTrashField {...highlightProps} />,
    []
  )

  return (
    <fieldset className="fieldset-drop-in">
      <legend>{description}</legend>
      <div className="container full-width">
        <div className="column flex-col">
          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              1 Manchete sem foto
            </h4>

            <Highlight
              idx="layout-0-manchete-sem-foto"
              name={props.getFieldName("layout-0-manchete-sem-foto")}
              subtitle={false}
              image={false}
              video={false}
              renderCustomFields={renderTrashField}
              {...props}
            />
          </div>

          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              2 destaques sem foto
            </h4>

            <div className="container flex-nowrap gap-6">
              <Highlight
                idx="layout-0-destaque-sem-foto-1"
                name={props.getFieldName("layout-0-destaque-sem-foto-1")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderTrashField}
                {...props}
              />

              <Highlight
                idx="layout-0-destaque-sem-foto-2"
                name={props.getFieldName("layout-0-destaque-sem-foto-2")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderTrashField}
                {...props}
              />
            </div>
          </div>
        </div>

        <div className="column flex-col">
          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              1 destaque com foto
            </h4>

            <Highlight
              idx="layout-0-manchete-com-foto"
              name={props.getFieldName("layout-0-manchete-com-foto")}
              subtitle={false}
              image={true}
              video={false}
              renderCustomFields={renderTrashField}
              {...props}
            />
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default LayoutVariant0
