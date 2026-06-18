import ContainerMancheteEDestaquesHome from "./Frame.js"
import { constants } from "backstage-pages"

export default {
  name: "Container Manchete e Destaques Home ",
  type: "container-manchete-e-destaques-home",
  component: ContainerMancheteEDestaquesHome,

  // Change this if you want your component to have a different behaviour. E.g.: METADATA, COMPONENT, CONTAINER
  class: constants.COMPONENT_CLASS.COMPONENT,

  // Change this if you want to only allow this component to be used if the user has a permission (role).
  needPermission: false,
  // Name of the restriction to apply when evaluating permissions (v3). See more on https://docs.backstage.globoi.com/permissions/conceito-da-solucao/restriction/#atribuindo-valores-as-restricoes
  // E.g.: comercial, newsletter, home, etc.
  restrictionGroup: "",

  thumbUrl: "",
}
