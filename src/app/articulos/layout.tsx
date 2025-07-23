export default function LayoutArticulos(
  {children}: Readonly<{children: React.ReactNode}>
){
  return (
    <div className="bg-gray-500 text-black">
      {children}
    </div>
  )
}