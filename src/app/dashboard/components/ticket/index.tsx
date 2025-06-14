"use client"
import { CustomerProps } from "@/utils/customer.type";
import { TicketProps } from "@/utils/ticket.type";
import { FaRegFileAlt } from "react-icons/fa";
import { RiCheckboxLine } from "react-icons/ri";

import { api } from "@/lib/api";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { ModalContext } from "@/providers/modal";

interface TicketItemProps {
  ticket: TicketProps;
  customer: CustomerProps | null;
}
export function TicketItem({ customer, ticket }: TicketItemProps) {
  const router = useRouter();

  const {handleModalVisible, setDetailTicket} = useContext(ModalContext)

  async function handleChangeStatus() {
    try {
      const response = await api.patch("/api/ticket", {
        id: ticket.id,
      })

      router.refresh();

    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenModal(){
    handleModalVisible();
    setDetailTicket({
      ticket: ticket,
      customer: customer
    })
  }

  return(
    <>
      <tr className="border-b-2 border-b-sky-100 h-16 last:border-0 bg-sky-200 hover:bg-sky-300 duration-300">
        <td className="text-left pl-2">
         <p className="truncate">{customer?.name}</p>
        </td>
        <td className="text-left pl-2">
         <span className="">{ticket?.name}</span>
        </td>
        <td className="text-left hidden sm:table-cell">
         {ticket.created_at?.toLocaleDateString("pt-br")}
        </td>
        <td className="text-left">
          <span className="bg-green-500 px-2  rounded-full">{ticket.status}</span>
        </td>
        <td className="text-left">
          <button 
            className="mr-2"
            onClick={handleChangeStatus}
          >
            <RiCheckboxLine size={24} className="text-sky-800" />
          </button>
          <button onClick={handleOpenModal}>
            <FaRegFileAlt size={24} className="text-sky-600" />
          </button>
        </td>
      </tr>
    </>
  )
}

