import { Container } from "@/components/Contianer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import TicketItem from "./components/ticket/ticket";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1>Chamados</h1>
          <Link href="/dashboard/new" className="bg-sky-800 px-4 rounded text-white">
            Abrir Chamado
          </Link>
        </div>
        <table className="min-w-full my-2">
          <thead className="">
            <th className="font-medium text-left p-1">CLIENTE</th>
            <th className="font-medium text-left hidden sm:block">DATA CADASTRO</th>
            <th className="font-medium text-left">STATUS</th>
            <th className="font-medium text-left">#</th>
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