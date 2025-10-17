import React from 'react'

export default function Registro() {
  return (
    <>
      <h1 className='flex justify-center'>
        Registro de usuario
      </h1>

      <div className='flex justify-center'>
        <form className='flex flex-col items-center mt-4 p-5 bg-white w-2xl rounded-lg text-black'>
          <input
            type='text'
            id='usario'
            required
            className='border border-gray-300 rounded-md p-2 w-64 mb-4 bg-white'
            placeholder='Nombre de usuario'
          />
          <input
            type='email'
            id='email'
            required
            className='border border-gray-300 rounded-md p-2 w-64 mb-4 bg-white'
            placeholder='Correo electrónico'  
          />
          <input
            type='password'
            id='password'
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