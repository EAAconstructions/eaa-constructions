import { ServiceTemplate } from "../Templates/ServiceTemplate";
import tiling1 from "../../assets/tiling1.jpg"
import tiling2 from "../../assets/tiling2.png"
import tiling3 from "../../assets/tiling3.jpg"

const projectImages = [tiling1, tiling2, tiling3]

export function Tiling() {
  return (
    <>
      <ServiceTemplate 
        title={"Tiling"} 
        description={"EAA Construction Company stands as a beacon of excellence in the realm of tiling services, offering a blend of precision and artistry that transforms spaces with enduring beauty. Our skilled craftsmen bring years of experience and a keen eye for detail to every tiling project, whether it's a residential renovation or a commercial development. From intricate mosaic designs to sleek, modern installations, we approach each task with a commitment to perfection, using only the highest quality materials and techniques to achieve stunning results. With a focus on both aesthetics and functionality, our tiling services not only enhance the visual appeal of spaces but also provide durable, long-lasting surfaces that withstand the test of time. At EAA Construction Company, we take pride in elevating environments through the timeless elegance of expertly crafted tiling solutions."} 
        images={projectImages}
      />
    </>
  )
}