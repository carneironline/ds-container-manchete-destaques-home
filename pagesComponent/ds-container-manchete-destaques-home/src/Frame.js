import React, { useState, useEffect } from "react"
import CustomSelect from "./components/CustomSelect"
import layouts from "./constants/layouts"
import LayoutVariant0 from "./layouts/LayoutVariant0"
import LayoutVariant1 from "./layouts/LayoutVariant1"
import LayoutVariant2 from "./layouts/LayoutVariant2"
import LayoutVariant3 from "./layouts/LayoutVariant3"

import "./Frame.scss"

const layoutComponents = {
  0: LayoutVariant0,
  1: LayoutVariant1,
  2: LayoutVariant2,
  3: LayoutVariant3,
}

function ContainerMancheteDestaquesHome(props) {
  const inTemplate = true

  const selectedOptionSavedId =
    props.getValue("selectedOptionSavedId") || layouts[0].id
  const foundLayout = layouts.find(
    layout => layout.id === selectedOptionSavedId
  )
  const [selectedLayout, setSelectedLayout] = useState(foundLayout)

  useEffect(() => {
    props.setValue("selectedOptionSavedId", selectedLayout.id)
  }, [selectedLayout])

  const ActiveLayout = layoutComponents[selectedLayout.id]

  return (
    <>
      <fieldset className="">
        <legend className="layout-fieldset__legend">Selecione o layout:</legend>

        <CustomSelect
          name={props.getFieldName("custom-select")}
          options={layouts}
          selectedOption={selectedLayout}
          setSelectedOption={setSelectedLayout}
        />
      </fieldset>

      {ActiveLayout && (
        <ActiveLayout
          {...props}
          description={selectedLayout.description}
          inTemplate={inTemplate}
        />
      )}
    </>
  )
}

export default ContainerMancheteDestaquesHome
