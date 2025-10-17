"use client"

import { useRouter } from "next/navigation";

type Data = {
  id: number;
  titulo: string;
  contenido: string;
}

interface EditProps  {
  edit: boolean;
  post: Data;
}

export default function EditParams({post}: EditProps) {
  const router = useRouter();

  const enviarForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;

  const titulo = (form.elements.namedItem('titulo') as HTMLInputElement).value;
  const contenido = (form.elements.namedItem('contenido') as HTMLInputElement).value;
  
  if(titulo === "" || contenido === ""){
    return;
  }

  try {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({titulo, contenido}),
      headers: {
        "Content-Type": "application/json",
      }
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
        Editar post params
      </h1>

      {/* Formulario: */}
      <div className="flex justify-center mx-5">
        <form 
          className="p-5 bg-white text-black rounded-lg w-xl" 
          onSubmit={enviarForm}>
          <input 
            id="titulo" 
            className="w-full mb-3 p-3 rounded-xl border border-gray-400" 
            type="text" 
            placeholder="Ingrese un titulo"
          />
          <textarea 
            id="contenido" 
            className="w-full mb-3 p-3 rounded-xl border border-gray-400" 
            rows={3}
            placeholder="Ingres el contenido"
          ></textarea>
          <div className="flex justify-between">
            <input 
              type="submit" 
              className="bg-green-500 text-white hover:bg-green-400 p-2 rounded-lg" 
              value="Editar"
            />
          </div>
        </form>

      </div>

    </div>
  )
}