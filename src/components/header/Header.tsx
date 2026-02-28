import Eu from "@/public/photo.jpeg"
import Image from "next/image"

export default function Header() {
    return(
        <>

        <div className="flex">
           <Image src={Eu} alt="" className="flex w-3xs max-h-full rounded-full mt-5 mx-auto" /> 
        </div>
    
        </>
    )
}