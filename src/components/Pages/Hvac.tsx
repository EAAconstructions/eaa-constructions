import { ServiceTemplate } from "../Templates/ServiceTemplate";
import hvac1 from "../../assets/hvac1.jpeg"
import hvac2 from "../../assets/hvac2.jpg"
import hvac3 from "../../assets/hvac3.jpg"

const projectImages = [hvac1, hvac2, hvac3]

export function Hvac() {
  return (
    <>
      <ServiceTemplate 
        title={"HVAC"} 
        description={"EAA Construction Company prides itself on providing top-of-the-line HVAC services that ensure optimal comfort and efficiency for our clients. With a wealth of experience and a commitment to excellence, our team of skilled technicians delivers comprehensive solutions tailored to meet the unique needs of each project. Whether it's installing state-of-the-art heating, ventilation, and air conditioning systems in new constructions, conducting precise repairs and maintenance, or optimizing existing systems for peak performance, we approach every task with meticulous attention to detail and a dedication to quality craftsmanship. Our priority is not only to meet but exceed our clients' expectations, delivering reliable HVAC solutions that enhance indoor air quality, energy efficiency, and overall comfort. At EAA Construction Company, we are your trusted partner in creating environments where comfort meets sustainability."} 
        images={projectImages}
      />
    </>
  )
}