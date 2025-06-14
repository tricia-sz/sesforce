"use client"
import { CustomerProps } from "@/utils/customer.type";

import {api} from "@/lib/api"
import { useRouter } from "next/navigation";

export default function CardCustomer({customer}: {customer: CustomerProps}){

  const router = useRouter();

  async function handleDeleteCustomer() {
    try{
      const response = await api.delete("/api/customer", {
        params: {
          id: customer.id
        }
      })

      router.refresh();

    }catch(err) {
      console.log(err);
      
    }
  }

  return(
    <article className="flex flex-col bg-sky-200 m-2 border-1  border-sky-300 p-6 rounded-lg gap-2 hover:scale-105 duration-300">
      <h2 className="flex gap-2">
        <a className="font-bold">Nome: </a>{customer.name}
      </h2>
      <h2 className="flex gap-2">
        <a className="font-bold">E-mail:</a><p>{customer.email}</p>
      </h2>
      <h2 className="flex gap-2">
        <a className="font-bold">Telefone:</a><p>{customer.phone}</p>
      </h2>
      <button 
        className="bg-red-700  rounded-full px-2 text-white mt-2 self-start "
        onClick={handleDeleteCustomer}
        >
          
        Deletar
      </button>
    </article>
  )
}