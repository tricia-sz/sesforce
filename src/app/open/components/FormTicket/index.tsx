"use client"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { FaTicketAlt } from 'react-icons/fa'
import { api } from '@/lib/api'
import { CustomerDataInfo } from '../../page'

const schema = z.object({
  name: z.string().min(1, "O nome do chamado é obrigatório"),
  description: z.string().min(1, "Descreva um pouco sobre seu problema...")
})

type FormData = z.infer<typeof schema>

interface FormTicketProps {
  customer: CustomerDataInfo
}

export function FormTicket({customer}: FormTicketProps) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  async function handleRegisterTicket(data:FormData) {

    const response = await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      customerId: customer.id

    })
    
    setValue("name", "")
    setValue("description", "")
    
  }

  return (
    <form 
      className="bg-sky-50 mt-6 px-4 py-6 rounded-2xl border-2 border-sky-300 mb-28"
      onSubmit={handleSubmit(handleRegisterTicket)}
      >
      <div className='mb-4'>
        <label className="font-medium text-lg">Título do chamado</label>
        <Input
          register={register}
          type="text"
          placeholder="Digite o nome do chamado..."
          name="name"
          error={errors.name?.message}
        />
      </div>

      <div>
        <label className="mb-1 font-medium text-lg">Descreva o problema</label>
        <textarea
          className="w-full border-2 border-sky-400 rounded-2xl h-24 resize-none  px-2 placeholder:text-sky-600/70 "
          placeholder="Descreva o seu problema..."
          id="description"
          {...register("description")}
        ></textarea>
        {errors.description?.message && <p className="text-red-500 mt-1 mb-4">{errors.description?.message}</p>}

        <button
          className="flex mt-4 bg-sky-500 gap-2 rounded-full w-44 h-11 px-2 text-sky-950 font-bold mx-auto justify-center items-center self-center"
          type="submit"
        >
          <FaTicketAlt size={24} />
          Abrir Chamado
        </button>
      </div>

    </form>
  )
}