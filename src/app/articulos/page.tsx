import Link from "next/link"
import Image from "next/image";

interface Articulo {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const peticionArticulos = async(): Promise<Articulo[]> => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 800));
      return data;

    } catch (error) {
      console.log("Hay un error en la peticion:", error);
      return[];
    }
}

export default async function Articulos() {
  const articulos = await peticionArticulos();

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <p className="m-4 text-4xl font-semibold text-gray-800 hover:text-gray-300 transition-colors duration-400">Pagina de articulos</p>
        <Link href="/articulos/vender" className="m-5">
          <button className="hover:bg-blue-500 bg-blue-700 py-2 px-4 rounded-md w-24 transition-colors duration-400">
            vender
          </button>
        </Link>
      </div>

      <div className="mx-4 grid grid-cols-3 gap-7">
        {
          articulos.map((values) => {
            return (
              <Link href={`/articulos/${values.id}`} key={values.id}>

                <div className="bg-amber-400 rounded-lg hover:bg-amber-200 hover:text-black transition-colors duration-300 p-4">
                  <h2 className="font-bold text-center mb-2">{values.title}</h2>
        
                  <div className="flex flex-row sm:flex-row items-center sm:items-center gap-4">
                    <div className="flex-shrink">
                      <p className="text-sm text-left flex-1">{values.description}</p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Image className="rounded-3xl object-contain"
                        width={80}
                        height={50}
                        src={values.image}
                        alt={values.title}
                      />
                    </div>
        
                  </div>
                
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
    
  )
}