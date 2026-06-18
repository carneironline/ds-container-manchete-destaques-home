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
                name={props.getFieldName("layout-0-destaque-sem-foto-1")}
                subtitle={false}
                image={false}
                video={false}
                {...props}
              />

              <Highlight
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
              name={props.getFieldName("layout-0-manchete-sem-foto")}
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
            5 matérias sem foto
          </h4>

          <div className="container gap-6">
            <Highlight
              name={props.getFieldName("layout-0-materia-sem-foto-1")}
              subtitle={false}
              image={false}
              video={false}
              {...props}
            />

            <Highlight
              name={props.getFieldName("layout-0-materia-sem-foto-2")}
              subtitle={false}
              image={false}
              video={false}
              {...props}
            />

            <Highlight
              name={props.getFieldName("layout-0-materia-sem-foto-3")}
              subtitle={false}
              image={false}
              video={false}
              {...props}
            />

            <Highlight
              name={props.getFieldName("layout-0-materia-sem-foto-4")}
              subtitle={false}
              image={false}
              video={false}
              {...props}
            />

            <Highlight
              name={props.getFieldName("layout-0-materia-sem-foto-5")}
              subtitle={false}
              image={false}
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
