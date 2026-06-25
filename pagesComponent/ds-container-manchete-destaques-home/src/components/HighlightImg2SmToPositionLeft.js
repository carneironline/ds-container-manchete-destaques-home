import React from "react"
import { change } from "redux-form"
import { ImageSelectorInput } from "backstage-admin"
import { ImageSync } from "./ImageSync"
import { TrashIcon } from "./icons/TrashIcon"

const EMPTY_HIGHLIGHT = { hat: "", title: "", url: "", img: {}, img2: {} }

export function HighlightImg2SmToPositionLeft(highlightProps) {
  const { idx, getFieldName, meta } = highlightProps
  const { dispatch, form } = meta

  const highlightKey = `highlights[${idx}]`
  const img2Field = getFieldName(`${highlightKey}.img2`)
  const baseField = getFieldName(highlightKey)

  const handleClear = () => {
    dispatch(change(form, baseField, EMPTY_HIGHLIGHT))
  }

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

      {highlightProps.content?.url && highlightProps.content?.hat && highlightProps.content?.title && (
        <button
          type="button"
          onClick={handleClear}
          className="trash-icon"
          title="Limpar conteúdo"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  )
}
