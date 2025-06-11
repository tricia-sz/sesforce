import Link from 'next/link'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import prismaClient from '@/lib/prisma'
import { Container } from '@/components/Contianer'
import { IoMdArrowBack } from 'react-icons/io'

export default async function NewTicket() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/")
  }

  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session.user.id
    }
  })


  async function handleRegisterTicket(formData: FormData) {
    "use server"

    const name = formData.get("name")
    const description = formData.get("description")
    const customerId = formData.get("customer")

    if (!name || !description || !customerId) {
      return;
    }

    await prismaClient.ticket.create({
      data: {
        name: name as string,
        description: description as string,
        customerId: customerId as string,
        status: "ABERTO",
        userId: session?.user?.id
      }
    })

    redirect("/dashboard")

  }

  return (
    <Container>
      <main className="mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="px-4 py-2  bg-sky-500 text-sky-950  font-bold rounded-full flex gap-2">
            <IoMdArrowBack size={24} className="" />
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo chamado</h1>
        </div>

        <form 
          className="flex flex-col mt-12"
          action={handleRegisterTicket}
        >
          <label className="mb-2 font-medium text-lg">Título do chamado</label>
          <input
            className="w-full border-2  border-sky-400 rounded-full px-2 mb-2 h-11"
            type="text"
            placeholder="Digite o título do chamado"
            required
            name="name"
          />

          <label className="mb-2 font-medium text-lg  rounded-full">Descreva o problema</label>
          <textarea
            className="w-full border-2  border-sky-400 rounded-2xl px-2 mb-2 h-24 resize-none"
            placeholder="Descreva o problema..."
            required
            name="description"
          >
          </textarea>

          {
            customers.length !== 0 && (
              <>
                <label className="mb-2 font-medium text-lg rounded-full">Selecione o cliente</label>
                <select
                  className="w-full border-2 border-sky-400  rounded-full px-4 mb-2 h-11 resize-none"
                  name="customer"

                >
                  {
                    customers.map(customer => (
                      <option
                        key={customer.id} 
                        className='rounded-full bg-sky-100' 
                        value={customer.id}>
                          {customer.name}
                        
                      </option>
                    ))
                  }
                </select>
              </>
            )
          }

          {customers.length === 0 && (
          <Link href="/dashboard/customer/new"
            className="text-xl text-center mt-4 text-sky-600">
              Você ainda não possui clientes, <span className='text-sky-950 font-bold'>Cadastrar cliente</span>
          </Link>
        )}

        <button 
          type='submit'
          className='py-2 w-64 bg-sky-500 font-bold text-2xl text-white rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed items-center text-center self-center mt-6'
          disabled={customers.length === 0}
        >
          Cadastrar
        </button>
        </form>

      </main>
    </Container>
  )
}