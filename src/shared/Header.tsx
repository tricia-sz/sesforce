"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FiLoader, FiLock, FiLogOut, FiUser } from "react-icons/fi";
import logo from "../../public/logo1.svg";

export default function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();

  }

  async function handleLogout() {
    await signOut();

  }

  return (
    <header className="w-full flex items-center px-2 py-4 bg-sky-500 h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"}>
          <Image
            alt="logo"
            src={logo}
            width={100}
            className=""
          />
        </Link>

        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} className="text-sky-950" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button onClick={handleLogin}>
            <FiLock size={26} className="text-sky-950" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-baseline gap-4">
             <Link href={"/dashboard"}>
                <FiUser size={26} className="text-sky-950" />
             </Link>

            <button onClick={handleLogout}>
              <Link href={""}>
                <FiLogOut size={26} className="text-white" />
              </Link>
            </button>
          </div>
        )}


      </div>
    </header>
  )
}