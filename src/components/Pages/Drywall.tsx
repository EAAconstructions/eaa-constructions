import { ServiceTemplate } from "../Templates/ServiceTemplate"
import drywall1 from "../../assets/drywall1.png"
import drywall2 from "../../assets/drywall2.jpg"
import drywall3 from "../../assets/drywall3.jpg"

const projectImages = [drywall1, drywall2, drywall3]

export function Drywall() {
  return (
    <>
      <ServiceTemplate 
        title={"Drywall"} 
        description={"EAA Construction Company's drywall services epitomize our commitment to excellence and attention to detail. With a team of highly skilled professionals, we offer comprehensive solutions for all drywall needs, whether it's a new construction project or a renovation endeavor. From precise installations to seamless repairs, our craftsmen bring years of experience and expertise to every job, ensuring flawless results that exceed expectations. We understand the importance of a smooth, sturdy foundation for any interior space, and we take pride in delivering superior quality drywall work that stands the test of time. With a focus on efficiency and reliability, we work closely with clients to understand their requirements and timelines, delivering tailored solutions that meet their needs and budget. At EAA Construction Company, we are dedicated to creating spaces that are not only beautiful but also built to last, setting the standard for excellence in drywall services."} 
        images={projectImages}
      />
    </>
  )
}