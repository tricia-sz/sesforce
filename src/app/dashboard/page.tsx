import { Container } from "@/components/Contianer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaTicketAlt } from "react-icons/fa";
import TicketItem from "./components/ticket/ticket";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between  py-4 mb-8">
          <h1 className="text-3xl font-bold">Chamados</h1>
          <Link href="/dashboard/new" className="bg-sky-500 px-4 py-2 rounded-full text-sky-950 font-medium flex gap-2">
            <FaTicketAlt size={24} />
            Novo Chamado 
          </Link>
        </div>
        <table className="min-w-full my-2">
          <thead className="">
            <th className="font-bold text-left p-1">CLIENTE</th>
            <th className="font-bold text-left hidden sm:table-cell">DATA CADASTRO</th>
            <th className="font-bold text-left">STATUS</th>
            <th className="font-bold text-left">#</th>
          </thead>
          <tbody className="">
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
          </tbody>

        </table>
      </main>
    </Container>
  )
} 