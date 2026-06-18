import React from "react"
import { shallow } from "enzyme"
import DsContainerMancheteDestaquesHome from "./Frame"

it("renders without crashing", () => {
  const tree = shallow(<DsContainerMancheteDestaquesHome />)
  expect(tree).toMatchSnapshot()
})