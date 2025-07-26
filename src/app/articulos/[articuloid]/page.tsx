import Image from "next/image";

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
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <p className="m-4">Pagina de articulos</p>
      </div>

      <div className="mx-4 grid grid-cols-3 gap-7">
        <div className="my-4 mx-2 bg-amber-200 rounded-lg hover:bg-amber-100" key={articuloID.id}>
          <h2 className="font-bold text-center p-2">{articuloID.title}</h2>

          <div className="flex p-2 m-4">
            <p className="text-xs">{articuloID.description}</p>
            <Image className="opacity-90 rounded-3xl"
              width={80}
              height={50}
              src={articuloID.image}
              alt={articuloID.title}
            />
          </div>
        
        </div>
      </div>
    </>
  )
}