import { Container } from "@/components/Contianer";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { NewCustomerForm } from "../form";

export default async function NewCustomer(){
  const session = await getServerSession(authOptions)
      if(!session || !session.user) {
        redirect("/")
      }
  
  return (
    <Container>
     <main className="flex flex-col mt-9 mb-26 ">
      <div className="flex items-center gap-3">
        <Link href="/dashboard/customer" className="bg-sky-500  px-4 py-2 text-sky-950 rounded-full font-bold flex gap-2">
          <IoMdArrowBack size={24} className="" />
          Voltar
        </Link>
        <h1 className="text-3xl font-bold ml-8 ">Novo Cliente</h1>
      </div>
        <NewCustomerForm userId={session.user.id} />
     </main>
    </Container>
  )
}