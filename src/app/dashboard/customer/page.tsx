import { Container } from "@/components/Contianer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MdPersonAddAlt1 } from "react-icons/md";

import prismaClient from "@/lib/prisma"
import CardCustomer from "./components/card";

export default async function Customer(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user) {
      redirect("/")
    }

    const customers = await prismaClient.customer.findMany({
      where: {
        userId: session.user.id 
      }
    })

    
  return(
    <Container>
      <main className="mt-9 mb-26">
        <div className="flex items-center justify-between" >
          <h1 className="text-3xl font-bold">Meus clientes</h1>
          <Link href="/dashboard/customer/new" className="bg-sky-500 px-2 py-2 font-medium rounded-full flex gap-2">
             <MdPersonAddAlt1 size={24}/>
             Novo Cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {
            customers.map(customer => (
              <CardCustomer 
                key={customer.id} 
                customer={customer}
              />
            ))
          }
        </section>

        {customers.length === 0 && (
          <h1 className="text-2xl text-center">Você ainda não possui clientes</h1>
        )}
      </main>
    </Container>
  )
}