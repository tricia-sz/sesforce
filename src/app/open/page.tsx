"use client"
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { FiSearch, FiX } from 'react-icons/fi'
import { FormTicket } from './components/FormTicket'
import { Input } from '@/components/Input'

import {api} from "@/lib/api"
import { IoIosCloseCircle } from 'react-icons/io'

const schema = z.object({
  email: z.string().email("Digite o email do cliente para localizar.").min(1, "O campo email é obrigatório.")
})

type FormData = z.infer<typeof schema>

export interface CustomerDataInfo {
  id: string;
  name: string;
}

export default function OpenTicket() {
  const [customer, setCustomer] = useState<CustomerDataInfo | null>(null)

  const { register, handleSubmit, setValue, setError, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  function handleClearCustomer() {
    setCustomer(null)
    setValue("email", "")
  }


  async function handleSearchCustomer(data: FormData) {
    const response = await api.get("/api/customer", {
      params: {
        email: data.email
      }
    })

    if (response.data === null) {
      setError("email", { type: "custom", message: "Ops, cliente não foi encontrado. O mesmo não está cadastrado em nossa base." })
      return;
    }

    setCustomer({
      id: response.data.id,
      name: response.data.name
    })

  }


  return (
    <div className="w-full max-w-2xl mx-auto px-2 ">
      <h1 className="font-bold text-3xl text-center mt-24">Abrir chamado</h1>

      <main className="flex flex-col mt-4 mb-2">

        {customer ? (
          <div className="bg-sky-200 py-6 px-4 rounded-2xl border-2 border-sky-400  flex items-center justify-between">
            <p className="text-lg"><strong>Cliente selecionado:</strong> {customer.name}</p>
            <button className="h-11 px-2 flex items-center justify-center rounded" onClick={handleClearCustomer}>
               <IoIosCloseCircle className='text-red-600' size={34}/>
            </button>
          </div>
        ) : (
          <form 
            className="bg-sky-50 py-6 px-2 rounded-2xl border-3 border-sky-300 mb-28"
            onSubmit={handleSubmit(handleSearchCustomer)}
          >
            <div className="flex flex-col gap-3">
              <Input
                name="email"
                placeholder="Digite o email do cliente..."
                type="text"
                error={errors.email?.message}
                register={register}
              />

              <button 
                className="bg-sky-500  flex flex-row gap-3 px-2 h-11 items-center justify-center rounded-full text-sky-950 font-bold self-center"
                type='submit'
                >
                Procurar cliente
                <FiSearch size={24} className='text-sky-950 ' />
              </button>
            </div>
          </form>
        )}

        {customer !== null && <FormTicket customer={customer}/>}


      </main>
    </div>
  )
}