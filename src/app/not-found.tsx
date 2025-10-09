import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className='border-4 border-amber-400 justify-center text-center items-center m-10'>
      <h2>Sin salida...</h2>

      <p>Pagina no encontrada, ocurrio un error...</p>
      <div className='py-10'>
        <button>
          <Link href="/" className='bg-blue-300 text-black p-4 rounded-xl border border-blue-500'>
            Ir a la pagina principal
          </Link>
        </button>
      </div>
    </div>
  )
};