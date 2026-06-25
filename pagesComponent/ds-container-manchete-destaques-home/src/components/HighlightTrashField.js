import React from "react"
import { change } from "redux-form"
import { TrashIcon } from "./icons/TrashIcon"

const EMPTY_HIGHLIGHT = { hat: "", title: "", url: "", img: {}, img2: {} }

export function HighlightTrashField(highlightProps) {
  const { idx, getFieldName, meta, content } = highlightProps
  const { dispatch, form } = meta

  const baseField = getFieldName(`highlights[${idx}]`)

  const handleClear = () => {
    dispatch(change(form, baseField, EMPTY_HIGHLIGHT))
  }

  if (!content?.url || !content?.hat || !content?.title) return null

  return (
    <button
      type="button"
      onClick={handleClear}
      className="trash-icon"
      title="Limpar conteúdo"
    >
      <TrashIcon />
    </button>
  )
}
