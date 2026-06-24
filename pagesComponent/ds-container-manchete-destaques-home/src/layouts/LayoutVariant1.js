import React, { useCallback, useEffect, useRef } from "react"

import { ImageSelectorInput } from "backstage-admin"
import { change } from "redux-form"

import { Highlight } from "backstage-pages"

/**
 * Observa mudanças em `sourceImg` e copia o valor para `targetFieldName`
 * apenas quando a URL muda (não no mount inicial).
 */
function ImageSync({ sourceImg, targetFieldName, formName, dispatch }) {
  const isFirstRender = useRef(true)
  const prevUrl = useRef(sourceImg?.url)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (sourceImg?.url && sourceImg.url !== prevUrl.current) {
      dispatch(change(formName, targetFieldName, sourceImg))
    }
    prevUrl.current = sourceImg?.url
  }, [sourceImg?.url])

  return null
}

/*
 * 1 manchete com foto, 2 destaques com foto, 6 destaques sem foto
 */
function LayoutVariant1({ description, ...props }) {
  console.log(props)

  const renderMancheteCom2Fotos = useCallback(highlightProps => {
    const img2Field = highlightProps.getFieldName(
      "highlights[layout-1-manchete-com-foto].img2"
    )

    return (
      <div className="highlight-image2">
        <ImageSync
          sourceImg={highlightProps.content?.img}
          targetFieldName={img2Field}
          formName={highlightProps.meta.form}
          dispatch={highlightProps.meta.dispatch}
        />
        <ImageSelectorInput
          floatingLabelText="Imagem Mobile"
          input={{
            value: highlightProps.content?.img2 ?? {},
            name: img2Field,
            onChange: val =>
              highlightProps.meta.dispatch(
                change(highlightProps.meta.form, img2Field, val)
              ),
          }}
          meta={highlightProps.meta}
          tenant={highlightProps.tenant}
          enableCrop
          cropProps={{ aspect: 1 / 1 }}
        />
      </div>
    )
  }, [])

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
              renderCustomFields={renderMancheteCom2Fotos}
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
              image={false}
              video={false}
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
            <div className="container ">
              <Highlight
                idx="layout-1-destaque1-sem-foto-3"
                name={props.getFieldName("layout-1-destaque1-sem-foto-3")}
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
              3 destaques sem foto
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
            <div className="container ">
              <Highlight
                idx="layout-1-destaque2-sem-foto-3"
                name={props.getFieldName("layout-1-destaque2-sem-foto-3")}
                subtitle={false}
                image={false}
                video={false}
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
