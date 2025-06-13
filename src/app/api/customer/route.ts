
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'


export async function GET(request: Request){
  const { searchParams } = new URL(request.url)
  const customerEmail = searchParams.get("email")

  if(!customerEmail || customerEmail === ""){
    return NextResponse.json({ error: "Customer not found" }, { status: 400 })
  }

  try{
    const customer = await prismaClient.customer.findFirst({
      where:{
        email: customerEmail 
      }
    })

    return NextResponse.json(customer)

  }catch(err){
    return NextResponse.json({ error: "Customer not found" }, { status: 400 })
  }


  return NextResponse.json({ message: "RECEBIDO" })

}


// DELETANDO CLIENTE
export async function DELETE(request: Request){
  const session = await getServerSession(authOptions);

  if(!session || !session.user){
    
    return NextResponse.json({ error: "Não Autorizado" }, { status: 401 })
  }

  const {searchParams} = new URL(request.url)
  const userId = searchParams.get("id")

  if(!session){
    
    return NextResponse.json({ error: "Não Autorizado" }, { status: 400 })
  }

  const findTickets = await prismaClient.ticket.findFirst({
    where: {
      customerId: userId
    }
  })

  if(findTickets) {
    return NextResponse.json({ error: "Falha ao deletar cliente. O mesmo possui chamado aberto" }, { status: 401 })
  }

  try{
    await prismaClient.customer.delete({
      where: {
        id: userId as string
      }
    })

    return NextResponse.json({ message: "Cliente cadastrado com sucesso!" })
    
  }catch(err) {
    return NextResponse.json({ error: "Falha ao deletar cliente" }, { status: 401 })

  }

}

// Rota para cadastrar um cliente
export async function POST(request: Request){
  const session = await getServerSession(authOptions);

  if(!session || !session.user){
    
    return NextResponse.json({ error: "Não Autorizado" }, { status: 401 })
  }

  const { name, email, phone, address, userId } = await request.json();

  try{
    await prismaClient.customer.create({
      data:{
        name,
        phone,
        email,
        address: address ? address : "",
        userId: userId
      }
    })

    return NextResponse.json({ message: "Cliente cadastrado com sucesso!" })

  }catch(err){
    return NextResponse.json({ error: "Falha ao criar novo cliente" }, { status: 400 })
  }

}