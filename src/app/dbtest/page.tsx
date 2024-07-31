import { sql } from "@vercel/postgres";

export default async function Cart() {


  let rowsla:any;
  try {
    const result = await sql`SELECT * from carts`;
    rowsla = result.rows;
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", rowsla);
  } catch (error) {
    console.error("Error fetching data rsrsrsrrsrsrrsrsrrsrsrsrrsrsrrsrrs:", error);
  }
  return (
    <div>
      aaa
      <div>
        {rowsla.map((e:any)=>(
          <div key={e.id}>
            {e.id} - {e.quantity}
          </div>
        ))}
      </div>
      <div>{rowsla[0].user_id}</div>
    </div>
  );
}
