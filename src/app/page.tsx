import Image from "next/image";
import hero from "../../public/hero.svg"
import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";

export default function Home() {
  return (
   <main className="flex items-center flex-col justify-center min-h-[calc(100vh-500px)]">
    <h1 className="font-medium text-2xl mb-2">Gerencie sua empresa</h1>
    <h2 className="font-bold text-3xl mb-8 text-sky-400 md:text-4xl">Atendimentos clientes</h2>
    
    <Image
      alt="hero"
      src={hero}
      className="ma-w-sm md:max-w-xl"
    />
   </main>
  )
}
