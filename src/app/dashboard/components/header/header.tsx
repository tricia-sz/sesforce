import { Container } from "@/components/Contianer";
import Link from "next/link";
import { DiCodeigniter } from "react-icons/di";
import { FaTicketAlt } from "react-icons/fa";
import { IoIosCall, IoIosPerson } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";

export function DeashboardHeader() {
  return(
    <Container>
      <header className="w-full bg-sky-500  p-4 rounded-full flex gap-16 items-center justify-center mb-8 lg:p-6">
        <Link href="/dashboard" className="font-medium text-xl  hover:font-black duration-300 flex gap-2 items-center justify-center">
          <FaTicketAlt size={28}/>
          Chamados
        </Link>
        <Link href="/dashboard/customer" className="font-medium text-xl hover:font-black duration-300 flex gap-1 items-center justify-center" >
          <IoIosPerson size={28}/>
          Clientes
        </Link>
      </header>
    </Container>
  )
}