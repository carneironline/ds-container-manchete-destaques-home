import LayoutSvg0 from "./svgs/LayoutSvg0"
import LayoutSvg1 from "./svgs/LayoutSvg1"
import LayoutSvg2 from "./svgs/LayoutSvg2"
import LayoutSvg3 from "./svgs/LayoutSvg3"

const layouts = [
  {
    id: 0,
    description:
      "1 manchete sem foto, dois destaques sem foto, 1 destaque com foto",
    svg: <LayoutSvg3 />,
  },
  {
    id: 1,
    description:
      "1 manchete com foto, 2 destaques com foto, 6 destaques sem foto",
    svg: <LayoutSvg0 />,
  },
  // {
  //   id: 2,
  //   description: "1 manchete sem foto, 4 destaques com foto",
  //   svg: <LayoutSvg2 />,
  // },
  // {
  //   id: 3,
  //   description: "1 manchete sem foto, 1 manchete com foto",
  //   svg: <LayoutSvg3 />,
  // },
]

export default layouts
