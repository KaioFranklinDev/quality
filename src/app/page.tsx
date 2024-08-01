import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-800 flex items-center justify-center">
      <main className="h-screen w-screen max-w-md  bg-slate-950 flex justify-center items-center gap-2 flex-col">
        <div className="flex flex-col items-center pb-20 text-white">
          <p className="text-xl">Home Links</p>
          <p className="text-gray-400">demostração de links já criados</p>
          <div className="text-green-500 text-justify">Disclaimer: Você só pode ver essa pagina por estar logado</div>
        </div>
        <button className="h-12 w-32 bg-yellow-400" ><Link href={"/login"} >Ir ao Login</Link></button>
        <button className="h-12 w-32 bg-yellow-400 " ><Link href={"/novas"} >Ir página &quot;Novas&quot;</Link></button>
        <button className="h-12 w-32 bg-yellow-400 " ><Link href={"/aprovadas"} >Ir página &quot;Aprovadas&quot;</Link></button>
        <button className="h-12 w-32 bg-yellow-400 " ><Link href={"/negadas"} >Ir página &quot;Negadas&quot;</Link></button>
      </main>
      
    </div>
    
  );
}
