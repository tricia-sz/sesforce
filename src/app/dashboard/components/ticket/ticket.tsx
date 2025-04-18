import { FaRegFileAlt, FaTrashAlt } from "react-icons/fa";

export default function TicketItem(){
  return(
    <>
      <tr className="border-b-2 border-b-slate-200 h-16 last:border-0 bg-slate-100 hover:bg-slate-200 duration-300">
        <td className="text-left pl-2">
          Mercado Sabe DElls
        </td>
        <td className="text-left hidden sm:table-cell">
          04/04/2993
        </td>
        <td className="text-left">
          <span className="bg-green-500 px-2 py-1 rounded">ABERTO</span>
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