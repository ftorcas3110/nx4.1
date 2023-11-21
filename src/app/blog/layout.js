import '../globals.css'
import Sidebar2 from '../Sidebar2'

export const metadata = {
  title: 'Blog',
  description: 'Blog',
}

export default function BlogLayout({ children }) {
  return (
    <>
    <Sidebar2/>
    {children}    
    </>
  )
}
