import { Navbar } from '@/components/index'

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-24">
        <h1>Hello Public Layout General</h1>
        {children}
      </div>
    </>
  )
}
