import "./header.css";
import Link from "next/link";

export default function HeaderCTA() {
    return(
        <>
        
            
            <img src="/image/motorEventsLogo.png" className="imgLogo" alt="Logo do Motor Events"/>
            <ul>
                 <Link className="infoMenu"  href={"/"}>EVENTOS</Link> 
                 <Link className="infoMenu" href={"/contato"}>CONTATO</Link> 
                 <Link className="infoMenu" href={"/sobre"}>SOBRE</Link> 
            </ul>
            
            <Link href={"/"} className="btn"><b>Anunciar  Seu Evento</b></Link>
            
            
        
        </>
    )
}
