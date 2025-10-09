"use client"

import { useRouter } from "next/navigation";

export default function Ingresar() {
  const router = useRouter();

  const enviarForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const titulo = (form.elements.namedItem('titulo') as HTMLInputElement).value;
    const contenido = (form.elements.namedItem('contenido') as HTMLInputElement).value;
    
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({titulo, contenido})
      });
      const datos = await response.json();

      router.push("/posts");
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  return (
    <div className="items-center justify-center py-20">
      {/* Titulo: */}
      <h1 className="text-2xl font-bold m-5 text-center">
        Ingresar nuevo post
      </h1>

      {/* Formulario: */}
      <div className="flex justify-center">
        <form className="p-5 bg-white text-black w-1/4 rounded-lg" onSubmit={enviarForm}>
          <input id="titulo" className="w-full mb-3 p-3 rounded-xl border border-gray-400" type="text" placeholder="Ingrese un titulo"/>
          <textarea id="contenido" className="w-full mb-3 p-3 rounded-xl border border-gray-400"  rows={3} placeholder="Ingres el contenido"></textarea>
          <input type="submit" className="bg-pink-700 text-white p-2 rounded-xl hover:bg-rose-400" value={"Insertar"}/>
        </form>

      </div>

    </div>
  )
}