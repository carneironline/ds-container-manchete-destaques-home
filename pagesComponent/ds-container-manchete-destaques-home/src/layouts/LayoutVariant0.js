import React from "react"
import { Highlight } from "backstage-pages"

/*
 * 1 manchete sem foto | 2 destaques sem foto | 1 manchete com foto |  5 matérias sem foto
 */
function LayoutVariant0({ description, inTemplate, ...props }) {
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
                {...props}
              />

              <Highlight
                idx="layout-0-destaque-sem-foto-2"
                name={props.getFieldName("layout-0-destaque-sem-foto-2")}
                subtitle={false}
                image={false}
                video={false}
                {...props}
              />
            </div>
          </div>
        </div>

        <div className="column flex-col">
          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              1 Manchete com foto
            </h4>

            <Highlight
              idx="layout-0-manchete-com-foto"
              name={props.getFieldName("layout-0-manchete-com-foto")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />
          </div>
        </div>
      </div>

      <div className="container full-width">
        <div className="column flex-col">
          <h4 className="text-align-center margin-bottom-12px">
            5 matérias com foto
          </h4>

          <div className="container gap-6">
            <Highlight
              idx="layout-0-materia-com-foto-1"
              name={props.getFieldName("layout-0-materia-com-foto-1")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-0-materia-com-foto-2"
              name={props.getFieldName("layout-0-materia-com-foto-2")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-0-materia-com-foto-3"
              name={props.getFieldName("layout-0-materia-com-foto-3")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-0-materia-com-foto-4"
              name={props.getFieldName("layout-0-materia-com-foto-4")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-0-materia-com-foto-5"
              name={props.getFieldName("layout-0-materia-com-foto-5")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default LayoutVariant0
