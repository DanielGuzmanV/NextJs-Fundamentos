import Link from "next/link"

export default function Articulos() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <p>Pagina de articulos</p>

      <Link href="/articulos/vender">
        <button className="hover:bg-blue-500 bg-blue-700 py-2 px-4 rounded-md w-24">
          vender
        </button>
      </Link>
    </div>
  )
}