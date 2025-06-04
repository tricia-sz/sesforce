
import { Container } from '@/components/Contianer'
import Link from 'next/link'
import { IoMdArrowBack } from 'react-icons/io'

export default function NewTicket() {
  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="px-4 py-2  bg-sky-500 text-sky-950  font-bold rounded-full flex gap-2">
            <IoMdArrowBack size={24} className="" />
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo chamados</h1>
        </div>

        <form className="flex flex-col mt-12">
          <label className="mb-2 font-medium text-lg">Nome do chamado</label>
          <input
            className="w-full border-2  border-sky-400 rounded-full px-2 mb-2 h-11"
            type="text"
            placeholder="Digite o nome do chamado"
            required
          />

          <label className="mb-2 font-medium text-lg  rounded-full">Descreva o problema</label>
          <textarea
            className="w-full border-2  border-sky-400 rounded-2xl px-2 mb-2 h-24 resize-none"
            placeholder="Descreva o problema..."
            required
          ></textarea>

          <label className="mb-2 font-medium text-lg rounded-full">Selecione o cliente</label>
          <select
            className="w-full border-2 border-sky-400  rounded-full px-4 mb-2 h-11 resize-none"
          >
            <option className='rounded-full bg-sky-100' value="cliente1">Cliente 1</option>
            <option className='rounded-full bg-sky-100' value="cliente1">Cliente 1</option>
            <option className='rounded-full bg-sky-100' value="cliente1">Cliente 1</option>
            <option className='rounded-full bg-sky-100' value="cliente1">Cliente 1</option>
          </select>
        </form>

      </main>
    </Container>
  )
}