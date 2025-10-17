"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/app/libs/prisma";

export const recogerForm = async (datos: FormData) => { 
  const titulo = datos.get("titulo") as string;
  const contenido = datos.get("contenido") as string;

  if(titulo === "" || contenido === "") {
      return;
  }

  // try {
  //   const response = await fetch("http://localhost:3000/api/posts", {
  //     method: "POST",
  //     body: JSON.stringify({titulo, contenido}),
  //   });
    
  //   if (!response.ok) {
  //     console.error("Fallo la petición:", response.status);
  //     return;
  //   }
  // } catch (error) {
  //   console.log("Error: ", error)
  // }
  // finally{
  //   redirect("/posts");
  // }

  const nuevoPost = await prisma.post.create({
      data: {
        titulo: titulo,
        contenido: contenido,
      }
    })
    redirect("/posts");
}

export default async function IngresarSAct() {

  return (
    <div className="items-center justify-center py-20">
      {/* Titulo: */}
      <h1 className="text-2xl font-bold m-5 text-center">
        Ingresar nuevo post server action
      </h1>

      {/* Formulario: */}
      <div className="flex justify-center mx-5">
        <form 
          className="p-5 bg-white text-black rounded-lg w-xl"
          action={recogerForm}
        >
          <input 
            id="titulo" 
            className="w-full mb-3 p-3 rounded-xl border border-gray-400" 
            type="text" 
            placeholder="Ingrese un titulo"
            name="titulo"
          />
          <textarea 
            id="contenido" 
            className="w-full mb-3 p-3 rounded-xl border border-gray-400" 
            rows={3}
            placeholder="Ingres el contenido"
            name="contenido"
          ></textarea>
          <div className="flex justify-between">
            <input 
              type="submit" 
              className="bg-green-500 text-white hover:bg-green-400 p-2 rounded-xl"  
              value="Insertar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}