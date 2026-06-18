import bundle from "./bundle"
import ContainerMancheteEDestaquesHome from "./Frame"

describe("bundle", () => {
  it("should have a name", () => {
    expect(bundle.name).toEqual("Container Manchete e Destaques Home ")
  })

  it("should have a type", () => {
    expect(bundle.type).toEqual("container-manchete-e-destaques-home")
  })

  it("should have a component", () => {
    expect(bundle.component).toEqual(ContainerMancheteEDestaquesHome)
  })
})
