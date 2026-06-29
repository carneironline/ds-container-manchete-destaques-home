import React from "react"
import { change } from "redux-form"
import { ImageSelectorInput } from "backstage-admin"
import { ImageSync } from "./ImageSync"
import { HighlightTrashField } from "./HighlightTrashField"

export function HighlightImg2SmToPositionLeft(highlightProps) {
  const { idx, getFieldName, meta } = highlightProps

  const highlightKey = `highlights[${idx}]`
  const img2Field = getFieldName(`${highlightKey}.img2`)

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

      <HighlightTrashField
        idx={idx}
        getFieldName={getFieldName}
        meta={meta}
        content={highlightProps.content}
      />
    </div>
  )
}
