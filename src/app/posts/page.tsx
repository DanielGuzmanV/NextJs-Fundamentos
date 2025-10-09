
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
    <div>

      <h1 className="my-5 text-3xl font-extrabold text-red-400">Lista de Post</h1>
      <div>
        <ul>
          {listaPosts.map((post) => (
            <li key={post.id}>
              <h2 className="text-blue-300 font-bold text-xl">{post.titulo}</h2>
              <p>{post.contenido}</p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}