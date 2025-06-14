"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import logo from "../../public/ultimalogo.svg"
import shapetop from "../../public/shape3.svg"
import { FaTicketAlt } from "react-icons/fa";
import { TfiUnlock } from "react-icons/tfi";
import { IoMdLogOut } from "react-icons/io";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { DeashboardHeader } from "@/app/dashboard/components/header/header";

export default function Header() {
  const { status, data } = useSession();
  
  async function handleLogin() {
    await signIn();

  }

  async function handleLogout() {
    await signOut();

  }

  return (
    <>
      <header className="w-full flex items-center px-2 py-4 bg-sky-500  shadow-sm justify-center">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          <Link href={"/"} className="hidden sm:table-cell">
            <Image
              alt="logo"
              src={logo}
              width={200}
              className=""
            />
          </Link>
            
          {status === "loading" && (
            <button className="animate-spin">
              <FiLoader size={26} className="text-sky-950" />
            </button>
          )}

          {status === "unauthenticated" && (
            <>
              <Link href={"/open"} >
                <button
                    className="flex bg-sky-100 gap-2 rounded-full  h-11 px-4 text-sky-950 font-bold mx-auto justify-center items-center self-center"
                    type="submit"
                  >
                    <FaTicketAlt size={24} />
                    Abrir Chamado
                </button>
            </Link>
            <button onClick={handleLogin} className="flex gap-2 bg-sky-100 px-4 py-2 rounded-full  items-center justify-center ">
              Entrar
              <TfiUnlock size={26} className="text-sky-950" />
            </button>
            </>
            
          )}
            
          {status === "authenticated" && (
             <>
              <div>
                <DeashboardHeader />
              </div>
              <div className="flex items-center gap-4">
              <Link href={"/dashboard"} className="flex gap-2 items-center justify-center px-3 py-2 bg-sky-100 rounded-full font-medium">
                {data.user?.name}
              </Link>

              <button onClick={handleLogout} className="flex">
                <Link href={""} className="flex gap-1 text-white bg-sky-950 px-3 rounded-full py-1 items-center justify-center">
                  Sair
                  <IoMdLogOut size={26} className="text-white" />
                </Link>
              </button>
            </div>
             </>
            
          )}

        </div>
       
      </header>
      <Image alt="shape" src={shapetop}  className="w-full"/>
    </>
  )
}