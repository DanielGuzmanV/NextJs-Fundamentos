import Image from "next/image";
import Articulos from "../page";
import { Suspense } from "react";

interface Props {
  params: {
    articuloid: string;
  }
}

interface Articulo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const peticionArticulos = async(id: string) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/' + id);
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;

  } catch (error) {
    console.log("Hay un error en la peticion:", error);
  }
}

export default async function Articulo({params}: Props) {
  const {articuloid} = await params;
  const articuloID = await peticionArticulos(articuloid);

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <p className="m-4 text-4xl font-semibold text-gray-800 hover:text-gray-300 transition-colors duration-400">
          Pagina de articulos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-6xl mx-auto px-4">
        <div className="bg-amber-400 rounded-lg hover:bg-amber-200 transition-colors duration-300 p-4" 
          key={articuloID.id}
        >
          <h2 className="font-bold text-center mb-2">{articuloID.title}</h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
            <p className="text-sm text-left flex-1">{articuloID.description}</p>
            
            <div className="flex-shrink-0">
              <Image className="rounded-3xl object-contain"
                width={80}
                height={50}
                src={articuloID.image}
                alt={articuloID.title}
              />
            </div>

          </div>
        
        </div>
      </div>

      <Suspense fallback={<div>Cargando...</div>}>
        <Articulos/>
      </Suspense>

    </>
  )
}