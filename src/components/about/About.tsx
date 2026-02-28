
import { Info, infoRede } from "./infoRede";

export default function About (){
    return (
        <>
        <section>
            {infoRede.map((info: Info) => ( 
              <a href={info.url}>{info.name}</a> 
            ))}
 
        </section>
        </>
    )
}