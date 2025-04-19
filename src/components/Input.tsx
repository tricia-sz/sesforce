"use client"

import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({ name, placeholder, type, register, rules, error }: InputProps) {
  return (
    <>
      <input
        className="w-full border-2 rounded-full h-11 px-4 border-sky-400"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 my-2">{error}</p>}
    </>
  )
}