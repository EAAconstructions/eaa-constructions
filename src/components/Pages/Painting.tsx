import { ServiceTemplate } from "../Templates/ServiceTemplate";
import painting1 from "../../assets/painting1.jpg"
import painting2 from "../../assets/painting2.jpeg"
import painting3 from "../../assets/painting3.jpg"

const projectImages = [painting1, painting2, painting3]

export function Painting() {
  return (
    <>
      <ServiceTemplate 
        title={"Painting"} 
        description={"EAA Construction Company's paint services are a testament to our commitment to transforming spaces with precision and flair. With a team of skilled painters and a dedication to quality, we offer comprehensive painting solutions tailored to meet the unique needs of each project. Whether it's refreshing the exterior of a commercial building or adding a splash of color to a residential interior, our painters bring expertise and attention to detail to every brushstroke. We work closely with clients to understand their vision and preferences, offering guidance on color selection, finish options, and techniques to achieve the desired result. From meticulous surface preparation to flawless application, we take pride in delivering impeccable results that enhance the aesthetic appeal and value of any property. At EAA Construction Company, we don't just paint walls – we create spaces that inspire and delight, leaving a lasting impression for years to come."} 
        images={projectImages}
      />
    </>
  )
}