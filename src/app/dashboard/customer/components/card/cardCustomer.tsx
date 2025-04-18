export default function CardCustomer(){
  return(
    <article className="flex flex-col bg-sky-200 m-2 border-1  border-sky-300 p-6 rounded-lg gap-2 hover:scale-105 duration-300">
      <h2>
        <a className="font-bold">Nome: </a>Mercado
      </h2>
      <a className="font-bold">E-mail: </a><p>teste@gmail.com</p>
      <a className="font-bold">Telefone: </a><p>(11) 96749454509</p>

      <button className="bg-red-700  rounded-full px-2 text-white mt-2 self-start">
        Deletar
      </button>
    </article>
  )
}