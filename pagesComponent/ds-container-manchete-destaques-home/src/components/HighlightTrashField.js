import React, { useState } from "react"
import { change } from "redux-form"
import { TrashIcon } from "./icons/TrashIcon"
import { LoaderCircleIcon } from "./icons/LoaderCircleIcon"

const EMPTY_HIGHLIGHT = { hat: "", title: "", url: "", img: {}, img2: {} }

export function HighlightTrashField(highlightProps) {
  const { idx, getFieldName, meta, content } = highlightProps
  const { dispatch, form } = meta

  const [isClearing, setIsClearing] = useState(false)

  const baseField = getFieldName(`highlights[${idx}]`)
  const isFilled = !!(content?.url && content?.hat && content?.title)

  if (isClearing && !isFilled) {
    setIsClearing(false)
  }

  const handleClear = () => {
    setIsClearing(true)
    dispatch(change(form, baseField, EMPTY_HIGHLIGHT))
  }

  if (isClearing) {
    return (
      <button type="button" disabled className="trash-icon" title="Limpando...">
        <LoaderCircleIcon className="trash-icon-spinning" />
      </button>
    )
  }

  if (!isFilled) return null

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
