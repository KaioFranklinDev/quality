import Link from "next/link";
import Header from "../components/header/Header";

export default function Novas(){
    return(
        <div className="h-screen w-screen bg-gray-800 flex items-center justify-center">
            <div className="h-screen w-screen max-w-md  bg-slate-300 flex flex-col items-center ">
                <Header pageAgora="novas"/>
                <div className="pt-40 flex flex-col items-center gap-4">
                    <div>Obra M24 - Matheus Fernandes</div>
                    <div>Av. Raul Lopes 1200</div>
                    <button className="h-12 w-32 bg-yellow-400 " ><Link href={"/"} >Ir página &quot;Home Links&quot;</Link></button>
                </div>
            </div>
      
        </div>
    )
}