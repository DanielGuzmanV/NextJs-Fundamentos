export default function LayoutPage(
  {children}: Readonly<{children: React.ReactNode}>
){
  return (
    <div className="bg-amber-300 text-black">
      {children}
    </div>
  )
}