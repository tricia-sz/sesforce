"use client"

import { useRouter } from 'next/navigation'
import { BiRefresh } from "react-icons/bi";

export function ButtonRefresh() {
  const router = useRouter();


  return (
    <button
      onClick={() => router.refresh()}
      className="bg-gray-500 px-0.5 rounded-full"
    >
      <BiRefresh size={28}  className='text-sky-50' />
    </button>
  )
}