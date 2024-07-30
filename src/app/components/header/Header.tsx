import Image from "next/image";
import Link from "next/link";
interface HeaderProps{
    pageAgora:string
}
export default function Header(props:HeaderProps){
    return(
        <header>
            <div className="flex w-screen max-w-md justify-between p-4">
                <div className="flex flex-row gap-2">
                    <div><Image alt="user imagem" src={"/img/user.png"} height={30} width={30} /></div>
                    <div>Lara Moura</div>
                </div>
                <div><Image alt="menuDropdown" src={"/img/menuDropdown.png"} height={30} width={30} /></div>
            </div>
            <nav className="w-screen max-w-md flex flex-row justify-around h-14 p-4 bg-slate-600">
                <div className={`${props.pageAgora==="novas"?"h-14 -mt-4 w-auto p-4 bg-slate-800 flex items-center text-white":""}`}><Link href={"/novas"}>Novas</Link></div>
                <div className={`${props.pageAgora==="aprovadas"?"h-14 -mt-4 w-auto p-4 bg-slate-800 flex items-center text-white":""}`}><Link href={"/aprovadas"}>Aprovadas</Link></div>
                <div className={`${props.pageAgora==="negadas"?"h-14 -mt-4 w-auto p-4 bg-slate-800 flex items-center text-white":""}`}><Link href={"/negadas"}>Negadas</Link></div>
            </nav>
        </header>
    )
}