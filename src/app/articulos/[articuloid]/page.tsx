interface Props {
  params: {
    articuloid: string;
  }
}

export default async function Articulo({params}: Props) {
  const {articuloid} = await params;

  return (
    <div className='border-3 border-blue-400 text-center justify-center items-center'>
      <p>Este es el parametro de la URL </p>
      <p>{articuloid}</p>
    </div>
  )
}