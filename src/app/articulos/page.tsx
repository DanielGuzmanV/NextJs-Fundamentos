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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;

    } catch (error) {
      console.log("Hay un error en la peticion:", error);
      return[];
    }
}

export default async function Articulos() {
  const articulos = await peticionArticulos();

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <p className="m-4">Pagina de articulos</p>
        <Link href="/articulos/vender">
          <button className="hover:bg-blue-500 bg-blue-700 py-2 px-4 rounded-md w-24">
            vender
          </button>
        </Link>
      </div>

      <div className="mx-4 grid grid-cols-3 gap-7">
        {
          articulos.map((values) => {
            return (
              <div className="my-4 mx-2 bg-amber-200 rounded-lg hover:bg-amber-100" key={values.id}>
                <h2 className="font-bold text-center p-2">{values.title}</h2>

                <div className="flex p-2 m-4">
                  <p className="text-xs">{values.description}</p>
                  <Image className="opacity-90 rounded-3xl"
                    width={80}
                    height={50}
                    src={values.image}
                    alt={values.title}
                  />
                </div>
              
              </div>
            )
          })
        }
      </div>
    </>
    
  )
}