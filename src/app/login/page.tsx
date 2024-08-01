"use client"
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Page() {
    const router = useRouter()
    function loginHendler(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        Cookies.set('auth_token',"kaiokkkkate9")
        router.push('/novas')
    }
    return (
        <main className="h-screen  text-white gap-10  bg-gray-950 flex flex-col items-center justify-center" >
            <div>
                <Image alt="logo enpresa" src={"/img/logoQuality.jpg"} height={100} width={100} />
            </div>
            <div className="text-green-500">Disclaimer: acesse com qualaquer usuario e senha</div>
            <form className="gap-5  flex flex-col items-center justify-center">
                <div>
                    <p>Usuario</p>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <p>password</p>
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <button onClick={loginHendler} className="text-black h-[50px] w-[100px] bg-yellow-500" >Login</button>
            </form>
        </main>

    )
}