import React, { useCallback } from "react"

import { Highlight } from "backstage-pages"
import { HighlightImg2SmToPositionLeft } from "../components/HighlightImg2SmToPositionLeft"
import { HighlightTrashField } from "../components/HighlightTrashField"

/*
 * 1 manchete com foto, 2 destaques com foto, 6 destaques sem foto
 */
function LayoutVariant1({ description, ...props }) {
  const renderImg2SmToPositionLeft = useCallback(
    highlightProps => <HighlightImg2SmToPositionLeft {...highlightProps} />,
    []
  )

  const renderTrashField = useCallback(
    highlightProps => <HighlightTrashField {...highlightProps} />,
    []
  )

  return (
    <fieldset className="fieldset-drop-in">
      <legend>{description}</legend>
      <div className="container full-width">
        <div className="column3 flex-col">
          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              1 Manchete com foto
            </h4>

            <Highlight
              idx="layout-1-manchete-com-foto"
              name={props.getFieldName("layout-1-manchete-com-foto")}
              subtitle={false}
              image={true}
              video={false}
              renderCustomFields={renderTrashField}
              tenant={props.tenant}
              {...props}
            />
          </div>
        </div>

        <div className="column3 flex-col">
          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              1 Destaque com foto
            </h4>

            <Highlight
              idx="layout-1-destaque1-com-foto-1"
              name={props.getFieldName("layout-1-destaque1-com-foto-1")}
              subtitle={false}
              image={true}
              video={false}
              renderCustomFields={renderImg2SmToPositionLeft}
              tenant={props.tenant}
              {...props}
            />
          </div>

          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              3 destaques sem foto
            </h4>

            <div className="container ">
              <Highlight
                idx="layout-1-destaque1-sem-foto-1"
                name={props.getFieldName("layout-1-destaque1-sem-foto-1")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderTrashField}
                {...props}
              />
            </div>
            <div className="container ">
              <Highlight
                idx="layout-1-destaque1-sem-foto-2"
                name={props.getFieldName("layout-1-destaque1-sem-foto-2")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderTrashField}
                {...props}
              />
            </div>
            <div className="container ">
              <Highlight
                idx="layout-1-destaque1-sem-foto-3"
                name={props.getFieldName("layout-1-destaque1-sem-foto-3")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderTrashField}
                {...props}
              />
            </div>
          </div>
        </div>

        <div className="column3 flex-col">
          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              1 Destaque com foto
            </h4>

            <Highlight
              idx="layout-1-destaque2-com-foto-1"
              name={props.getFieldName("layout-1-destaque2-com-foto-1")}
              subtitle={false}
              image={true}
              video={false}
              renderCustomFields={renderImg2SmToPositionLeft}
              {...props}
            />
          </div>

          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              3 destaques sem foto
            </h4>

            <div className="container ">
              <Highlight
                idx="layout-1-destaque2-sem-foto-1"
                name={props.getFieldName("layout-1-destaque2-sem-foto-1")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderImg2SmToPositionLeft}
                {...props}
              />
            </div>
            <div className="container ">
              <Highlight
                idx="layout-1-destaque2-sem-foto-2"
                name={props.getFieldName("layout-1-destaque2-sem-foto-2")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderImg2SmToPositionLeft}
                {...props}
              />
            </div>
            <div className="container ">
              <Highlight
                idx="layout-1-destaque2-sem-foto-3"
                name={props.getFieldName("layout-1-destaque2-sem-foto-3")}
                subtitle={false}
                image={false}
                video={false}
                renderCustomFields={renderImg2SmToPositionLeft}
                {...props}
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default LayoutVariant1
