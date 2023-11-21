import '../globals.css'
import Sidebar from '../Sidebar'

export const metadata = {
  title: 'Tienda',
  description: 'Tienda',
}

export default function TiendaLayout({ children }) {
  return (
    <>
    <Sidebar/>
    {children}    
    </>
  )
}
