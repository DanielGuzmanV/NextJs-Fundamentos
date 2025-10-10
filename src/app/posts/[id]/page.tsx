import Ingresar from "@/app/ingresar/page";

interface PostData {
  id: number;
  titulo: string;
  contenido: string;
}

interface DataParams {
  params: {id: string}
}

const cargarUnPost = async(id: number): Promise<PostData> => {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`);
  const data = await response.json();
  return data;
}

export default async function PostEdit({params}: DataParams) {
  const {id} = await params;
  const idNumerico = parseInt(id);
  const post = await cargarUnPost(idNumerico)
  return (
    <div>
      <div className="bg-cyan-100 p-2 m-2">
        <h2 className="text-2xl text-black">{post.titulo}</h2>
        <p className="text-base text-black">{post.contenido}</p>
      </div>

      <Ingresar edit={true} post={{titulo: post.titulo, contenido: post.contenido, id: post.id}}/>
    </div>
  )
}