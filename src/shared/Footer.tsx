"use client"
import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import logo from "../../public/ultimalogo.svg"
import waveBottom from "../../public/shape3.svg"
import { Container } from "@/components/Contianer"

export default function Footer() {
    return (
       <>
            
        {/* <Image src={waveBottom} className="w-full rotate-180" alt="waveTop"/> */}
         <footer className="bg-sky-500 justify-center items-center py-8">
         <div className='flex justify-center mb-4 '>
            <Link href="/" className="">
                <Image alt="logo" src={logo} className="h-24"  />
             </Link>
         </div>
            <Container>
                
                
                <Link href={`https://tricia-sz.netlify.app/`} target="blank" rel="external" className="">
                  <span className="text-md text-sky-950 bg-Inc-950  font-medium  w-full flex items-center justify-center tracking-wide hover:text-white cursor-pointer ">
                    Developed by Parícia Souza{" "}
                    <span className="text-sky-950 px-2">
                        <FaHeart size={24} color="" />
                    </span>{" "}
                    2025
                  </span>
                </Link>
            </Container>

        </footer>
       </>
    )
}