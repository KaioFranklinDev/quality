import { sql } from "@vercel/postgres";
import CardAdd from "../components/cardAdd/CardAdd";

export default async function Cart() {


  let obras:any;
  try {
    const result = await sql`SELECT * from obras`;
    obras = result.rows;
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", obras);
  } catch (error) {
    console.error("Error fetching data rsrsrsrrsrsrrsrsrrsrsrsrrsrsrrsrrs:", error);
  }
  let pendentes:any
  try {
    const result = await sql`SELECT * FROM pedidos_pendentes WHERE obra_id = ${1}`;
    pendentes = result.rows;
  } catch (error) {
    console.error("Error fetching data rs", error);
  }
  
  return (
    <div>
      <CardAdd nomeBtn="adicionar obra" />
      <div>
        {obras.map((e:any)=>(
          <div key={e.id}>
            Id:{e.id} - Descrição: {e.descricao} - Pendentes: {e.pedidos_pendentes} - Aprovados: {e.pedidos_aprovados} - Negados: {e.pedidos_negados}
          </div>
        ))}
      </div>
      <div className="bg-yellow-300">
        {pendentes.map((e:any)=>(
          <div key={e.id}>
            Id:{e.id} - Descrição Pedido: {e.descricao_pedido} 
          </div>
        ))}
      </div>
    </div>
  );
}
