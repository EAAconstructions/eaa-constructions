import { ServiceTemplate } from "../Templates/ServiceTemplate";
import electrical1 from "../../assets/electrical1.jpg"
import electrical2 from "../../assets/electrical2.jpg"
import electrical3 from "../../assets/electrical3.jpg"

const projectImages = [electrical1, electrical2, electrical3]

export function Electric() {
  return (
    <>
      <ServiceTemplate 
        title={"Electric"} 
        description={"EAA Construction Company is synonymous with exceptional electric services, offering a comprehensive range of solutions designed to meet the diverse needs of our clients. Backed by a team of highly skilled electricians and engineers, we deliver unparalleled expertise in everything from electrical installations and repairs to energy-efficient upgrades and automation systems. With a steadfast commitment to safety, reliability, and sustainability, we leverage the latest advancements in electrical technology to ensure optimal performance and efficiency for every project. Whether it's wiring a new construction, upgrading outdated systems, or troubleshooting complex electrical issues, our dedication to quality craftsmanship and customer satisfaction shines through in every endeavor. At EAA Construction Company, we empower our clients with innovative electrical solutions that not only meet their current needs but also anticipate future demands, setting the standard for excellence in the industry."} 
        images={projectImages}
        />
    </>
  )
}