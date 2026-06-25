import { useEffect, useRef } from "react"
import { change } from "redux-form"

export function ImageSync({ sourceImg, targetFieldName, formName, dispatch }) {
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
