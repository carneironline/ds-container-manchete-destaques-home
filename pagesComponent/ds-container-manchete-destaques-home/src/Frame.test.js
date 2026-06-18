import React from "react"
import { shallow } from "enzyme"
import ContainerMancheteEDestaquesHome from "./Frame"

it("renders without crashing", () => {
  const tree = shallow(<ContainerMancheteEDestaquesHome />)
  expect(tree).toMatchSnapshot()
})
