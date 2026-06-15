import { ServiceTemplate } from "../Templates/ServiceTemplate";
import plumbing1 from "../../assets/plumbing1.jpg"
import plumbing2 from "../../assets/plumbing2.png"
import plumbing3 from "../../assets/plumbing3.webp"

const projectImages = [plumbing1, plumbing2, plumbing3]

export function Plumbing() {
  return (
    <>
      <ServiceTemplate 
        title={"Plumbing"} 
        description={"EAA Construction Company sets the gold standard in plumbing services, boasting unparalleled expertise and dedication to client satisfaction. With a legacy of excellence spanning decades, our team of skilled professionals combines precision craftsmanship with cutting-edge technology to deliver top-tier plumbing solutions tailored to each client's needs. Whether it's installing state-of-the-art fixtures, conducting thorough inspections, or resolving complex issues with finesse, our commitment to quality shines through every project. We prioritize transparency and clear communication, ensuring clients are informed every step of the way. At EAA Construction Company, we don't just fix pipes – we build lasting relationships through reliable, efficient, and innovative plumbing services."} 
        images={projectImages}
      />
    </>
  )
}