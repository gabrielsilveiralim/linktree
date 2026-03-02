
import { Info, infoRede } from "./infoRede";

export default function About (){
    return (
        <>
        <section>
            {infoRede.map((info: Info) => ( 
              <a href={info.url} className="flex flex-col p-4 w-3xs h-16 mt-8 mb-8 mx-auto font-bold rounded-xl  border-2 border-amber-100/50 backdrop-blur-2xl">{info.name}</a> 
            ))}
 
        </section>
        </>
    )
}