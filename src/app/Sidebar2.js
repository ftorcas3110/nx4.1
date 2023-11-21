import React from 'react'
import Link from "next/link";

function Sidebar2() {
  return (
    <nav className="sidebar">
    <Link href="/blog/entrada1">Entrada 1</Link>
    <Link href="/blog/entrada2">Entrada 2</Link>
    <Link href="/blog/entrada3">Entrada 3</Link>
    </nav>
  )
}

export default Sidebar2