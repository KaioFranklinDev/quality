import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-800 flex items-center justify-center">
      <main className="h-screen w-screen max-w-md  bg-slate-300 flex justify-center items-center ">
        <button className="h-10 w-32 bg-yellow-400" ><Link href={"/login"} >Ir ao Login</Link></button>
      </main>
      
    </div>
    
  );
}
