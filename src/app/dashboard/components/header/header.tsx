import { Container } from "@/components/Contianer";
import Link from "next/link";

export function DeashboardHeader() {
  return(
    <Container>
      <header className="w-full bg-sky-500 my-4 p-3 rounded flex gap-4 items-center">
        <Link href="/dashboard" className="font-medium  hover:font-bold duration-300">
          Chamados
        </Link>
        <Link href="/dashboard/customer" className="font-medium  hover:font-bold duration-300" >
          Clientes
        </Link>
      </header>
    </Container>
  )
}