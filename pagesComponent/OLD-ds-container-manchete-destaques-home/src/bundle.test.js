import bundle from "./bundle"
import DsContainerMancheteDestaquesHome from "./Frame"

describe("bundle", () => {

  it("should have a name", () => {
    expect(bundle.name).toEqual("ds-container-manchete-destaques-home")
  })

  it("should have a type", () => {
    expect(bundle.type).toEqual("ds-container-manchete-destaques-home")
  })

  it("should have a component", () => {
    expect(bundle.component).toEqual(DsContainerMancheteDestaquesHome)
  })

})