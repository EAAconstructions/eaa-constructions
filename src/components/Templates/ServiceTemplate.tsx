import { Link } from "react-router-dom"
import { ContactCard } from "../cards/ContactCard"
import { SliderTemplate } from "./SliderTemplate"

type Props = {
    title: string,
    description: string,
    images: string[]
}

export function ServiceTemplate({title, description, images}: Props) {
  return (
    <div className=" bg-customGray px-4">
      <div className="container mx-auto">
        <Link to={"/"}>

          <button 
            className="md:absolute mt-4 md:mt-0 md:top-8 bg-amber-400 px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer "
          >
            {`< Back`}
          </button>

        </Link>

        <div className="py-4">

            <p className="text-4xl font-bold text-center">
              {title} Services
            </p>

            <SliderTemplate  images={images}/>

            <div className="flex flex-col md:grid grid-cols-2 gap-24 justify-between py-24 px-4 text-black scroll-mt-24">

              <p>
                {description}
              </p>

              <ContactCard />

            </div>

        </div>

      </div>


    </div>
  )
}