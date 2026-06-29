import LayoutSvg0 from "./svgs/LayoutSvg0"
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
]

export default layouts
