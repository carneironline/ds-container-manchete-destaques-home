import React from "react"
import { Highlight } from "backstage-pages"

/*
 * 1 manchete com foto | 2 destaques com foto + 4 destaques sem foto + | 5 matérias sem foto
 */
function LayoutVariant1({ description, inTemplate, ...props }) {
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
              image={false}
              video={false}
              {...props}
            />
          </div>

          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              2 destaques sem foto
            </h4>

            <div className="container ">
              <Highlight
                idx="layout-1-destaque1-sem-foto-1"
                name={props.getFieldName("layout-1-destaque1-sem-foto-1")}
                subtitle={false}
                image={false}
                video={false}
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
              image={false}
              video={false}
              {...props}
            />
          </div>

          <div className="">
            <h4 className="text-align-center margin-bottom-12px">
              2 destaques sem foto
            </h4>

            <div className="container ">
              <Highlight
                idx="layout-1-destaque2-sem-foto-1"
                name={props.getFieldName("layout-1-destaque2-sem-foto-1")}
                subtitle={false}
                image={false}
                video={false}
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
                {...props}
              />
            </div>
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
              idx="layout-1-materia-com-foto-1"
              name={props.getFieldName("layout-1-materia-com-foto-1")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-1-materia-com-foto-2"
              name={props.getFieldName("layout-1-materia-com-foto-2")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-1-materia-com-foto-3"
              name={props.getFieldName("layout-1-materia-com-foto-3")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-1-materia-com-foto-4"
              name={props.getFieldName("layout-1-materia-com-foto-4")}
              subtitle={false}
              image={true}
              video={false}
              {...props}
            />

            <Highlight
              idx="layout-1-materia-com-foto-5"
              name={props.getFieldName("layout-1-materia-com-foto-5")}
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

export default LayoutVariant1
