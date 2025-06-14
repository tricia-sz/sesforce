import { Container } from "@/components/Contianer";
import Link from "next/link";
import { DiCodeigniter } from "react-icons/di";
import { FaTicketAlt } from "react-icons/fa";
import { IoIosCall, IoIosPerson } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";

export function DeashboardHeader() {
  return(
    <Container>
      <header className="w-full border-sky-50  rounded-full flex gap-8 items-center justify-center lg:p-6 ">
        <Link href="/dashboard" className="font-medium text-xl  hover:font-black duration-300 flex gap-2 items-center justify-center">
          <FaTicketAlt size={28}/>
           <p className="hidden sm:table-cell">CHAMADOS</p>
        </Link>
        <Link href="/dashboard/customer" className="font-medium text-xl hover:font-black duration-300 flex gap-1 items-center justify-center" >
          <IoIosPerson size={28}/>
          <p className="hidden sm:table-cell">CLIENTES</p>
        </Link>
      </header>
    </Container>
  )
}