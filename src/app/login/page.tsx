import Image from "next/image";


export default function Page() {
    return (
        <main className="h-screen  text-white gap-10  bg-gray-950 flex flex-col items-center justify-center" >
            <div>
                <Image alt="logo enpresa" src={"/img/logoQuality.jpg"} height={100} width={100} />
            </div>
            <form className="gap-5  flex flex-col items-center justify-center">
                <div>
                    <p>Usuario</p>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <p>password</p>
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <button className="text-black h-[50px] w-[100px] bg-yellow-500" type="submit">Login</button>
            </form>
        </main>

    )
}