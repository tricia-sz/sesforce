"use client"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { FaTicketAlt } from 'react-icons/fa'

const schema = z.object({
  name: z.string().min(1, "O nome do chamado é obrigatório"),
  description: z.string().min(1, "Descreva um pouco sobre seu problema...")
})

type FormData = z.infer<typeof schema>

export function FormTicket() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  })


  return (
    <form className="bg-sky-50 mt-6 px-4 py-6 rounded-2xl border-2 border-sky-300 mb-28">
      <div className='mb-4'>
        <label className="mb-1 font-medium text-lg">Título do chamado</label>
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
          className="w-full border-2 border-sky-400 rounded-2xl h-24 resize-none mb-2 px-2 placeholder:text-sky-600/70 "
          placeholder="Descreva o seu problema..."
          id="description"
          {...register("description")}
        ></textarea>
        {errors.description?.message && <p className="text-red-500 my-1">{errors.description?.message}</p>}

        <button
          className="flex bg-sky-500 gap-2 rounded-full w-2/4 h-11 px-2 text-sky-950 font-bold mx-auto justify-center items-center self-center"
          type="submit"
        >
          <FaTicketAlt size={24} />
          Abrir Chamado
        </button>
      </div>

    </form>
  )
}