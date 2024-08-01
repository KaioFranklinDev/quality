"use client"
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function DropMenu(){
    const [openDropMenu, setOpenDropMenu]= useState(false)
    function dropMenu() {
        if(openDropMenu===false){
            setOpenDropMenu(true)
            console.log(openDropMenu)
            return
        }
        if(openDropMenu===true){
            setOpenDropMenu(false)
            console.log(openDropMenu)
            return
        }
    }
    const router = useRouter()
    function logoutHandler(){
        Cookies.remove('auth_token')
        router.push('/login')
    }
    return(
        <div className="bg-red-300 flex flex-row-reverse  ">
            <button onClick={dropMenu}>
                <Image alt="menuDropdown" src={"/img/menuDropdown.png"} height={30} width={30} />
            </button>
            {openDropMenu? (<div className="absolute h-auto w-auto p-2 mt-8 text-end bg-lime-200 ">
                <div>gerenciamento de obras</div>
                <button onClick={logoutHandler}>Sair</button>
            </div>) :null}
        </div>
    )
}