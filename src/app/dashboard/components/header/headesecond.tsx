import { Container } from "@/components/Contianer";
import { IoMdFolderOpen } from "react-icons/io";
import { PiFileLockFill } from "react-icons/pi";



export function DeashboardSecondHeader() {
  return(
    <Container>
      <header className="w-full bg-sky-500  rounded-full flex gap-16 items-center justify-center mb-8 lg:p-6">
        {/* <h2 className=" text-xl tracking-wider text-sky-50">
           Suporte 24h. Qualquer falha na plataforma, nos notifique enviando e-mail para <span className="tracking-wider text-sky-900  font-bold">support@sesforce.com</span>
        </h2> */}
        {/* <button className="font-medium text-xl  hover:font-black duration-300 flex gap-2 items-center justify-center">
          <IoMdFolderOpen size={28}/>
           Em Andamento
        </button>
        <button className="font-medium text-xl hover:font-black duration-300 flex gap-1 items-center justify-center" >
          
          <PiFileLockFill size={28}/>
           Arquivados
        </button> */}
      </header>
    </Container>
  )
}