import { Container } from "@/components/Contianer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaTicketAlt } from "react-icons/fa";

import prismaCliente from "@/lib/prisma"
import { TicketItem } from "./components/ticket";
import { ButtonRefresh } from "./components/button";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  const tickets = await prismaCliente.ticket.findMany({
    where: {
      status: "ABERTO",
      customer: {
        userId: session.user.id
      }
    },
    include: {
      customer: true
    },
    orderBy: {
      created_at: "desc"
    }
  })

  console.log(tickets);
  

  return (
    <Container>
      <main className="mt-9 mb-28">
        <div className="flex items-center justify-between  py-4 mb-8">
          <h1 className="text-3xl font-bold">CHAMADOS </h1>
          <div className="flex gap-4">
           <div className="flex items-center">
              <ButtonRefresh />
            </div>
            <Link href="/dashboard/new" className="bg-sky-500 px-2 py-2 rounded-full text-sky-950 font-medium flex gap-2 justify-center items-center">
              <FaTicketAlt size={24} />
              Novo Chamado 
            </Link>
          </div>
        </div>
        <table className="min-w-full my-2">
          <thead className="">
            <th className="font-bold text-left p-1">CLIENTE</th>
            <th className="font-bold text-left p-1">TÍTULO</th>
            <th className="font-bold text-left hidden sm:table-cell">DATA CADASTRO</th>
            <th className="font-bold text-left">STATUS</th>
            <th className="font-bold text-left">#</th>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <TicketItem 
                key={ticket.id}
                customer={ticket.customer}
                ticket={ticket}
              />
            ))}
          </tbody>

        </table>
        {tickets.length === 0 && (
          <h1 className="px-2 text-gray-600">Nenhum ticket aberto foi encontrado...</h1>
        )}

      </main>
    </Container>
  )
} 