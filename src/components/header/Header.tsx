import Eu from "@/public/photo.jpeg"
import Image from "next/image"

export default function Header() {
    return(
        <>

        <div className="flex flex-col">
           <Image src={Eu} alt="" className="flex w-52 h-52 md:w-3xs md:h-64 rounded-full mt-24 mx-auto " /> 
           <h1 className="text-sm md:tex-xl font-bold mx-auto mt-3">Gabriel Lima</h1>
        </div>
    
        </>
    )
}