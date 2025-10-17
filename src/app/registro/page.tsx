"use client"

import React from 'react'

export default function Registro() {

  const getForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const usuario = (form.elements.namedItem('usuario') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    
    const response = await fetch('/api/usuarios/registro', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        usuario: usuario, 
        email: email,  
        password: password
      })
    });
    const datos = await response.json();
  }

  return (
    <>
      <h1 className='flex justify-center'>
        Registro de usuario
      </h1>

      <div className='flex justify-center'>
        <form 
          className='flex flex-col items-center mt-4 p-5 bg-white w-2xl rounded-lg text-black'
          onSubmit={getForm}
        >
          <input
            type='text'
            id='usuario'
            required
            className='border border-gray-300 rounded-md p-2 w-64 mb-4 bg-white'
            placeholder='Nombre de usuario'
          />
          <input
            type='email'
            id='email'
            required
            name='email'
            className='border border-gray-300 rounded-md p-2 w-64 mb-4 bg-white'
            placeholder='Correo electrónico'  
          />
          <input
            type='password'
            id='password'
            name='password'
            required
            className='border border-gray-300 rounded-md p-2 w-64 mb-4 bg-white'
            placeholder='Contraseña'  
          />
          <input
            type='submit'
            className='bg-teal-500 text-white rounded-lg p-2 hover:bg-teal-400'
            value='Registrar'
          />
        </form>
        
      </div>
    </>
  )
}