import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logoinversa.svg"
import { FiLogOut, FiUser } from "react-icons/fi";
export default function Header() {
  return (
    <header className="w-full flex items-center px-2 py-4 bg-sky-500 h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href={""}>
          <Image
            alt="logo"
            src={logo}
            width={100}
            className=""
          />
        </Link>
        <div className="flex items-baseline gap-4">
          <button>
            <Link href={"/dashboard"}>
              <FiUser size={26} className="text-sky-950" />
            </Link>
          </button>
          <button>
            <Link href={""}>
              <FiLogOut size={26} className="text-sky-950" />
            </Link>
          </button>
        </div>

      </div>
    </header>
  )
}