import React from 'react'
import Link from "next/link";

function Sidebar() {
  return (
    <nav className="sidebar">
    <Link href="/tienda/electronica">Electrónica</Link>
    <Link href="/tienda/decoracion">Decoración</Link>
    <Link href="/tienda/mobiliario">Mobiliario</Link>
    <Link href="/tienda/libros">Libros</Link>
    </nav>
  )
}

export default Sidebar