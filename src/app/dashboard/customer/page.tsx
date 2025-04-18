import { Container } from "@/components/Contianer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import CardCustomer from "./components/card/cardCustomer";

export default async function Customer(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user) {
      redirect("/")
    }

  return(
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meus clientes</h1>
          <Link href="/dashboard/customer/new" className="bg-sky-500 px-4 py-1 font-bold rounded">
             Novo Cliente
          </Link>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
          <CardCustomer />
          <CardCustomer />
          <CardCustomer />
          <CardCustomer />
        </section>
      </main>
    </Container>
  )
}