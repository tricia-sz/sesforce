import { CustomerProps } from "@/utils/customer.type";
import { TicketProps } from "@/utils/ticket.type";
import { FaRegFileAlt, FaTrashAlt } from "react-icons/fa";

interface TicketItemProps {
  ticket: TicketProps;
  customer: CustomerProps | null;
}

export default function TicketItem({ customer, ticket }: TicketItemProps){

  return(
    <>
      <tr className="border-b-2 border-b-sky-100 h-16 last:border-0 bg-sky-200 hover:bg-sky-300 duration-300">
        <td className="text-left pl-2">
         {customer?.name}
        </td>
        <td className="text-left hidden sm:table-cell">
         {ticket.created_at?.toLocaleDateString("pt-br")}
        </td>
        <td className="text-left">
          <span className="bg-green-500 px-2  rounded-full">{ticket.status}</span>
        </td>
        <td className="text-left">
          <button className="mr-2">
            <FaTrashAlt size={24} className="text-red-600" />
          </button>
          <button>
            <FaRegFileAlt size={24} className="text-sky-800" />
          </button>
        </td>
      </tr>
    </>
  )
}