
interface PostData {
  id: number;
  titulo: string;
  contenido: string;
}

const cargarPosts = async (): Promise<PostData[]> => {
  const respuesta = await fetch("http://localhost:3000/api/posts");
  const data = await respuesta.json();
  return data;
}

export  default async function Post () {
  const listaPosts = await cargarPosts();

  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="my-5 text-4xl font-extrabold text-red-400">Lista de Post</h1>
      <div>
        <ul>
          {listaPosts.map((post, idx) => (
            <li key={post.id} className="bg-gray-100 p-2 m-2 rounded-lg text-black">
              <h2 className="text-blue-500 font-bold text-2xl">
                {idx + 1}. {post.titulo != "" ? post.titulo : "(No hay titulo)" }
              </h2>
              <p>{post.contenido != "" ? post.contenido : "(No hay contenido)"}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}